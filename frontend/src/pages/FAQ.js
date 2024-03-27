import React, { useState } from 'react';
import '../styles/FAQ.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const questionsAnswers = [
    { question: 'What is EZAutoParts?', answer: 'EZAutoParts is an e-commerce website dedicated to making the search for auto parts easier and more user-friendly.' },
    { question: 'How does EZAutoParts simplify the search for auto parts?', answer: 'We provide an intuitive user interface and implement features like a virtual assistant to help users find the parts they need quickly and easily.' },
    { question: 'Can I find parts for any type of vehicle on EZAutoParts?', answer: 'Yes, we offer a wide range of parts for various vehicle makes and models.' },
    { question: 'How do I search for a specific part on the website?', answer: 'You can use our search bar to enter the name or part number, or you can use our virtual assistant for guided assistance.' },
    { question: 'What if I do not know the exact name of the part I need?', answer: 'Our virtual assistant can help you identify the part you need based on a description of the issue or the function of the part.' },
    { question: 'Do you offer customer support if I need help with my order?', answer: 'Yes, we have a dedicated customer support team ready to assist you with any questions or concerns.' },
    { question: 'Can I return a part if it is not the right fit for my vehicle?', answer: 'Yes, we have a return policy in place. Please refer to our Returns & Refunds section for more details.' },
    { question: 'How can I track my order once it is placed?', answer: 'You will receive a tracking number in your order confirmation email, which you can use to track your shipment.' },
    { question: 'Do you offer international shipping?', answer: 'Currently, we only ship within the United States, but we plan to expand our shipping options in the future.' },
    { question: 'How does the virtual assistant work?', answer: 'Our virtual assistant uses AI technology to understand your queries and guide you to the right parts or information on our website.' },
    { question: 'Can I use the virtual assistant to diagnose car problems?', answer: 'Yes, you can describe your car\'s symptoms, and the virtual assistant can suggest possible parts that might need replacement.' },
    { question: 'Is it safe to make payments on EZAutoParts?', answer: 'Yes, we use secure payment gateways to ensure your transactions are safe and confidential.' },
    { question: 'How often do you update your inventory?', answer: 'Our inventory is regularly updated to ensure we have the latest parts available for our customers.' },
    { question: 'Can I sign up for notifications for when a specific part is back in stock?', answer: 'Yes, you can subscribe to back-in-stock alerts for any part that is currently unavailable.' },
    { question: 'Do you offer discounts or promotions?', answer: 'Yes, we periodically offer discounts and promotions. Sign up for our newsletter to stay updated on our latest deals.' },
    { question: 'How can I provide feedback or suggestions about the website?', answer: 'We value your feedback! You can contact us through our feedback form or reach out to our customer support team!' },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="faq-section">
        <h1>Frequently Asked Questions</h1>
        <div className="faq-grid">
          {questionsAnswers.map((qa, index) => (
            <div key={index} className="faq-item" onClick={() => toggleAnswer(index)}>
              <div className="faq-question">{qa.question}</div>
              {activeIndex === index && <div className="faq-answer">{qa.answer}</div>}
            </div>
          ))}
        </div>
      </div>
      <footer className="ContactFooter">
        <div className="ContactInfo">
          <h2>Contact Information</h2>
          <p>EZAUTOPARTS</p>
          <p>================</p>
          <p>650 Engineering Drive </p>
          <p>Peachtree Corners, GA 30092</p>
          <p>================</p>
          <p>800-829-3900</p>
          <p>Email:<a href="mailto:miloviveros@yahoo.com">miloviveros@yahoo.com</a></p>
        </div>
        <div className="SocialMedia">
          <h2>Connect with Us</h2>
          <a href="https://www.facebook.com"><FacebookIcon /></a>
          <a href="https://www.twitter.com"><TwitterIcon /></a>
          <a href="https://www.instagram.com"><InstagramIcon /></a>
        </div>
        <div className="BusinessHours">
          <h2>Business Hours</h2>
          <p>Monday - Friday: 9am - 5pm</p>
          <p>Saturday: 10am - 4pm</p>
          <p>Sunday: Closed</p>
        </div>
      </footer>
    </div>
  );
}

export default FAQ;