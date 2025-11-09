import React, { useState, useEffect, useCallback } from "react";
import {
  FormWrapper,
  TextWrapper,
  StyledForm,
  InputGroup,
  StyledInput,
  StyledTextArea,
  SubmitButton,
  FooterText,
  ErrorMessage,
  Toast,
  Spinner,
} from "../styles/ContactForm";
import axios from "axios";

const initialState = { 
  name: "", 
  email: "", 
  phone: "", 
  message: "" 
};

// Validation patterns
const VALIDATION_PATTERNS = {
  email: /\S+@\S+\.\S+/,
  phone: /^\d{10}$/
};

// Error messages
const ERROR_MESSAGES = {
  name: "Name is required.",
  email: {
    required: "Email is required.",
    invalid: "Email is invalid."
  },
  phone: {
    required: "Phone is required.",
    invalid: "Phone must be exactly 10 digits."
  },
  message: "Message is required."
};

function ContactForm() {
  const [inputs, setInputs] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [touched, setTouched] = useState({}); // Track touched fields
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  // --- Toast Timeout Effect ---
  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast(prev => ({ ...prev, show: false }));
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  // --- Validation Function ---
  const validate = useCallback(() => {
    const tempErrors = {};

    // Name validation
    if (!inputs.name.trim()) {
      tempErrors.name = ERROR_MESSAGES.name;
    }

    // Email validation
    if (!inputs.email.trim()) {
      tempErrors.email = ERROR_MESSAGES.email.required;
    } else if (!VALIDATION_PATTERNS.email.test(inputs.email)) {
      tempErrors.email = ERROR_MESSAGES.email.invalid;
    }

    // Phone validation
    if (!inputs.phone.trim()) {
      tempErrors.phone = ERROR_MESSAGES.phone.required;
    } else if (!VALIDATION_PATTERNS.phone.test(inputs.phone)) {
      tempErrors.phone = ERROR_MESSAGES.phone.invalid;
    }

    // Message validation
    if (!inputs.message.trim()) {
      tempErrors.message = ERROR_MESSAGES.message;
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  }, [inputs]);

  // Validate on input change when field has been touched
  useEffect(() => {
    if (Object.keys(touched).length > 0) {
      validate();
    }
  }, [inputs, touched, validate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For phone field, only allow numbers and limit to 10 digits
    if (name === "phone") {
      const numbersOnly = value.replace(/\D/g, "").slice(0, 10);
      setInputs(prev => ({ ...prev, [name]: numbersOnly }));
    } else {
      setInputs(prev => ({ ...prev, [name]: value }));
    }

    // Clear error for this field as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = Object.keys(inputs).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    setToast({ show: false, message: "", type: "success" });

    if (!validate()) {
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const url = "https://vernanbackend.ezlab.in/api/contact-us/";
      const response = await axios.post(url, inputs);
      
      if (response.status === 201) {
        setInputs(initialState);
        setTouched({});
        setToast({
          show: true,
          message: "Message sent successfully!",
          type: "success",
        });
      } else {
        throw new Error(`Unexpected status code: ${response.status}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setToast({
        show: true,
        message: error.response?.data?.message || "Something went wrong. Please try again.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneKeyDown = (e) => {
    // Prevent non-numeric input
    if (!/\d/.test(e.key) && 
        !['Backspace', 'Delete', 'Tab', 'Escape', 'Enter', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <FormWrapper>
      <TextWrapper>
        <h2>Join the Story</h2>
        <p>Ready to bring your vision to life? Let's talk.</p>
      </TextWrapper>

      <StyledForm onSubmit={handleSubmit} noValidate>
        {/* --- Name Input --- */}
        <InputGroup>
          <StyledInput
            type="text"
            name="name"
            placeholder="Your name*"
            value={inputs.name}
            onChange={handleChange}
            onBlur={handleBlur}
            $hasError={!!errors.name && touched.name}
            disabled={isLoading}
          />
          {errors.name && touched.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        </InputGroup>

        {/* --- Email Input --- */}
        <InputGroup>
          <StyledInput
            type="email"
            name="email"
            placeholder="Your email*"
            value={inputs.email}
            onChange={handleChange}
            onBlur={handleBlur}
            $hasError={!!errors.email && touched.email}
            disabled={isLoading}
          />
          {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </InputGroup>

        {/* --- Phone Input --- */}
        <InputGroup>
          <StyledInput
            type="tel"
            name="phone"
            placeholder="Phone*"
            value={inputs.phone}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handlePhoneKeyDown}
            $hasError={!!errors.phone && touched.phone}
            maxLength="10"
            disabled={isLoading}
          />
          {errors.phone && touched.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
        </InputGroup>

        {/* --- Message Input --- */}
        <InputGroup>
          <StyledTextArea
            name="message"
            rows={5}
            placeholder="Your message*"
            value={inputs.message}
            onChange={handleChange}
            onBlur={handleBlur}
            $hasError={!!errors.message && touched.message}
            disabled={isLoading}
          />
          {errors.message && touched.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        </InputGroup>

        {/* --- Submit Button --- */}
        <SubmitButton 
          type="submit" 
          disabled={isLoading}
          $isLoading={isLoading}
        >
          {isLoading ? <Spinner /> : "Submit"}
        </SubmitButton>
      </StyledForm>

      <FooterText>vernita@varnanfilms.co.in | +91 98736 84567</FooterText>

      {/* --- Toast Notification --- */}
      <Toast $show={toast.show} $type={toast.type}>
        {toast.message}
      </Toast>
    </FormWrapper>
  );
}

export default ContactForm;