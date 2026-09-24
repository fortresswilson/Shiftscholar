export default function Navbar() {
  return (
     <nav className="w-full border-b border-slate-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <p className="text-xl font-bold tracking-tight">ShiftScholar</p>

          <div className="flex items-center gap-8">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="/login">Sign In</a>
        </div>
      </div>
    </nav>
  );
}