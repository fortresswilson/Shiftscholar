export function getTodayDateString() {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function getDaysUntilDue(dueDate: string) {
  const today = new Date(`${getTodayDateString()}T00:00:00`);
  const due = new Date(`${dueDate}T00:00:00`);

  const differenceInMs = due.getTime() - today.getTime();

  return Math.ceil(
    differenceInMs / (1000 * 60 * 60 * 24)
  );
}