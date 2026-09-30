const todaySchedule = [
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
export default function Dashboard() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10">

        <p className="text-sm font-semibold text-emerald-400">
          Tuesday, September 29
        </p>

        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          Good morning.
        </h1>

        <p className="mt-2 text-slate-400">
          Let&apos;s make today manageable.
        </p>
       <div className="mt-10 grid gap-6 lg:grid-cols-2">
  <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
    <h2 className="text-lg font-semibold">
      Today&apos;s Schedule
    </h2>
     <div className="mt-6 space-y-5">
    {todaySchedule.map((item) => (
      <div key={item.title} className="flex items-start gap-4">
        <p className="w-20 text-sm text-slate-400">
          {item.time}
        </p>

        <div>
          <p className="font-semibold">
            {item.title}
          </p>
          <p className="mt-1 text-sm text-slate-400">
            {item.type}
          </p>
        </div>
      </div>
    ))}
  </div>
  </section>

  <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
  <h2 className="text-lg font-semibold">
    Next Best Step
  </h2>

  <div className="mt-6">
    <p className="text-sm font-semibold text-emerald-400">
      RECOMMENDED FOCUS BLOCK
    </p>

    <h3 className="mt-2 text-xl font-semibold">
      Computer Vision Assignment
    </h3>

    <p className="mt-2 text-slate-400">
      You have free time between your classes today.
    </p>

    <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4">
      <p className="text-sm text-slate-400">
        Suggested time
      </p>

      <p className="mt-1 font-semibold text-emerald-400">
        1:00 PM – 3:00 PM
      </p>
    </div>
  </div>
</section>
</div>
      </div>
    </main>
  );
}