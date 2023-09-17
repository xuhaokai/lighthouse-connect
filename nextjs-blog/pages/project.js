// Project.js

import { useRouter } from 'next/router';

const Project = () => {
  const router = useRouter();
  const { projectName } = router.query; // Get the project name from the URL query

  // Sample test user data (you can replace this with your own data)
  const testUsers = [
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

  return (
    <div>
      <h1>Project: {projectName}</h1>

      <h2>Test Users</h2>
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
