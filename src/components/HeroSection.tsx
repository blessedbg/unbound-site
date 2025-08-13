import React from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Clock, Zap, ChevronDown } from 'lucide-react';
import CTAButton from './CTAButton';
import EarlyAccessBadge from './EarlyAccessBadge';

const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  const scrollToNext = () => {
    const nextSection = document.querySelector('#problem');
    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 pt-20 pb-16">
        <div className="text-center space-y-8 mb-16">
          {/* Early Access Badge */}
          <div className="flex justify-center mb-8">
            <EarlyAccessBadge />
          </div>

          {/* Main Headline — keep EXACT English wording/styling you liked */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight max-w-6xl mx-auto">
            {i18n.language === 'en' ? (
              <>
                You keep choosing the <span className="text-accent font-semibold">pain</span> you{' '}
                <span className="text-accent font-semibold">recognize</span>.<br />
                Let&apos;s <span className="text-accent font-semibold">change</span> that.
              </>
            ) : (
              <>
                Sigues eligiendo el <span className="text-accent font-semibold">dolor</span> que{' '}
                <span className="text-accent font-semibold">conoces</span>.<br />
                Cambiemos <span className="text-accent font-semibold">eso</span>.
              </>
            )}
          </h1>

          {/* Subtitle — gradient on Break / Rewire / Build */}
          <div
            className="
              text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed
              max-w-5xl mx-auto space-y-2
              text-gray-700
              [&_*]:text-gray-700
            "
          >
            <p>
              <span className="font-bold text-gradient">{t('hero.subtitle.part1')}</span>
              <span>{t('hero.subtitle.part2')}</span>
              <span className="font-bold text-gradient">{t('hero.subtitle.rewires')}</span>
              <span>{t('hero.subtitle.part3')}</span>
            </p>
            <p>
              <span>Build </span>
              <span className="font-bold text-gradient">{t('hero.subtitle.selfTrust')}</span>
              <span>{t('hero.subtitle.part4')}</span>
              <span className="font-bold text-gradient">{t('hero.subtitle.safeLove')}</span>
              <span>{t('hero.subtitle.part5')}</span>
            </p>
          </div>
        </div>

        {/* Video Section — mirrors Spanish embed, forced EN UI/captions */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="video-container relative rounded-2xl overflow-hidden shadow-2xl bg-black">
            <div className="aspect-video">
              <iframe
                width="1296"
                height="729"
                style={{ maxWidth: '100%', height: 'auto', aspectRatio: '16 / 9', border: 0 }}
                src="https://www.youtube-nocookie.com/embed/AHiT-tIk1uM?autoplay=1&mute=1&loop=1&playlist=AHiT-tIk1uM&playsinline=1&controls=0&modestbranding=1&rel=0&cc_load_policy=1&cc_lang_pref=en&hl=en"
                title="Unbound VSL (EN)"
                frameBorder={0}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* Video Caption */}
          <div className="text-center mt-6 space-y-2">
            <p className="text-sm text-gray-600">{t('hero.captionsAvailable')}</p>
            <div className="flex items-center justify-center space-x-4 text-sm">
              <span className="flex items-center space-x-1">
                <span className="w-3 h-2 bg-red-500 rounded-sm" />
                <span className="text-gray-600">{t('hero.english')}</span>
              </span>
              <span className="flex items-center space-x-1">
                <span className="w-3 h-2 bg-yellow-500 rounded-sm" />
                <span className="text-gray-600">{t('hero.spanish')}</span>
              </span>
            </div>
          </div>
        </div>

        {/* CTA Section — mirrors Spanish */}
        <div className="text-center space-y-8">
          <CTAButton
            text={t('stickyButton')}
            className="btn-lg px-12 py-4 text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
          />

          {/* Trust Indicators (Shield / Clock / Zap like Spanish) */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-12">
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 font-semibold text-sm">{t('hero.trustIndicators.guarantee')}</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 font-semibold text-sm">{t('hero.trustIndicators.instantAccess')}</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-100">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 font-semibold text-sm">{t('hero.trustIndicators.scienceBased')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Scroll Indicator if you want it on this layout */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 transform animate-bounce">
        <button
          onClick={scrollToNext}
          className="w-10 h-10 border-2 border-slate-400 rounded-full flex items-center justify-center hover:border-slate-600 hover:bg-white/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-rose-300 focus:ring-opacity-50"
          aria-label="Scroll to learn about the problem we solve"
        >
          <ChevronDown className="w-5 h-5 text-slate-600" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
