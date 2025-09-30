import { Menu, X, Brain, Play } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <img 
                  src="/WhatsApp Image 2025-09-24 at 14.54.52.jpeg" 
                  alt="COGNITA Logo" 
                  className="h-12 w-12 object-contain rounded-lg"
                />
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 tracking-tight">COGNITA</h1>
                  <p className="text-sm text-emerald-600 font-medium">AI Meeting Intelligence</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <a 
                href="#features" 
                className="px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 font-medium"
              >
                Features
              </a>
              <a 
                href="#how-it-works" 
                className="px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 font-medium"
              >
                How It Works
              </a>
              <a 
                href="#pricing" 
                className="px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 font-medium"
              >
                Pricing
              </a>
              <button 
                onClick={() => setShowDemo(true)}
                className="px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 font-medium flex items-center space-x-2"
              >
                <Play className="h-4 w-4" />
                <span>Demo</span>
              </button>
              <a 
                href="#contact" 
                className="px-4 py-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 font-medium"
              >
                Contact
              </a>
              
              {/* CTA Buttons */}
              <div className="flex items-center space-x-3 ml-6 pl-6 border-l border-gray-200">
                <button className="px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors font-medium">
                  Sign In
                </button>
                <button className="bg-emerald-600 text-white px-6 py-2.5 rounded-lg hover:bg-emerald-700 transition-all duration-200 font-semibold shadow-sm hover:shadow-md">
                  Get Started Free
                </button>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 bg-white">
              <nav className="px-4 py-6 space-y-1">
                <a 
                  href="#features" 
                  className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#how-it-works" 
                  className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  How It Works
                </a>
                <a 
                  href="#pricing" 
                  className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </a>
                <button 
                  onClick={() => {
                    setShowDemo(true);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 w-full px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 font-medium"
                >
                  <Play className="h-4 w-4" />
                  <span>Live Demo</span>
                </button>
                <a 
                  href="#contact" 
                  className="block px-4 py-3 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
                
                {/* Mobile CTA Buttons */}
                <div className="pt-4 mt-4 border-t border-gray-200 space-y-3">
                  <button 
                    className="w-full px-4 py-3 text-gray-700 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all duration-200 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </button>
                  <button 
                    className="w-full bg-emerald-600 text-white px-4 py-3 rounded-lg hover:bg-emerald-700 transition-all duration-200 font-semibold shadow-sm"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started Free
                  </button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Live Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-slideUp">
            <div className="flex justify-between items-center p-6 border-b">
              <h3 className="text-2xl font-bold text-gray-900">Live COGNITA Demo</h3>
              <button 
                onClick={() => setShowDemo(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors group"
              >
                <X className="h-6 w-6 group-hover:rotate-90 transition-transform duration-200" />
              </button>
            </div>
            <div className="p-6">
              <div className="aspect-video bg-gray-900 rounded-lg mb-4 relative overflow-hidden">
                <video 
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450'%3E%3Crect width='800' height='450' fill='%23111827'/%3E%3Ctext x='400' y='225' text-anchor='middle' fill='%2310b981' font-size='24' font-family='Arial'%3ECOGNITA AI Demo%3C/text%3E%3C/svg%3E"
                >
                  <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2">Try Real-time Transcription</h4>
                  <p className="text-sm text-emerald-700">Experience our AI transcribing speech in real-time with 98% accuracy.</p>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-cyan-800 mb-2">AI Meeting Insights</h4>
                  <p className="text-sm text-cyan-700">Watch as COGNITA automatically extracts key decisions and action items.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}