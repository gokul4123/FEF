import { useState } from 'react';
import './UserProfiles.css';

function UserProfiles() {
  const [users, setUsers] = useState("");
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [age, setAge] = useState("");

  const handleNewUser = (e) => {
    e.preventDefault();
    if (name && age && occupation) {
      const newUser = {
        id: Date.now(),  
        name,
        age,
        occupation,
      };
      setUsers([...users, newUser]);  
      setName("");  
      setAge("");
      setOccupation("");
    }
  };

  return (
    <div className='layout'>
      <h1>User Profiles</h1>
      {users.length === 0 ? (
        <p>No users available</p>
      ) : (
        <ul className='box'>
          {users.map((user) => (
            <li key={user.id} className='list'>
              <strong>Name:</strong> {user.name} <strong>Age:</strong> {user.age}  <strong>Occupation:</strong> {user.occupation}
            </li>
          ))}
        </ul>
      )}

<h2>Add a New User</h2>
      <form onSubmit={handleNewUser} className='form-box'>
        <div className='input-text'>
          <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter Your Name'
            required
          />
        </div>
        <div>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder='Enter Your Age'
            required
          />
        </div>
        <div>
          <input
            type="text"
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            placeholder='Enter Your Occupation'
            required
          />
        </div>
        <button type="submit" className='button'>Add User</button>
        </div>
      </form>

    </div>
  );
}

export default UserProfiles;
