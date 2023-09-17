// Project.js

import { useRouter } from "next/router";
import { useState } from "react";
import Link from 'next/link';


const Project = () => {
  const router = useRouter();
  const { projectName } = router.query; // Get the project name from the URL query

  // Sample test user data (you can replace this with your own data)
  const initialTestUsers = [
    {
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
      age: 30,
      location: "New York",
      deviceType: "Mac",
      atApps: "Screen readers",
      gender: "Male",
      vision: "Blind"
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      age: 25,
      location: "Los Angeles",
      deviceType: "Windows",
      atApps: "Zoom/Magnification tools",
      gender: "Female",
      vision: "Low Vision"
    },
    {
      id: 3,
      name: "Jason Paul",
      email: "jasonpaul@example.com",
      age: 40,
      location: "San Francisco",
      deviceType: "iPhone",
      atApps: "Screen readers",
      gender: "Male",
      vision: "Blind"
    },
    {
      id: 4,
      name: "Amy Chow",
      email: "amychow@example.com",
      age: 60,
      location: "Phoenix",
      deviceType: "Android",
      atApps: "Zoom/Magnification tools",
      gender: "Female",
      vision: "Low Vision"
    },
    // Add more test users here...
  ];

  const [testUsers, setTestUsers] = useState(initialTestUsers);
  const [projectUsers, setProjectUsers] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    age: "",
    location: "",
    deviceType: "",
    atApps: "",
    gender: "",
    vision: "",
  });
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [emailModalOpen, setEmailModalOpen] = useState(false);
  const [emailMessage, setEmailMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [emailSuccess, setEmailSuccess] = useState(false);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
    filterData(filters);
  };

  const handleResetFilters = () => {
    setFilters({
      name: "",
      email: "",
      age: "",
      location: "",
      deviceType: "",
      atApps: "",
      gender: "",
      vision: "",
    });
    filterData({});
  };

  const handleRefreshTable = () => {
    setTestUsers(initialTestUsers);
    setFilters({
      name: "",
      email: "",
      age: "",
      location: "",
      deviceType: "",
      atApps: "",
      gender: "",
      vision:"",
    });
  };

  const handleSelectUser = (userId) => {
    if (selectedUsers.includes(userId)) {
      setSelectedUsers(selectedUsers.filter((id) => id !== userId));
    } else {
      setSelectedUsers([...selectedUsers, userId]);
    }
  };

  const handleOpenEmailModal = () => {
    setEmailModalOpen(true);
  };

  const handleCloseEmailModal = () => {
    setEmailModalOpen(false);
    setEmailMessage("");
  };

  const handleSendEmail = () => {
    setIsLoading(true);
    // Simulate sending email with a delay (1 second)
    setTimeout(() => {
      // Implement email sending logic here (e.g., using a backend service).
      // You can access the selectedUsers and emailMessage to send emails to the selected users.
      // After sending emails, set isLoading to false and setEmailSuccess to true.
      // You can also close the modal if needed.
      // For this example, we're setting emailSuccess to true.
      setIsLoading(false);
      setEmailSuccess(true);
      // Uncomment the following line if you want to close the modal after sending the email
      // handleCloseEmailModal();
    }, 1000);
  };

  const handleAddSelectedUsers = () => {
    // Create a copy of the current project's tester list
    const updatedProjectUsers = [...projectUsers];

    // Add the selected users to the project's user list
    selectedUsers.forEach((userId) => {
      const user = testUsers.find((u) => u.id === userId);
      if (user) {
        updatedProjectUsers.push(user);
      }
    });

    // Remove the selected users from the tester pool
    const updatedTestUsers = testUsers.filter((user) => !selectedUsers.includes(user.id));

    // Update the state with the new user lists
    setProjectUsers(updatedProjectUsers);
    setTestUsers(updatedTestUsers);

    // Clear the selected users
    setSelectedUsers([]);
  };

  const filterData = (filterValues) => {
    const filteredUsers = initialTestUsers.filter((user) =>
      Object.entries(filterValues).every(
        ([key, value]) =>
          value === "" ||
          String(user[key]).toLowerCase().includes(value.toLowerCase())
      )
    );
    setTestUsers(filteredUsers);
  };

  return (
    <div>
      <h1>Project: {projectName}</h1>
      <Link href="/">
        <div className="back-button">Back to Dashboard</div>
      </Link>
      <h2>Recruited Testers</h2>
      <div className="table-container">
        <table className="user-table">
          {/* Table header */}
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Location</th>
              <th>Device Type</th>
              <th>AT Apps</th>
              <th>Gender</th>
              <th>Vision Status</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {projectUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.location}</td>
                <td>{user.deviceType}</td>
                <td>{user.atApps}</td>
                <td>{user.gender}</td>
                <td>{user.vision}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ margin: '100px 0' }}></div>
      <div className="divider"></div>
      <h2>Tester Pool</h2>
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
          <label>Device Type:</label>
          <input
            type="text"
            name="deviceType"
            value={filters.deviceType}
            onChange={handleFilterChange}
          />
        </div>
        <div>
          <label>AT Apps:</label>
          <input
            type="text"
            name="atApps"
            value={filters.atApps}
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
        <div>
          <label>Vision Status:</label>
          <input
            type="text"
            name="vision"
            value={filters.vision}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <div className="button-container">
        <button onClick={handleResetFilters}>Reset Filters</button>
        <button onClick={handleRefreshTable}>Refresh Table</button>
      </div>
      <div className="table-container">
        <table className="user-table">
          {/* Table header */}
          <thead>
            <tr>
              <th>Select</th>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Location</th>
              <th>Device Type</th>
              <th>AT Apps</th>
              <th>Gender</th>
              <th>Vision Status</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody>
            {testUsers.map((user) => (
              <tr key={user.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedUsers.includes(user.id)}
                    onChange={() => handleSelectUser(user.id)}
                  />
                </td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.location}</td>
                <td>{user.deviceType}</td>
                <td>{user.atApps}</td>
                <td>{user.gender}</td>
                <td>{user.vision}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="button-container">
        <button onClick={handleOpenEmailModal}>Send Email</button>
        <button onClick={handleAddSelectedUsers}>Add Selected Users to Project</button>
      </div>
      {emailModalOpen && (
        <div className="email-modal">
          <div className="email-modal-content">
            <span className="close" onClick={handleCloseEmailModal}>
              &times;
            </span>
            <h2>Compose Email</h2>
            <textarea
              rows="4"
              cols="50"
              placeholder="Enter your email message..."
              value={emailMessage}
              onChange={(e) => setEmailMessage(e.target.value)}
            />
            {isLoading ? (
              <div className="loading-message">Sending email...</div>
            ) : (
              <>
                {emailSuccess ? (
                  <div className="success-message">
                    Email sent successfully!
                  </div>
                ) : (
                  <button onClick={handleSendEmail}>Send</button>
                )}
              </>
            )}
          </div>
        </div>
      )}

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

        .button-container {
          margin-top: 10px;
        }

        .button-container button {
          margin-right: 10px;
          padding: 5px 10px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .button-container button {
          margin-right: 10px;
          padding: 5px 10px;
          background-color: #007bff;
          color: #fff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
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

        .loading-message {
          font-weight: bold;
          color: #007bff;
          margin-top: 10px;
        }

        .success-message {
          font-weight: bold;
          color: green;
          margin-top: 10px;
        }

        .divider {
            margin: 20px 0;
            height: 1px;
            background-color: #ddd;
        }
      `}</style>
    </div>
  );
};

export default Project;
