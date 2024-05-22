import { useState } from "react";

const users = [
  { firstName: "Mazda", id: 1 },
  { firstName: "Audi", id: 2 },
  { firstName: "Tojota", id: 3 },
  { firstName: "Tesla", id: 4 },
  { firstName: "Hyundai", id: 5 },
  { firstName: "Honda", id: 6 },
  { firstName: "Bentley", id: 7 },
  { firstName: "Chevrolet", id: 8 },
  { firstName: "Ford", id: 9 },
  { firstName: "Lexus", id: 10 },
];

function App() {
  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = users.filter((user) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  };

  return (
    <>
      <input
        type="text"
        value={searchItem}
        onChange={handleInputChange}
        placeholder="Type to search"
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.firstName}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
