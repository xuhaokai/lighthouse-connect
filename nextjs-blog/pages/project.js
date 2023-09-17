// Project.js

import { useRouter } from 'next/router';
import { useState } from 'react';

const Project = () => {
  const router = useRouter();
  const { projectName } = router.query; // Get the project name from the URL query

  // Sample test user data (you can replace this with your own data)
  const initialTestUsers = [
    {
      id: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      age: 30,
      location: 'New York',
      decideType: 'Mac',
      technicalProficiency: 'Intermediate',
      gender: 'Male',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'janesmith@example.com',
      age: 25,
      location: 'Los Angeles',
      decideType: 'Windows',
      technicalProficiency: 'Advanced',
      gender: 'Female',
    },
    // Add more test users here...
  ];

  const [testUsers, setTestUsers] = useState(initialTestUsers);
  const [filters, setFilters] = useState({
    name: '',
    email: '',
    age: '',
    location: '',
    decideType: '',
    technicalProficiency: '',
    gender: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    filterData(filters);
  };

  const filterData = (filterValues) => {
    const filteredUsers = initialTestUsers.filter((user) =>
      Object.entries(filterValues).every(([key, value]) =>
        value === '' || String(user[key]).toLowerCase().includes(value.toLowerCase())
      )
    );
    setTestUsers(filteredUsers);
  };

  return (
    <div>
      <h1>Project: {projectName}</h1>

      <h2>Test Users</h2>
      <div className="filter-inputs">
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={filters.name}
            onChange={handleFilterChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={filters.email}
            onChange={handleFilterChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="text"
            name="age"
            value={filters.age}
            onChange={handleFilterChange}
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={filters.location}
            onChange={handleFilterChange}
          />
        </div>
        <div>
          <label>Decide Type:</label>
          <input
            type="text"
            name="decideType"
            value={filters.decideType}
            onChange={handleFilterChange}
          />
        </div>
        <div>
          <label>Tech Proficiency:</label>
          <input
            type="text"
            name="technicalProficiency"
            value={filters.technicalProficiency}
            onChange={handleFilterChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <input
            type="text"
            name="gender"
            value={filters.gender}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Location</th>
              <th>Decide Type</th>
              <th>Tech Proficiency</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {testUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.location}</td>
                <td>{user.decideType}</td>
                <td>{user.technicalProficiency}</td>
                <td>{user.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style jsx>{`
        .filter-inputs {
          display: flex;
          flex-wrap: wrap;
        }

        .filter-inputs div {
          margin-right: 10px;
          margin-bottom: 10px;
        }

        .filter-inputs label {
          display: block;
        }

        .table-container {
          max-width: 100%;
          overflow-x: auto;
        }

        .user-table {
          width: 100%;
          border-collapse: collapse;
        }

        .user-table th,
        .user-table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }

        .user-table th {
          background-color: #f2f2f2;
        }
      `}</style>
    </div>
  );
};

export default Project;
