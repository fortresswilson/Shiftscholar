export default function Navbar() {
  return (
     <nav className="w-full border-b border-slate-800">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <p className="bg-gradient-to-r from-emerald-400 to-slate-300 bg-clip-text text-xl font-bold tracking-tight text-transparent">
  ShiftScholar
</p>

          <div className="flex items-center gap-8">
  <a
    href="#features"
    className="text-sm text-slate-300 hover:text-emerald-400"
  >
    Features
  </a>

  <a
    href="#how-it-works"
    className="text-sm text-slate-300 hover:text-emerald-400"
  >
    How It Works
  </a>

  <a
    href="/login"
    className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
  >
    Sign In
  </a>
</div>
      </div>
    </nav>
  );
}