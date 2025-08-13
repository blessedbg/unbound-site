import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Clock, Brain, ChevronDown } from 'lucide-react';
import CTAButton from './CTAButton';
import EarlyAccessBadge from './EarlyAccessBadge';

const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();


  const scrollToNext = () => {
    const nextSection = document.querySelector('#problem');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="relative min-h-screen overflow-hidden" role="banner">
      {/* Sophisticated Brand-Aligned Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-rose-50 to-pink-50"></div>
      
      {/* Subtle Geometric Pattern - Brand Aligned */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 border border-slate-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-48 h-48 border border-rose-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 border border-pink-300 rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen px-4 md:px-8 max-w-6xl mx-auto py-16">
        <div className="text-center space-y-12">
          {/* Header Content - Enhanced Typography & Accessibility */}
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-center text-slate-800">
              {i18n.language === 'en' ? (
                <>
                  You keep choosing the <span className="text-accent font-semibold">pain</span> you{' '}
                  <span className="text-accent font-semibold">recognize</span>.<br/>
                  Let's <span className="text-accent font-semibold">change</span> that.
                </>
              ) : (
                <>
                  Sigues eligiendo el <span className="text-accent font-semibold">dolor</span> que{' '}
                  <span className="text-accent font-semibold">conoces</span>.<br/>
                  Cambiemos <span className="text-accent font-semibold">eso</span>.
                </>
              )}
            </h1>
            <p className="mt-4 text-lg md:text-xl font-medium text-center text-slate-600 max-w-3xl mx-auto px-4">
              {t('hero.headline.micro')}
            </p>
          </div>

          {/* Enhanced Video Container - Premium Design */}
          <div className=
