import React, { useEffect, useState } from "react";
import { Class } from "../types/Class";
import { fetchClassesByDateRange } from "../utils/api";

const TodayClassesPage: React.FC = () => {
  const [classes, setClasses] = useState<Class[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const today = new Date();
    const dateStr = today.toISOString().split("T")[0]; // "YYYY-MM-DD"

    fetchClassesByDateRange(dateStr, dateStr)
      .then(setClasses)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading today’s classes...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main>
      <h1>Classes for Today</h1>
      {classes.length === 0 ? (
        <p>No classes scheduled for today.</p>
      ) : (
        <ul>
          {classes.map((cls) => (
            <li key={cls.id}>
              <strong>{cls.name}</strong> — {cls.localeTime} @ {cls.calendar}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};

export default TodayClassesPage;