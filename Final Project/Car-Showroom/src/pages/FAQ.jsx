import { useState } from "react";
import "./FAQ.css";

const faqData = [
    {
        question: "Do you provide test drives?",
        answer:
            "Yes. You can easily book a free test drive from the Car Details page."
    },
    {
        question: "Do you offer EMI or finance options?",
        answer:
            "Yes. We work with leading banks and finance companies to provide flexible EMI options."
    },
    {
        question: "Are all cars certified?",
        answer:
            "Absolutely. Every car goes through a detailed quality inspection before being listed."
    },
    {
        question: "Can I compare multiple cars?",
        answer:
            "Yes. Visit the Compare Cars page to compare specifications side by side."
    },
    {
        question: "How do I contact the showroom?",
        answer:
            "Use the Contact page or Contact Dealer form to reach our sales team."
    }
];

function FAQ() {
    const [active, setActive] = useState(null);

    const toggle = (index) => {
        setActive(active === index ? null : index);
    };

    return (
        <section className="faq-page">
            <h1>Frequently Asked Questions</h1>

            <div className="faq-container">
                {faqData.map((item, index) => (
                    <div
                        className={`faq-item ${active === index ? "active" : ""
                            }`}
                        key={index}
                    >
                        <div
                            className="faq-question"
                            onClick={() => toggle(index)}
                        >
                            <h3>{item.question}</h3>
                            <span>{active === index ? "−" : "+"}</span>
                        </div>

                        {active === index && (
                            <div className="faq-answer">
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default FAQ;