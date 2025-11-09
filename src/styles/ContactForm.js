import styled, { css, keyframes } from "styled-components";

// --- Main Wrapper ---
export const FormWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0rem auto;
  padding: 1rem;
  font-family: var(--bodyFont, "Roboto");
`;

// --- Header Text ---
export const TextWrapper = styled.div`
  text-align: center;
  margin-bottom: 2rem;

  h2 {
    font-family: var(--headingFont, "Island Moments");
    font-size: 3rem;
    color: var(--black);
    margin-bottom: 0.2rem;
  }

  p {
    font-size: 1.1rem;
    color: var(--grey-700);
  }
`;

// --- Form ---
export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
`;

export const InputGroup = styled.div`
  position: relative;
  width: 100%;
`;

// --- Base Styles for Inputs ---
// We use a css helper to share styles
const baseInputStyles = css`
  width: 100%;
  padding: 0.5rem;
  font-family: var(--bodyFont, "Roboto");
  font-size: 1rem;
  color: var(--black);
  background-color: var(--primary-50);
  border: 2px solid var(--grey-200);
  border-radius: var(--borderRadius);
  transition: all 0.3s ease;

  /* Modern placeholder */
  &::placeholder {
    color: var(--grey-500);
  }

  /* Focus style */
  &:focus {
    outline: none;
    border-color: var(--primary-500);
    box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.2); /* Orange shadow */
  }

  /* --- Error Styling --- */
  /* We use the $hasError prop passed from the component */
  ${({ $hasError }) =>
    $hasError &&
    css`
      border-color: var(--red-dark);
      &:focus {
        border-color: var(--red-dark);
        box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.2); /* Red shadow */
      }
    `}
`;

// --- Input & Textarea ---
export const StyledInput = styled.input`
  ${baseInputStyles}
`;

export const StyledTextArea = styled.textarea`
  ${baseInputStyles}
  resize: vertical;
  min-height: 120px;
`;

// --- Error Message ---
export const ErrorMessage = styled.p`
  color: var(--red-dark);
  font-size: 0.875rem;
  padding-left: 0.5rem;
  position: absolute;
`;

// --- Submit Button & Spinner ---
export const SubmitButton = styled.button`
  background: var(--primary-500);
  color: var(--white);
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: var(--bodyFont);
  font-size: 1rem;
  font-weight: 500;
  transition: var(--transition);
  border: none;
  cursor: pointer;
  width: fit-content;
  margin-inline: auto;

  /* Flex for the spinner */
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30px;

  &:hover {
    background: var(--primary-700);
    transform: scale(1.02);
  }

  &:disabled {
    background: var(--grey-300);
    cursor: not-allowed;
    transform: none;
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  width: 24px;
  height: 24px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top-color: var(--white);
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

// --- Footer ---
export const FooterText = styled.p`
  text-align: center;
  font-family: var(--secondaryFont);
  font-weight: 700;

  color: var(--primary-500);
  margin-top: 1rem;
`;

// --- Toast Notification ---
export const Toast = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 1rem 1.5rem;
  border-radius: var(--borderRadius);
  color: var(--white);
  font-weight: 600;
  z-index: 2000;
  transition: all 0.4s ease-in-out;

  /* Based on $type prop */
  background-color: ${({ $type }) =>
    $type === "success" ? "var(--green-dark)" : "var(--red-dark)"};

  /* Based on $show prop */
  opacity: ${({ $show }) => ($show ? "1" : "0")};
  transform: ${({ $show }) =>
    $show ? "translateX(0)" : "translateX(calc(100% + 2rem))"};
`;
