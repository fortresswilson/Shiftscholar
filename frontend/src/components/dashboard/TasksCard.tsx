"use client";

import { getDaysUntilDue } from "@/lib/dateUtils";
type Task = {
  id: number;
  title: string;
  dueDate: string;
  remainingHours: number;
  priority: string;
  status: string;
};

type TasksCardProps = {
  tasks: Task[];
};

// Turns the stored date into friendly text for the user
function formatDueDate(dueDate: string) {
  const differenceInDays = getDaysUntilDue(dueDate);

  if (differenceInDays < 0) {
    return `overdue by ${Math.abs(differenceInDays)} days`;
  }

  if (differenceInDays === 0) return "today";
  if (differenceInDays === 1) return "tomorrow";

  return `in ${differenceInDays} days`;
}

export default function TasksCard({ tasks }: TasksCardProps) {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 lg:col-span-2">
      <h2 className="text-lg font-semibold">
        Tasks
      </h2>

      <div className="mt-6 space-y-4">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`rounded-xl border bg-slate-900 p-4 ${
              task.priority === "High"
                ? "soft-shake border-red-500/50"
                : "border-slate-700"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-semibold text-white">
                {task.title}
              </h3>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  task.priority === "High"
                    ? "bg-red-500/20 text-red-300"
                    : "bg-slate-800 text-slate-300"
                }`}
              >
                {task.priority}
              </span>
            </div>

            <p className="mt-3 text-sm font-medium text-slate-300">
              Due {formatDueDate(task.dueDate)} · {task.remainingHours}h remaining
            </p>

            <p className="mt-3 inline-block rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300">
              {task.status}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}