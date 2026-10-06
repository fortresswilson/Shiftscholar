import ScheduleCard from "@/components/dashboard/ScheduleCard";
import NextBestStepCard from "@/components/dashboard/NextBestStepCard";
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
const recommendation = {
  task: "Computer Vision Assignment",
  startTime: "1:00 PM",
  endTime: "3:00 PM",
  reason: "You have free time between your classes today.",
};

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

          <ScheduleCard schedule={todaySchedule} />

         
<NextBestStepCard recommendation={recommendation} />
        </div>
      </div>
    </main>
  );
}