import React from "react";

const calculateUpcomingEvents = (people) => {
  const today = new Date();
  const events = people.flatMap((person) => {
    const birthday = new Date(person.dob);
    birthday.setFullYear(today.getFullYear());
    if (birthday < today) birthday.setFullYear(today.getFullYear() + 1);

    const events = [{ type: "Birthday", date: birthday, name: person.fullName }];

    if (person.weddingDate) {
      const anniversary = new Date(person.weddingDate);
      anniversary.setFullYear(today.getFullYear());
      if (anniversary < today) anniversary.setFullYear(today.getFullYear() + 1);
      events.push({ type: "Anniversary", date: anniversary, name: person.fullName });
    }

    return events;
  });

  return events.sort((a, b) => a.date - b.date).slice(0, 5);
};

const UpcomingEvents = ({ people }) => {
  const events = calculateUpcomingEvents(people);

  return (
    <div className="border p-4 mb-5">
      <h2 className="text-xl font-bold">Upcoming Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            {event.name}'s {event.type} on {event.date.toDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingEvents;
