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
          <div className="w-full max-w-4xl mx-auto mb-8 animate-fade-in-up delay-200">
            <div className="relative group">
              {/* Subtle Premium Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-rose-200 to-pink-200 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
              
              {/* Video Wrapper - Clinical Precision */}
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                {/* Aspect Ratio Container */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe 
                    type="text/html" 
                    frameBorder="0" 
                    width="1920" 
                    height="1080" 
                    src="https://www.youtube-nocookie.com/embed/AHiT-tIk1uM?autoplay=1&mute=1&playsinline=1&loop=1&playlist=AHiT-tIk1uM&modestbranding=1&rel=0&iv_load_policy=3&cc_load_policy=1" 
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full"
                    title="Unbound Method - Transform Your Love Life - Video includes captions for accessibility"
                    aria-describedby="video-description"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
              </div>
            </div>
            
            {/* Accessible Video Description */}
            <div id="video-description" className="text-center mt-6 space-y-2">
              <p className="text-slate-600 text-sm font-medium">
                🎬 Video includes closed captions and audio description
              </p>
              <p className="text-slate-500 text-xs">
                Full transcript available upon request - contact support@unboundmethod.com
              </p>
            </div>
          </div>

          {/* Enhanced CTA Section - Accessible & Premium */}
          <div className="space-y-10 animate-fade-in-up delay-300">
            <div className="flex flex-col items-center justify-center space-y-6">
              <EarlyAccessBadge />
              <CTAButton 
                text={t('header.getStarted')}
                variant="primary"
                className="btn-lg px-16 py-6 text-xl font-bold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 rounded-2xl focus:ring-4 focus:ring-rose-300 focus:ring-opacity-50"
                aria-label="Get started with the Unbound Method - Transform your love life today"
              />
              
              <button
                onClick={scrollToNext}
                className="text-slate-600 hover:text-slate-800 flex items-center space-x-2 text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-opacity-50 rounded-lg px-3 py-2"
                aria-label="Learn more about the Unbound Method"
              >
                <span>Learn More</span>
                <ChevronDown className="w-5 h-5 animate-bounce" aria-hidden="true" />
              </button>
            </div>

            {/* Accessible Trust Indicators */}
            <div 
              className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm animate-fade-in-up delay-400 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-6 border border-slate-200 shadow-lg"
              role="list"
              aria-label="Trust indicators and guarantees"
            >
              <div className="flex items-center space-x-3 text-slate-700" role="listitem">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center shadow-sm">
                  <Shield className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                </div>
                <span className="font-semibold">{t('hero.trustIndicators.guarantee')}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-700" role="listitem">
                <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shadow-sm">
                  <Clock className="w-5 h-5 text-blue-600" aria-hidden="true" />
                </div>
                <span className="font-semibold">{t('hero.trustIndicators.instantAccess')}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-700" role="listitem">
                <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center shadow-sm">
                  <Brain className="w-5 h-5 text-purple-600" aria-hidden="true" />
                </div>
                <span className="font-semibold">{t('hero.trustIndicators.scienceBased')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accessible Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToNext}
          className="w-10 h-10 border-2 border-slate-400 rounded-full flex items-center justify-center hover:border-slate-600 hover:bg-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-opacity-50"
          aria-label="Scroll to learn about the problem we solve"
        >
          <ChevronDown className="w-5 h-5 text-slate-600" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
};

export default HeroSection;
