import { useState } from 'react';
import { Copy, RefreshCw } from 'lucide-react';

export function EmailBox() {
  const [tempEmail, setTempEmail] = useState('user' + Math.random().toString(36).substring(2, 8) + '@tempmail.com');

  const generateNewEmail = () => {
    setTempEmail('user' + Math.random().toString(36).substring(2, 8) + '@tempmail.com');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tempEmail);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Your Temporary Email</h2>
        <button
          onClick={generateNewEmail}
          className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-700"
        >
          <RefreshCw className="h-4 w-4" />
          <span>Generate New</span>
        </button>
      </div>
      
      <div className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg">
        <input
          type="text"
          value={tempEmail}
          readOnly
          className="flex-1 bg-transparent outline-none text-gray-700"
        />
        <button
          onClick={copyToClipboard}
          className="p-2 hover:bg-gray-200 rounded-full transition"
          title="Copy to clipboard"
        >
          <Copy className="h-5 w-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
}