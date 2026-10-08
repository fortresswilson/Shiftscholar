
"use client";

import { useEffect, useState } from "react";

type FocusTimerProps = {
  task: string;
  durationMinutes?: number;
};

export default function FocusTimer({
  task,
  durationMinutes = 90,
}: FocusTimerProps) {
  const [secondsLeft, setSecondsLeft] = useState(
    durationMinutes * 60
  );
  
  const [isRunning, setIsRunning] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  

  useEffect(() => {
    if (!isRunning || secondsLeft <= 0) return;

    const timer = window.setInterval(() => {
      setSecondsLeft((previous) => Math.max(previous - 1, 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isRunning, secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  function finishSession() {
    setIsRunning(false);
    setIsFinished(true);
  }

  function resetSession() {
    setSecondsLeft(durationMinutes * 60);
    setIsRunning(false);
    setIsFinished(false);
  }

  return (
    <section className="rounded-2xl border border-emerald-500/30 bg-slate-900 p-5 text-white shadow-lg">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Focus Mode</h2>
        <p className="mt-1 text-sm text-slate-400">
          Working on: {task}
        </p>
      </div>

      <div className="my-6 text-center">
        <p className="text-5xl font-bold tracking-wider text-emerald-400">
          {String(minutes).padStart(2, "0")}:
          {String(seconds).padStart(2, "0")}
        </p>
        <p className="mt-2 text-xs text-slate-400">
          Focus session countdown
        </p>
      </div>

      {isFinished ? (
        <div className="space-y-3 text-center">
          <p className="text-emerald-400">
            Session finished! Great work.
          </p>
          <button
            onClick={resetSession}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium hover:bg-emerald-500"
          >
            Start Another Session
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium hover:bg-emerald-500"
          >
            {isRunning ? "Pause" : "Start Focus"}
          </button>

          <button
            onClick={finishSession}
            className="rounded-lg border border-slate-600 px-4 py-2 text-sm hover:bg-slate-800"
          >
            Finish Session
          </button>

          <button
            onClick={resetSession}
            className="rounded-lg border border-slate-600 px-4 py-2 text-sm hover:bg-slate-800"
          >
            Reset
          </button>
        </div>
      )}
    </section>
  );
}
