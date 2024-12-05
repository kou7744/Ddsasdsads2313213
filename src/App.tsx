import React from 'react';
import { Header } from './components/Header';
import { EmailBox } from './components/EmailBox';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { FAQ } from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Get a Temporary Email Address Instantly
          </h1>
          <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto">
            Protect your privacy with disposable email addresses. No registration required.
          </p>
          <EmailBox />
        </div>
      </section>

      <Features />
      <HowItWorks />
      <FAQ />

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} TempMail. All rights reserved.</p>
          <p className="text-sm mt-2">
            This service is for legitimate use only. We do not support spam or illegal activities.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;