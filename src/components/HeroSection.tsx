import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Shield, Clock, Zap } from 'lucide-react';
import CTAButton from './CTAButton';
import EarlyAccessBadge from './EarlyAccessBadge';

const HeroSection: React.FC = () => {
  const { t, i18n } = useTranslation();

  // Remove any dash in “in your body — and in”
  const part4Clean = t('hero.subtitle.part4').replace(/\s*[—–-]\s*/g, ' ');

  // --- YouTube embed (minimal chrome, EN UI/captions). Controls are ON so users can unmute if autoplay sound is blocked.
  const videoId = 'AHiT-tIk1uM';
  const videoSrc =
    `https://www.youtube-nocookie.com/embed/${videoId}` +
    `?autoplay=1&mute=1&loop=1&playlist=${videoId}` +
    `&playsinline=1&controls=1&modestbranding=1&rel=0` +
    `&cc_load_policy=1&cc_lang_pref=en&hl=en&enablejsapi=1`;

  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Best-effort attempt to unmute after autoplay starts (browsers may still keep it muted).
  useEffect(() => {
    const win = iframeRef.current?.contentWindow;
    if (!win) return;
    const post = (func: string, args: any[] = []) =>
      win.postMessage(JSON.stringify({ event: 'command', func, args }), '*');

    const t1 = setTimeout(() => {
      post('playVideo');
      post('unMute');
      post('setVolume', [100]);
    }, 600);

    return () => clearTimeout(t1);
  }, []);

  // --- Auto top padding to exactly clear your fixed header (no overlap, no giant gap)
  const [headerPad, setHeaderPad] = useState<number>(96); // fallback ~h-24
  useLayoutEffect(() => {
    const measure = () => {
      const headerEl =
        (document.getElementById('site-header') as HTMLElement | null) ||
        (document.querySelector('header') as HTMLElement | null);
      const h = headerEl?.getBoundingClientRect().height ?? 96;
      // smaller cushion to pull content up a bit
      setHeaderPad(Math.round(h + 2));
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-white to-rose-50 overflow-hidden">
      {/* Background elements (subtle) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply blur-xl opacity-30 animate-float delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply blur-xl opacity-20 animate-float delay-2000"></div>
      </div>

      {/* The hero offsets itself to header height dynamically */}
      <div
        className="relative max-w-7xl mx-auto px-4 pb-6 md:pb-8"
        style={{ paddingTop: headerPad }}
      >
        <div className="text-center space-y-2 mb-2">
          {/* Early Access Badge */}
          <div className="flex justify-center">
            <EarlyAccessBadge />
          </div>

          {/* Main Headline — pattern emphasized, pain de-emphasized */}
          <h1 className="text-base md:text-2xl lg:text-4xl font-extrabold text-gray-900 leading-tight md:leading-[1.15] tracking-tight max-w-5xl md:max-w-6xl mx-auto">
            {i18n.language === 'en' ? (
              <>
                Why You&apos;re <span className="text-gradient whitespace-nowrap">Magnetically Drawn</span> to Men Who Will <span className="font-semibold">Break Your Heart</span>
              </>
            ) : (
              <>
                Por qué estás <span className="text-gradient whitespace-nowrap">magnéticamente atraída</span> por hombres que te <span className="font-semibold">romperán el corazón</span>
              </>
            )}
          </h1>

          {/* Subtitle — solution emphasized */}
          <div className="text-xs md:text-sm lg:text-base font-medium leading-relaxed max-w-5xl mx-auto space-y-2 text-gray-700 [&_*]:text-gray-700">
            {i18n.language === 'en' ? (
              <p>
                The 6-phase method that <span className="font-bold text-gradient whitespace-nowrap">rewires</span> toxic attraction patterns
              </p>
            ) : (
              <p>
                El método de 6 fases que <span className="font-bold text-gradient whitespace-nowrap">reprograma</span> patrones de atracción tóxicos
              </p>
            )}
          </div>
        </div>

        {/* Video — single column, minimal chrome; CONTROLS visible so users can unmute */}
        <div className="max-w-3xl md:max-w-4xl mx-auto mb-1 md:mb-2">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
            <div className="aspect-video">
              <iframe
                ref={iframeRef}
                width="1296"
                height="729"
                style={{ maxWidth: '100%', height: 'auto', aspectRatio: '16 / 9', border: 0 }}
                src={videoSrc}
                title="Unbound VSL (EN)"
                frameBorder={0}
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Single primary CTA — centered */}
        <div className="text-center">
          <CTAButton
            text={t('stickyButton')}
            className="btn-lg px-9 md:px-11 py-3.5 md:py-4 text-lg md:text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300"
          />
        </div>

        {/* Trust chips — one place only, non-clickable */}
        <div className="text-center mt-8">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-100 cursor-default select-none">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 font-semibold text-sm">{t('hero.trustIndicators.guarantee')}</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-100 cursor-default select-none">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 font-semibold text-sm">{t('hero.trustIndicators.instantAccess')}</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-gray-100 cursor-default select-none">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-700 font-semibold text-sm">{t('hero.trustIndicators.scienceBased')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
