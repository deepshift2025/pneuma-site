
import React, { useState } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Jobs } from './pages/Jobs';
import { Portal } from './pages/Portal';
import { Contact } from './pages/Contact';
import { Resources } from './pages/Resources';
import { Legal } from './pages/Legal';
import { View, Job } from './types';
import { ProcessTimeline } from './components/ProcessTimeline';
import { ApplicationModal } from './components/ApplicationModal';
import { AIAssistant } from './components/AIAssistant';
import { WhatsAppButton } from './components/WhatsAppButton';

const App: React.FC = () => {
  const [currentView, setView] = useState<View>('home');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <Home setView={setView} onApply={setSelectedJob} />;
      case 'about':
        return <About />;
      case 'jobs':
        return <Jobs onApply={setSelectedJob} />;
      case 'resources':
        return <Resources />;
      case 'process':
        return <ProcessTimeline />;
      case 'portal':
        return <Portal />;
      case 'contact':
        return <Contact />;
      case 'legal':
        return <Legal />;
      default:
        return <Home setView={setView} onApply={setSelectedJob} />;
    }
  };

  return (
    <Layout currentView={currentView} setView={setView}>
      {renderView()}
      
      {/* Floating Elements */}
      <AIAssistant />
      <WhatsAppButton currentView={currentView} />
      
      {/* Modals */}
      {selectedJob && (
        <ApplicationModal 
          job={selectedJob} 
          onClose={() => setSelectedJob(null)} 
        />
      )}
    </Layout>
  );
};

export default App;
