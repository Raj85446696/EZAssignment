import React from "react";
import ContactForm from "../components/ContactForm";
import topRightImg from "../assets/contact/topRight.png";
import bottomLeftImg from "../assets/contact/bottomLeft.png";

// Import styles
import {
  ContactSection,
  GridWrapper,
  TextColumn,
  FormColumn,
  PageTitle,
  TopRightImage,
  BottomLeftImage,
} from "../styles/Contact";

function ContactPage() {
  return (
    <ContactSection>
      <GridWrapper>
        {/* Left Column (Text) */}
        <TextColumn>
          <PageTitle>
            Whether you have an idea, a question, or simply want to explore how
            V can work together, V’re just a message away. Let’s catch up over
            coffee. Great stories always begin with a good conversation.
          </PageTitle>
        </TextColumn>

        {/* Right Column (Form) */}
        <FormColumn>
          <ContactForm />
        </FormColumn>
      </GridWrapper>

      {/* Absolute Decorative Images */}
      <TopRightImage src={topRightImg} alt="" />
      <BottomLeftImage src={bottomLeftImg} alt="" />
    </ContactSection>
  );
}

export default ContactPage;
