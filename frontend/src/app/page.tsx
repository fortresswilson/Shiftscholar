import Navbar from "@/components/Navbar";


const schedule = [
  {
    time: "11:45 AM",
    title: "Advanced Networking",
    type: "Class",
  },
  {
    time: "5:15 PM",
    title: "Computer Vision",
    type: "Class",
  },
];

export default function Home() {
  return (
    <main>
      <Navbar />

      <section className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-400">
            School. Work. Life.
          </p>

          <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Your schedule should not work against you.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            ShiftScholar helps working students plan their time,
            catch schedule conflicts, prioritize assignments,
            and get reminders before things fall behind.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="/signup"
              className="rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-slate-950 hover:bg-emerald-400"
            >
              Get Started
            </a>

            <a
              href="#how-it-works"
              className="rounded-lg border border-slate-700 px-5 py-3 font-semibold text-slate-300 hover:border-slate-500 hover:text-white"
            >
              See How It Works
            </a>
          </div>
          <a
  href="/dashboard"
  className="mt-6 inline-block text-sm font-semibold text-emerald-400 hover:text-emerald-300"
>
  View Demo Dashboard →
</a>
        </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
  <div className="flex items-center justify-between">
    <h2 className="text-lg font-semibold text-white">
      Today&apos;s Plan
    </h2>

    <p className="text-sm text-slate-400">
     Monday
    </p>
  </div>
   <div className="mt-6 border-t border-slate-800 pt-6">
    <div className="space-y-6">
      {schedule.map((item) => (
        <div key={item.title} className="flex gap-4">
          <p className="w-20 text-sm text-slate-400">
            {item.time}
          </p>

          <div>
            <p className="font-semibold text-white">
              {item.title}
            </p>

            <p className="mt-1 text-sm text-slate-400">
              {item.type}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

      </section>
    </main>
  );
}