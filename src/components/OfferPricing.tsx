import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star, Clock, Gift } from 'lucide-react';

const OfferPricing: React.FC = () => {
  const { t } = useTranslation();

  // Set this manually based on your launch state
  const isEarlyAccess = true; // Change to false if you're out of early access

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-rose-900 to-pink-900 text-white relative overflow-hidden">
      {/* Urgency Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 border border-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/5 w-24 h-24 border border-white rounded-full animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-shadow-strong">
            {t('pricing.headline')}
          </h2>
          <p className="text-xl text-white font-semibold text-shadow-glow leading-relaxed max-w-4xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        {/* Main Pricing Card - Conversion Optimized */}
        <div className="space-y-8 mb-16">
          {isEarlyAccess ? (
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-12 border-2 border-emerald-400 shadow-2xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                  EARLY ACCESS
                </div>
              </div>
              
              <div className="text-center mb-12">
                <div className="mb-4">
                  {/* Hardcoded to match your Whop one-time price */}
                  <span className="text-6xl md:text-7xl font-bold text-white text-shadow-strong">$197</span>
                </div>
                <p className="text-2xl text-white font-bold text-shadow-glow mb-2">Early Access Price</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* ONE-TIME PURCHASE TILE (clickable) */}
                <a
                  href="https://whop.com/checkout/plan_3FvyJwPtB8nvp?d2c=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Proceed to Whop checkout for one-time purchase ($197)"
                  className="block bg-white/10 rounded-2xl p-8 text-center border-2 border-green-400 shadow-lg hover:bg-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-300 cursor-pointer"
                  data-cta="checkout-onetime"
                  role="button"
                >
                  <div className="text-green-400 font-bold text-sm mb-2">BEST VALUE</div>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-white">$197</span>
                  </div>
                  <p className="text-white font-semibold">One-time payment</p>
                </a>

                {/* 3-PAY PLAN TILE (clickable) */}
                <a
                  href="https://whop.com/checkout/plan_tn8U1Uj6e9cxd?d2c=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Proceed to Whop checkout for 3 monthly payments of $77"
                  className="block bg-white/10 rounded-2xl p-8 text-center shadow-lg hover:bg-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-300 cursor-pointer"
                  data-cta="checkout-3pay"
                  role="button"
                >
                  <div className="flex items-center justify-center mb-1">
                    <span className="text-3xl font-bold text-white">$77</span>
                    <span className="text-white/80 ml-1">/mo</span>
                  </div>
                  <p className="text-white font-semibold">3 monthly payments</p>
                  <p className="text-white/80 text-sm">Start today for just $77</p>
                </a>
              </div>

              <div className="bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-2xl p-10 border border-yellow-400/30 shadow-lg">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white text-shadow-strong">Founder Bonus Included</span>
                </div>
                <p className="text-center text-white font-semibold text-shadow-glow text-lg">
                  Emotional Check-In Deck™ (Value: $47) - FREE
                </p>
              </div>
              <p className="text-center text-white/70 text-sm mt-3">Secure Whop checkout · Opens in a new tab</p>
            </div>
          ) : (
            <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-12 border border-white/30 shadow-2xl">
              <div className="text-center mb-12">
                <div className="mb-4">
                  <span className="text-6xl md:text-7xl font-bold text-white text-shadow-strong">{t('pricing.standardPrice')}</span>
                </div>
                <p className="text-2xl text-white font-bold text-shadow-glow mb-2">Standard Price</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Wrap standard tiles too, if you’ll keep same plans post-launch */}
                <a
                  href="https://whop.com/checkout/plan_3FvyJwPtB8nvp?d2c=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/10 rounded-2xl p-8 text-center shadow-lg hover:bg-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-300 cursor-pointer"
                  data-cta="checkout-onetime"
                  role="button"
                >
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-white">{t('pricing.standardPrice')}</span>
                  </div>
                  <p className="text-white font-semibold">One-time payment</p>
                </a>

                <a
                  href="https://whop.com/checkout/plan_tn8U1Uj6e9cxd?d2c=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/10 rounded-2xl p-8 text-center shadow-lg hover:bg-white/15 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-300 cursor-pointer"
                  data-cta="checkout-3pay"
                  role="button"
                >
                  <div className="flex items-center justify-center mb-1">
                    <span className="text-3xl font-bold text-white">{t('pricing.standardMonthly')}</span>
                    <span className="text-white/80 ml-1">/mo</span>
                  </div>
                  <p className="text-white font-semibold">3 monthly payments</p>
                  <p className="text-white/80 text-sm">Start today for just {t('pricing.standardMonthly')}</p>
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 rounded-2xl p-10 border border-white/30 hover:bg-white/15 transition-colors duration-300 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Star className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-white text-shadow-glow mb-3 text-lg">{t('pricing.features.instantAccess.title')}</h4>
            <p className="text-white font-medium text-shadow-glow">{t('pricing.features.instantAccess.description')}</p>
          </div>
          <div className="bg-white/10 rounded-2xl p-10 border border-white/30 hover:bg-white/15 transition-colors duration-300 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-white text-shadow-glow mb-3 text-lg">{t('pricing.features.selfPaced.title')}</h4>
            <p className="text-white font-medium text-shadow-glow">{t('pricing.features.selfPaced.description')}</p>
          </div>
          <div className="bg-white/10 rounded-2xl p-10 border border-white/30 hover:bg-white/15 transition-colors duration-300 shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-white text-shadow-glow mb-3 text-lg">{t('pricing.features.lifetimeAccess.title')}</h4>
            <p className="text-white font-medium text-shadow-glow">{t('pricing.features.lifetimeAccess.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferPricing;
