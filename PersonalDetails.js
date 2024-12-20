import React from "react";

const calculateUpcomingDate = (date) => {
  const today = new Date();
  const upcoming = new Date(date);
  upcoming.setFullYear(today.getFullYear());
  if (upcoming < today) upcoming.setFullYear(today.getFullYear() + 1);
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return { date: upcoming.toDateString(), day: daysOfWeek[upcoming.getDay()] };
};

const PersonDetails = ({ person }) => {
  const birthdayInfo = calculateUpcomingDate(person.dob);
  const anniversaryInfo = person.weddingDate ? calculateUpcomingDate(person.weddingDate) : null;

  return (
    <div className="border p-4 mt-5">
      <h2 className="text-xl font-bold">Details for {person.fullName}</h2>
      <p>Father's Name: {person.fathersName}</p>
      <p>Date of Birth: {new Date(person.dob).toDateString()}</p>
      {person.weddingDate && <p>Wedding Date: {new Date(person.weddingDate).toDateString()}</p>}
      <p>Upcoming Birthday: {birthdayInfo.date} ({birthdayInfo.day})</p>
      {anniversaryInfo && (
        <p>
          Upcoming Anniversary: {anniversaryInfo.date} ({anniversaryInfo.day})
        </p>
      )}
    </div>
  );
};

export default PersonDetails;
