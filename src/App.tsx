import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import AIAvatar from './components/AIAvatar';

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden selection:bg-[var(--color-morandi-pink)] selection:text-white">
      {/* Decorative background elements for oil painting feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[var(--color-morandi-pink)]/20 blur-[100px]"></div>
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[50%] rounded-full bg-[var(--color-morandi-green)]/15 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] rounded-full bg-[var(--color-morandi-blue)]/15 blur-[100px]"></div>
      </div>

      <main className="pb-24 pt-10">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
      </main>

      <footer className="text-center py-12 text-[var(--color-morandi-muted)] text-sm border-t border-[var(--color-morandi-sand)]/30 max-w-5xl mx-auto mt-20">
        <p>© {new Date().getFullYear()} 涂诗. All rights reserved.</p>
      </footer>

      <AIAvatar />
    </div>
  );
}
