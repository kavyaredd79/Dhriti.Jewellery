import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";

const Faq = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const faqData = [
    {
      question: "My package is lost, what should I do?",
      answer:
        'Click the "Sign Up" button in the top right corner and follow the registration process.',
    },
    {
      question: "Can I cancel/change my order?",
      answer:
        'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
    },
    {
      question: "What should I do if my order is damaged or missing an item?",
      answer:
        'Go to "My Account" settings and select "Edit Profile" to make changes.',
    },
  ];
  const faqData1 = [
{
      question: "How can I edit my address?",
      answer:
        'Click the "Sign Up" button in the top right corner and follow the registration process.',
    },
    {
      question: "Can I modify or cancel my order?",
      answer:
        'Click on "Forgot Password" on the login page and follow the instructions sent to your email.',
    },
    {
      question: "How do I qualify for free shipping?",
      answer:
        'Go to "My Account" settings and select "Edit Profile" to make changes.',
    },
  ]
  console.log("faqData", faqData);
  return (
    <section className="bg-[#e8dcc6] py-16 px-6 lg:px-20">
      <div className="mx-auto">
        <h2 className="text-6xl font-serif text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="text-2xl">
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
          {faqData.map((faq, index) => (
            <Accordion
              key={index}
              className="mb-4"
              expanded={expanded === index}
              onChange={handleChange(index)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <p className="text-2xl font-serif">{faq.question}</p>
              </AccordionSummary>

              <AccordionDetails>
                <p className="text-gray-600">{faq.answer}</p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>

        <div className="text-2xl">
          <h2 className="text-2xl font-semibold mb-4 mt-10">Shipping and returns</h2>
          {faqData1.map((faq, index) => (
            <Accordion
              key={index}
              className="mb-4"
              expanded={expanded === index}
              onChange={handleChange(index)}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <p className="text-2xl font-serif">{faq.question}</p>
              </AccordionSummary>

              <AccordionDetails>
                <p className="text-gray-600">{faq.answer}</p>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Faq;
