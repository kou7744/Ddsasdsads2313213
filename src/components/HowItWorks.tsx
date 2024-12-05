export function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Get Your Email',
      description: 'Receive your temporary email address instantly with no registration required.'
    },
    {
      number: '2',
      title: 'Use It Anywhere',
      description: 'Use this email address for signups, downloads, or any other purpose.'
    },
    {
      number: '3',
      title: 'Receive Messages',
      description: 'Messages appear instantly in your inbox. Read them right away.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-16 w-full h-0.5 bg-indigo-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}