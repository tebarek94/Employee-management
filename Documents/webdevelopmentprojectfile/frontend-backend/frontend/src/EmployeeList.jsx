import React, { useEffect, useState } from "react";

function EmployeeList() {
  const [employees, setEmployees] = useState([]); // Fixed variable name for consistency

  useEffect(() => {
    fetch("http://localhost:5000/employee/list")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Check the structure of data
        setEmployees(data);
      })
      .catch((err) => console.error(err));
    // Handle errors
  }, []); // Add an empty dependency array to prevent multiple calls

  return (
    <div>
      <h1>Employee List</h1>
      <table border="1" style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.employee_id}>
              <td>{emp.employee_id}</td>
              <td>{emp.first_name}</td>
              <td>{emp.last_name}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>
              <td>{emp.email}</td>
              <td>{emp.phone_number}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;
