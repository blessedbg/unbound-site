import React from 'react';
import { Heart, Clock, Star, Shield } from 'lucide-react';
import CTAButton from './CTAButton';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-primary text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center space-y-8 mb-20 animate-fade-in-up">
          <Heart className="w-24 h-24 mx-auto text-pink-200 animate-gentle-heartbeat" aria-hidden="true" />
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Transform Your Love Life
          </h2>
          <p className="text-2xl text-white font-semibold text-shadow-glow max-w-4xl mx-auto leading-relaxed">
            Join today and take the first step toward an extraordinary relationship journey.
          </p>
        </div>

        {/* Main Offer Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-12 md:p-16 mb-20 max-w-5xl mx-auto animate-fade-in-up delay-200 border-2 border-yellow-400">
          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Start Today</h4>
              <p className="text-gray-700 font-medium leading-relaxed">Begin your journey instantly with full access.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Risk Free</h4>
              <p className="text-gray-700 font-medium leading-relaxed">Secure checkout and peace of mind guaranteed.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">Life Changing</h4>
              <p className="text-gray-700 font-medium leading-relaxed">Transform how you connect and love, forever.</p>
            </div>
          </div>

          {/* Pricing */}
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Unbound Program</h3>
            <div className="flex items-center justify-center mb-6">
              <span className="text-5xl font-bold text-primary">$197</span>
            </div>
            <p className="text-gray-600 font-medium mt-2">or 3 payments of $77/month</p>
          </div>

          {/* Bonus */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-400 p-10 mb-12 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Special Bonus Included</span>
            </div>
            <p className="text-center text-xl text-gray-800 font-semibold leading-relaxed">
              Enroll today and unlock exclusive content designed to accelerate your growth.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-8">
            <CTAButton
              text="Get Unbound for $197"
              href="https://whop.com/checkout/197-link-goes-here"
              variant="primary"
              className="btn-lg w-full text-2xl py-8 animate-pulse shadow-2xl rounded-2xl"
              aria-label="Get Unbound for $197"
            />
            <CTAButton
              text="Start with Payment Plan ($77/month)"
              href="https://whop.com/checkout/77-link-goes-here"
              variant="secondary"
              className="btn-lg w-full text-xl py-6 rounded-2xl"
              aria-label="Start with Payment Plan ($77/month)"
            />
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="text-center space-y-6 mb-20 animate-fade-in-up delay-400 max-w-5xl mx-auto">
          <blockquote className="text-2xl text-white font-bold text-shadow-glow">
            "The best investment you can make is in yourself and your relationships."
          </blockquote>
          <p className="text-xl text-white font-semibold text-shadow-glow">
            Join Unbound today and start your transformation.
          </p>
        </div>

        {/* Brand Logo */}
        <div className="text-center mb-20 animate-fade-in-up delay-500 bg-white/10 backdrop-blur-sm rounded-2xl py-8 px-12 border border-white/20 max-w-md mx-auto">
          <img
            src="/Unbound Logo.png"
            alt="Unbound - Transform Your Love Life"
            className="max-w-[180px] mx-auto filter brightness-0 invert opacity-95 hover:opacity-100 transition-opacity duration-200"
            loading="lazy"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/20 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-white/70 text-lg">
            © {new Date().getFullYear()} Unbound. All rights reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default FinalCTA;
