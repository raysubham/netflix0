import React from "react";
import { Accordion } from "../components/components";
import OptForm from "../components/OptForm/OptForm";
import FaqsData from "../fixtures/faqs.json";

export default function FaqsContainer({ children, ...restProps }) {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {FaqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      ))}

      <OptForm>
        <OptForm.Text>
          Ready to watch? Enter your email to create or restart your membership.
        </OptForm.Text>
        <OptForm.Input placeholder="Email Address"></OptForm.Input>
        <OptForm.Button>Try It Now</OptForm.Button>
      </OptForm>
    </Accordion>
  );
}
