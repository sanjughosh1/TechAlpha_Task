// src/components/FAQ.jsx
import React from 'react';

const faqs = [
    {
        question: "What will Zomato charge me for creating a page on its platform?",
        answer: "The answer to this question."
    },
    {
        question: "What will Zomato charge me for creating a page on its platform?",
        answer: "The answer to this question."
    },
    {
        question: "What will Zomato charge me for creating a page on its platform?",
        answer: "The answer to this question."
    },
    {
        question: "What will Zomato charge me for creating a page on its platform?",
        answer: "The answer to this question."
    }
];

const FAQ = () => {
    return (
        <section className="text-center py-16">
            <h2 className="text-4xl font-bold">Frequently asked questions</h2>
            <div className="mt-8 space-y-4 ">
                {faqs.map((faq, index) => (
                    <details key={index}>
                        <summary className="text-xl rounded-xl m-3 ">{faq.question}</summary>
                        <p className="mt-2">{faq.answer}</p>
                    </details>
                ))}
            </div>
        </section>
    );
};

export default FAQ;
