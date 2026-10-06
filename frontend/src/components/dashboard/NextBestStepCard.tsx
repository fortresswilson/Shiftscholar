type Recommendation = {
  task: string;
  startTime: string;
  endTime: string;
  reason: string;
};

type NextBestStepCardProps = {
  recommendation: Recommendation;
};

export default function NextBestStepCard({
  recommendation,
}: NextBestStepCardProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
      <h2 className="text-lg font-semibold">
        Next Best Step
      </h2>

      <div className="mt-6">
        <p className="text-sm font-semibold text-emerald-400">
          RECOMMENDED FOCUS BLOCK
        </p>

        <h3 className="mt-2 text-xl font-semibold">
          {recommendation.task}
        </h3>

        <p className="mt-2 text-slate-400">
          {recommendation.reason}
        </p>

        <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4">
          <p className="text-sm text-slate-400">
            Suggested time
          </p>

          <p className="mt-1 font-semibold text-emerald-400">
            {recommendation.startTime} – {recommendation.endTime}
          </p>
        </div>
      </div>
    </section>
  );
}