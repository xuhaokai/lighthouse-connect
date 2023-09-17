// Project.js

import { useRouter } from "next/router";
import { useState } from "react";

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
      decideType: "Mac",
      technicalProficiency: "Intermediate",
      gender: "Male",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "janesmith@example.com",
      age: 25,
      location: "Los Angeles",
      decideType: "Windows",
      technicalProficiency: "Advanced",
      gender: "Female",
    },
    // Add more test users here...
  ];

  const [testUsers, setTestUsers] = useState(initialTestUsers);
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    age: "",
    location: "",
    decideType: "",
    technicalProficiency: "",
    gender: "",
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
      decideType: "",
      technicalProficiency: "",
      gender: "",
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
      decideType: "",
      technicalProficiency: "",
      gender: "",
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

  //   const handleSendEmail = () => {
  //     setIsLoading(true);
  //     // Simulate sending email with a delay (1 second)
  //     setTimeout(() => {
  //       // Implement email sending logic here (e.g., using a backend service).
  //       // You can access the selectedUsers and emailMessage to send emails to the selected users.
  //       // After sending emails, set isLoading to false and setEmailSuccess to true.
  //       // You can also close the modal.
  //       setIsLoading(false);
  //       setEmailSuccess(true);
  //       handleCloseEmailModal();
  //     }, 1000);
  //   };
  
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
      <div className="button-container">
        <button onClick={handleResetFilters}>Reset Filters</button>
        <button onClick={handleRefreshTable}>Refresh Table</button>
      </div>
      <div className="table-container">
        <table className="user-table">
          <thead>
            <tr>
              <th>Select</th>
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
                <td>{user.decideType}</td>
                <td>{user.technicalProficiency}</td>
                <td>{user.gender}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="button-container">
        <button onClick={handleOpenEmailModal}>Send Email</button>
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
      `}</style>
    </div>
  );
};

export default Project;
