import { Shield, Clock, Trash2 } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-indigo-600" />,
      title: 'Secure & Private',
      description: 'Your temporary email is completely anonymous and secure.'
    },
    {
      icon: <Clock className="h-8 w-8 text-indigo-600" />,
      title: 'Instant Access',
      description: 'No registration required. Get your temporary email instantly.'
    },
    {
      icon: <Trash2 className="h-8 w-8 text-indigo-600" />,
      title: 'Auto-Destroy',
      description: 'Emails are automatically deleted after 24 hours.'
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Service?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="inline-block p-3 bg-indigo-50 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}