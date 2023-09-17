// Project.js

import { useRouter } from 'next/router';

const Project = () => {
  const router = useRouter();
  const { projectName } = router.query; // Get the project name from the URL query

  // Sample test user data (you can replace this with your own data)
  const testUsers = [
    'Tester 1',
    'Tester 2',
    'Tester 3',
  ];

  return (
    <div>
      <h1>Project: {projectName}</h1>

      <h2>Test Users</h2>
      <table>
        <thead>
          <tr>
            <th>Tester Name</th>
          </tr>
        </thead>
        <tbody>
          {testUsers.map((user, index) => (
            <tr key={index}>
              <td>{user}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Project;
