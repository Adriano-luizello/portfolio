import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';
import { PetrosCaseStudy } from './pages/case-studies/Petros';
import { PepperLawCaseStudy } from './pages/case-studies/PepperLaw';
import { BiblePlusCaseStudy } from './pages/case-studies/BiblePlus';
import { LeMansCaseStudy } from './pages/case-studies/LeMans';
import { ChoreographCaseStudy } from './pages/case-studies/Choreograph';

class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white p-8">
          <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
          <p className="text-white/60">Please check the console for more details</p>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-black text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-studies/petros" element={<PetrosCaseStudy />} />
          <Route path="/case-studies/pepperlaw" element={<PepperLawCaseStudy />} />
          <Route path="/case-studies/bibleplus" element={<BiblePlusCaseStudy />} />
          <Route path="/case-studies/lemans" element={<LeMansCaseStudy />} />
          <Route path="/case-studies/choreograph" element={<ChoreographCaseStudy />} />
        </Routes>
        <Analytics />
      </div>
    </ErrorBoundary>
  );
}

export default App;