import Hero from './components/Hero';
import Projects from './components/Projects';
import AIAvatar from './components/AIAvatar';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden selection:bg-[var(--color-morandi-pink)] selection:text-white flex flex-col">
      <main className="pb-24 pt-10 flex-1">
        <Hero />
        <Projects />
      </main>

      <footer className="text-center py-8 text-[var(--color-morandi-muted)] text-sm border-t border-[var(--color-morandi-sand)]/30 max-w-5xl mx-auto mt-auto w-full">
        <p>© {new Date().getFullYear()} 涂诗. All rights reserved.</p>
      </footer>

      <AIAvatar />
    </div>
  );
}
