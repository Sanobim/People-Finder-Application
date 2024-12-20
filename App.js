import React, { useState } from "react";
import SearchBar from "./SearchBar";
import PersonDetails from "./PersonalDetails";
import UpcomingEvents from "./UpcomingEvents";
import SortControls from "./SortControls";

const App = () => {
  const [people, setPeople] = useState([
    {
      id: 1,
      fullName: "John Doe",
      fathersName: "Richard Doe",
      dob: "1990-05-15",
      weddingDate: "2015-06-20",
    },
    {
      id: 2,
      fullName: "Jane Smith",
      fathersName: "Robert Smith",
      dob: "1985-09-25",
      weddingDate: null,
    },
    // Add more sample data as needed
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSelectPerson = (person) => {
    setSelectedPerson(person);
  };

  const filteredPeople = people.filter((person) =>
    person.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.fathersName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    person.id.toString().includes(searchQuery)
  );

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-5">People Finder Application</h1>
      <UpcomingEvents people={people} />
      <SearchBar searchQuery={searchQuery} onSearch={handleSearch} />
      <SortControls people={people} setPeople={setPeople} />
      <ul>
        {filteredPeople.map((person) => (
          <li
            key={person.id}
            className="cursor-pointer hover:text-blue-500"
            onClick={() => handleSelectPerson(person)}
          >
            {person.fullName}
          </li>
        ))}
      </ul>
      {selectedPerson && <PersonDetails person={selectedPerson} />}
    </div>
  );
};

export default App;
