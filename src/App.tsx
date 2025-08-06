import React from 'react';
import { useTranslation } from 'react-i18next';
import ErrorBoundary from './components/ErrorBoundary';
import EarlyAccessBanner from './components/EarlyAccessBanner';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import LaunchNotice from './components/LaunchNotice';
import ProblemSection from './components/ProblemSection';
import OpportunitySection from './components/OpportunitySection';
import WhoThisIsFor from './components/WhoThisIsFor';
import ValueProposition from './components/ValueProposition';
import ScientificProof from './components/ScientificProof';
import OriginStory from './components/OriginStory';
import ProductBreakdown from './components/ProductBreakdown';
import OfferPricing from './components/OfferPricing';
import Guarantee from './components/Guarantee';
import FutureVision from './components/FutureVision';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import BackToTop from './components/BackToTop';
import ChatSupport from './components/ChatSupport';

function App() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <EarlyAccessBanner />
      <Header />
      <ErrorBoundary>
        <main>
          <HeroSection />
          <LaunchNotice />
          <ProblemSection />
          <OpportunitySection />
          <WhoThisIsFor />
          <ValueProposition />
          <ScientificProof />
          <OriginStory />
          <ProductBreakdown />
          <OfferPricing />
          <Guarantee />
          <FutureVision />
          <FAQ />
          <FinalCTA />
        </main>
      </ErrorBoundary>
      
      {/* Back to Top Button */}
      <BackToTop />
      
      {/* Chat Support */}
      <ChatSupport />
      
    </div>
  );
}

export default App;