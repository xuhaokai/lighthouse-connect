import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  // Sample project data
  const initialProjects = [
    { id: 1, name: 'Airbnb Guest User Flow', testers_needed: 20, recruited: 15 },
    { id: 2, name: 'Airbnb Host User Flow', testers_needed: 10, recruited: 10 },
    { id: 3, name: 'Snapchat Mobile Flow', testers_needed: 5, recruited: 5 },
    { id: 4, name: 'Tesla Touch Pad', testers_needed: 30, recruited: 20 },
  ];

  const [projects, setProjects] = useState(initialProjects);
  const [newProjectName, setNewProjectName] = useState('');

  const handleAddProject = () => {
    if (newProjectName.trim() === '') {
      return; // Don't add empty project names
    }
    const newProject = {
      id: projects.length + 1,
      name: newProjectName,
      testers_needed: 0,
      recruited: 0
    };
    setProjects([...projects, newProject]);
    setNewProjectName('');

    // Navigate to the new project page with the project name as a query parameter
    router.push(`/project?projectName=${encodeURIComponent(newProject.name)}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.platformName}>Light Pass</div>

      <main>
        <h1 className={styles.title}>Project List</h1>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Project ID</th>
                <th>Project Name</th>
                <th>Total Testers Needed</th>
                <th>Testers Recruited</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.name}</td>
                  <td>{project.testers_needed}</td>
                  <td>{project.recruited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.addButtonContainer}>
          <input
            type="text"
            placeholder="New Project Name"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
          />
          <button onClick={handleAddProject}>Add Project</button>
        </div>
      </main>

      <footer>
        Powered by Lighthouse {/* Updated footer text */}
      </footer>

      <style jsx>{`
        main {
          padding: 2rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .tableContainer {
          margin-top: 1rem;
          margin-left: 2rem; /* Add margin to the left */
          margin-right: 2rem; /* Add margin to the right */
          overflow-x: auto; /* Add horizontal scroll if necessary */
        }

        .table {
          width: 100%;
          border-collapse: collapse;
        }

        th, td {
          padding: 0.5rem;
          text-align: left;
          border-bottom: 1px solid #eaeaea;
        }

        th {
          background-color: #f5f5f5;
        }

        .addButtonContainer {
          display: flex;
          margin-top: 1rem;
          align-items: center;
        }

        input[type="text"] {
          padding: 0.5rem;
          margin-right: 1rem;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
