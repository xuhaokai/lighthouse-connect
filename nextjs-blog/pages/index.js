import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  // Sample project data
  const projects = [
    { id: 1, name: 'Project A', testers: ['Tester 1', 'Tester 2'] },
    { id: 2, name: 'Project B', testers: ['Tester 3', 'Tester 4'] },
    { id: 3, name: 'Project C', testers: ['Tester 5', 'Tester 6'] },
    { id: 4, name: 'Project D', testers: ['Tester 7', 'Tester 8'] },
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Project List</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Project List</h1>

        <div className={styles.tableContainer}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Project ID</th>
                <th>Project Name</th>
                <th>Tester List</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr key={project.id}>
                  <td>{project.id}</td>
                  <td>{project.name}</td>
                  <td>{project.testers.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
