"use client";
import { useState } from "react";
import { getDaysUntilDue } from "@/lib/dateUtils";

import ScheduleCard from "@/components/dashboard/ScheduleCard";
import NextBestStepCard from "@/components/dashboard/NextBestStepCard";
import TasksCard from "@/components/dashboard/TasksCard";

const tasks = [
  {
    id: 1,
    title: "Computer Vision Assignment",
    dueDate: "2026-10-07",
    remainingHours: 4,
    priority: "High",
    status: "Not started",
  },
  {
    id: 2,
    title: "Networking Homework",
    dueDate: "2026-10-09",
    remainingHours: 10,
    priority: "Medium",
    status: "Not started",
  },
  {
    id: 3,
    title: "Thesis Research",
    dueDate: "2026-10-12",
    remainingHours: 3,
    priority: "Medium",
    status: "In progress",
  },
];

function timeToMinutes(time: string) {
  const [timePart, period] = time.split(" ");
  const [hourString, minuteString] = timePart.split(":");

  let hour = Number(hourString);
  const minute = Number(minuteString);

  if (period === "PM" && hour !== 12) {
    hour += 12;
  }

  if (period === "AM" && hour === 12) {
    hour = 0;
  }

  return hour * 60 + minute;
}

function minutesToTime(totalMinutes: number) {
  const hours24 = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  const period = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 || 12;

  return `${hours12}:${String(minutes).padStart(2, "0")} ${period}`;
}
type ScheduleItem = {
  startTime: string;
  endTime: string;
  title: string;
  type: string;
};
function findFreeTime(schedule: ScheduleItem[]) {
  const firstCommitment = schedule[0];
  const secondCommitment = schedule[1];

  const freeStart = timeToMinutes(firstCommitment.endTime);
  const freeEnd = timeToMinutes(secondCommitment.startTime);

  const freeMinutes = freeEnd - freeStart;

  const focusMinutes = Math.min(freeMinutes, 90);

  return {
    startTime: minutesToTime(freeStart),
    endTime: minutesToTime(freeStart + focusMinutes),
    durationMinutes: focusMinutes,
  };
}



function calculateTaskPressure(
  remainingHours: number,
  dueDate: string
) {
  const daysUntilDue = getDaysUntilDue(dueDate);

  const availableDays = Math.max(daysUntilDue, 1);

  return remainingHours / availableDays;
}





export default function Dashboard() {
  const [todaySchedule, setTodaySchedule] = useState([
  {
    startTime: "11:45 AM",
    endTime: "1:00 PM",
    title: "Advanced Networking",
    type: "Class",
  },
  {
    startTime: "5:15 PM",
    endTime: "6:30 PM",
    title: "Computer Vision",
    type: "Class",
  },
]);
const [commitmentMessage, setCommitmentMessage] = useState("");
const freeTime = findFreeTime(todaySchedule);
const tasksByPressure = [...tasks].sort(
  (a, b) =>
    calculateTaskPressure(b.remainingHours, b.dueDate) -
    calculateTaskPressure(a.remainingHours, a.dueDate)
);

const recommendedTask = tasksByPressure[0];

const recommendation = {
  task: recommendedTask.title,
  startTime: freeTime.startTime,
  endTime: freeTime.endTime,
  reason:
    "This task has the highest workload pressure and fits your available time.",
};

function addDemoCommitment() {
  const alreadyAdded = todaySchedule.some(
    (item) => item.title === "Work Shift"
  );

  if (alreadyAdded) {
    setCommitmentMessage("Work Shift already added");
    return;
  }

  const newCommitment = {
    startTime: "2:00 PM",
    endTime: "4:00 PM",
    title: "Work Shift",
    type: "Work",
  };

  const updatedSchedule = [...todaySchedule, newCommitment];

  updatedSchedule.sort(
    (a, b) =>
      timeToMinutes(a.startTime) - timeToMinutes(b.startTime)
  );

  setTodaySchedule(updatedSchedule);
  setCommitmentMessage("Work Shift added — schedule recalculated");
}
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
<TasksCard tasks={tasks} />
        </div>
      </div>
    </main>
  );
}