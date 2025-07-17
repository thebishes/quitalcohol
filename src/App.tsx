import React from 'react';
import { ExternalLink, Star, BookOpen } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/public/quit1.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="bg-white bg-opacity-95 backdrop-blur-sm shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-8 h-8 text-blue-400" />
                <h1 className="text-2xl font-bold text-gray-900">Quit While You Are Ahead</h1>
              </div>
              <a
                href="https://amzn.eu/d/4rXW4cF"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center space-x-2 shadow-lg"
              >
                <span>Buy on Amazon</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-blue-50 bg-opacity-70 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blue-200 border-opacity-30">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Quit While You Are Ahead
              </h2>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                A transformative guide that challenges conventional wisdom about persistence and teaches you the strategic art of knowing when to quit for ultimate success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://amzn.eu/d/4rXW4cF"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 hover:bg-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Get Your Copy Now</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a
                  href="/public/backcover.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-100 bg-opacity-60 hover:bg-blue-200 hover:bg-opacity-70 text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200 border border-blue-200 border-opacity-40 flex items-center justify-center space-x-2"
                >
                  <span>The Back Cover</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Book Description Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 bg-opacity-70 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blue-200 border-opacity-30">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Quit While You Are Ahead: A Real, Raw Guide to Reclaiming Your Life from Alcohol</h3>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Are you tired of waking up with regret? Wondering if alcohol is taking more than it's giving? Quit While You Are Ahead is your compassionate, honest, and unfiltered companion for the journey to sobriety—whether you're just curious or fighting for your freedom from alcohol's grip.
                </p>
                <p>
                  In this deeply personal and powerful book, the author shares hard-earned wisdom, raw journal entries, and real-life stories of struggle, slip-ups, and breakthrough moments. This isn't a clinical guide—it's a conversation with someone who's been exactly where you are.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 bg-opacity-70 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-blue-200 border-opacity-30">
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">What Readers Are Saying</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="border-l-4 border-blue-400 pl-6">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-blue-300 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3">
                    "This book completely changed how I think about commitment and success. A must-read for anyone feeling stuck in their career or business."
                  </p>
                  <p className="font-semibold text-gray-900">— Sarah M., Entrepreneur</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-6">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-blue-300 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3">
                    "Brilliant insights backed by solid research. The framework helped me make the best career decision of my life."
                  </p>
                  <p className="font-semibold text-gray-900">— Michael R., Executive</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-400 to-blue-500 bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl text-white border border-blue-300 border-opacity-40">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Decision-Making?</h3>
              <p className="text-xl mb-8 opacity-90">
                Join thousands of readers who have discovered the power of strategic quitting.
              </p>
              <a
                href="https://amzn.eu/d/4rXW4cF"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white bg-opacity-90 text-blue-500 hover:bg-opacity-100 px-8 py-4 rounded-lg font-bold text-lg transition-colors duration-200 inline-flex items-center space-x-2 shadow-lg"
              >
                <span>Order Now on Amazon</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-blue-900 bg-opacity-80 backdrop-blur-sm text-white py-8 border-t border-blue-300 border-opacity-30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <BookOpen className="w-6 h-6" />
              <span className="text-xl font-bold">Quit While You Are Ahead</span>
            </div>
            <p className="text-blue-100">
              © 2024 Quit While You Are Ahead. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;