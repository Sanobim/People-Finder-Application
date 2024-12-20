import React from "react";

const SortControls = ({ people, setPeople }) => {
  const sortByName = () => {
    const sorted = [...people].sort((a, b) => a.fullName.localeCompare(b.fullName));
    setPeople(sorted);
  };

  const sortByDOB = () => {
    const sorted = [...people].sort((a, b) => new Date(a.dob) - new Date(b.dob));
    setPeople(sorted);
  };

  return (
    <div className="flex space-x-4 mb-5">
      <button onClick={sortByName} className="bg-blue-500 text-white p-2 rounded">Sort by Name</button>
      <button onClick={sortByDOB} className="bg-green-500 text-white p-2 rounded">Sort by Date of Birth</button>
    </div>
  );
};

export default SortControls;
