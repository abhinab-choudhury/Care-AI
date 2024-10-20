import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Index from './pages';
import PageNotFound from './pages/page-not-found';
import AppLayout from './components/layout/app-layout';
import AI_Interface from './pages/ai-assistant';
import VideoConsultation from './pages/video-consultation';
import CycleDetection from './pages/cycle-tracker';
import Setting from './pages/setting';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Index />} />
        <Route path={'/home'} element={<AppLayout />}>
          <Route path={'ai-health-assistant'} element={<AI_Interface />} />
          <Route path={'video-consultations'} element={<VideoConsultation />} />
          <Route path={'cycle-tracker'} element={<CycleDetection />} />
          <Route path={'setting'} element={<Setting />} />
        </Route>

        {/* Catch All */}
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
