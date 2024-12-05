export function FAQ() {
  const faqs = [
    {
      question: 'How long does the temporary email last?',
      answer: 'The temporary email address and all received messages are automatically deleted after 24 hours.'
    },
    {
      question: 'Is this service completely free?',
      answer: 'Yes, our temporary email service is completely free to use with no hidden charges.'
    },
    {
      question: 'Can I send emails from this temporary address?',
      answer: 'No, this service is for receiving emails only. You cannot send emails from temporary addresses.'
    },
    {
      question: 'Is my privacy protected?',
      answer: 'Yes, we don\'t store any personal information and all emails are automatically deleted.'
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}