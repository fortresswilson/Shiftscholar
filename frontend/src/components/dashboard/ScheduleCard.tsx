type ScheduleItem = {
  startTime: string;
  endTime: string;
  title: string;
  type: string;
};

type ScheduleCardProps = {
  schedule: ScheduleItem[];
};

export default function ScheduleCard({ schedule }: ScheduleCardProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
      <h2 className="text-lg font-semibold">
        Today&apos;s Schedule
      </h2>

      <div className="mt-6 space-y-5">
        {schedule.map((item) => (
          <div key={item.title} className="flex items-start gap-4">
            <p className="w-20 text-sm text-slate-400">
              {item.startTime} – {item.endTime}
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
  );
}