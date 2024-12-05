import { Mail } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-indigo-600 text-white py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Mail className="h-6 w-6" />
          <h1 className="text-xl font-bold">TempMail</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:text-indigo-200 transition">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-indigo-200 transition">How it Works</a></li>
            <li><a href="#faq" className="hover:text-indigo-200 transition">FAQ</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}