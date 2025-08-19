import React from 'react';
import { useTranslation } from 'react-i18next';
import { Heart, Clock, Star, Shield } from 'lucide-react';
import CTAButton from './CTAButton';

const FinalCTA: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-gradient-primary text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center space-y-8 mb-20 animate-fade-in-up">
          <Heart className="w-24 h-24 mx-auto text-pink-200 animate-gentle-heartbeat" aria-hidden="true" />
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            {t('finalCTA.headline')}
          </h2>
          <p className="text-2xl text-white font-semibold text-shadow-glow max-w-4xl mx-auto leading-relaxed">
            {t('finalCTA.subtitle')}
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
              <h4 className="text-xl font-bold mb-3 text-gray-900">{t('finalCTA.trustIndicators.startToday.title')}</h4>
              <p className="text-gray-700 font-medium leading-relaxed">{t('finalCTA.trustIndicators.startToday.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">{t('finalCTA.trustIndicators.riskFree.title')}</h4>
              <p className="text-gray-700 font-medium leading-relaxed">{t('finalCTA.trustIndicators.riskFree.description')}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gray-900">{t('finalCTA.trustIndicators.lifeChanging.title')}</h4>
              <p className="text-gray-700 font-medium leading-relaxed">{t('finalCTA.trustIndicators.lifeChanging.description')}</p>
            </div>
          </div>

          {/* Pricing */}
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">{t('finalCTA.productTitle')}</h3>
            <div className="flex items-center justify-center mb-6">
              {/* Hardcoded to match Whop one-time checkout */}
              <span className="text-5xl font-bold text-primary">$197</span>
            </div>
            <p className="text-gray-600 font-medium mt-2">
              {t('pricing.paymentPlan')} $77/month (3 months)
            </p>
          </div>

          {/* Bonus */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-400 p-10 mb-12 shadow-lg">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <Star className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">{t('finalCTA.bonusTitle')}</span>
            </div>
            <p className="text-center text-xl text-gray-800 font-semibold leading-relaxed">
              {t('finalCTA.bonusDescription')}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-8">
            <a
              href="https://whop.com/checkout/plan_3FvyJwPtB8nvp?d2c=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('finalCTA.primaryCTA')}
              data-cta="checkout-onetime"
              className="block"
            >
              <CTAButton 
                text={t('finalCTA.primaryCTA')}
                variant="primary"
                className="btn-lg w-full text-2xl py-8 animate-pulse shadow-2xl rounded-2xl"
                aria-label={t('finalCTA.primaryCTA')}
              />
            </a>

            <a
              href="https://whop.com/checkout/plan_tn8U1Uj6e9cxd?d2c=true"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t('finalCTA.secondaryCTA')}
              data-cta="checkout-3pay"
              className="block"
            >
              <CTAButton 
                text={t('finalCTA.secondaryCTA')}
                variant="secondary"
                className="btn-lg w-full text-xl py-6 rounded-2xl"
                aria-label={t('finalCTA.secondaryCTA')}
              />
            </a>

            <p className="text-center text-white/70 text-sm">
              Secure Whop checkout · Opens in a new tab
            </p>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="text-center space-y-6 mb-20 animate-fade-in-up delay-400 max-w-5xl mx-auto">
          <blockquote className="text-2xl text-white font-bold text-shadow-glow">
            "{t('finalCTA.quote')}"
          </blockquote>
          <p className="text-xl text-white font-semibold text-shadow-glow">
            {t('finalCTA.finalMessage')}
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
            {t('finalCTA.copyright')}
          </p>
        </div>
      </footer>
    </section>
  );
};

export default FinalCTA;
