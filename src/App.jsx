import { useLayoutEffect } from 'react';
import {
  Hero,
  Philosophy,
  Conversations,
  About,
  StreetActivations,
  TheIdea,
  Brands,
  Reels,
  Process,
  Contact,
} from './components/Sections.jsx';

const DESIGN_WIDTH = 1366;

// Keep the 1366px design canvas scaled to the viewport width (like the Canva site).
function useCanvasScale() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const update = () => root.style.setProperty('--scale', String(root.clientWidth / DESIGN_WIDTH));
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
}

export default function App() {
  useCanvasScale();
  return (
    <main>
      <Hero />
      <Philosophy />
      <Conversations />
      <About />
      <StreetActivations />
      <TheIdea />
      <Brands />
      <Reels />
      <Process />
      <Contact />
    </main>
  );
}
