import React, { useState } from 'react'
import "./User.css";
import customCare from "../assets/ccLarge.png";
import customC from "../assets/ccsmall.png";
import motor from "../assets/moptro.png";
import motorSmall from "../assets/moptroSmall.png";
import { FaSearch } from "react-icons/fa";

function User() {
  const [searchTerm, setSearchTerm] = useState("");

  const employeeData = [
    { id: 1, name: "Shubhanshu", dob: "12-07-1999", role: "Software Engineer" },
    { id: 2, name: "Manish", dob: "12-07-2002", role: "Web Developer" },
    { id: 3, name: "Shubham", dob: "12-07-1985", role: "Finance Analyst" },
    { id: 4, name: "Nishant", dob: "10-12-1991", role: "Sales Intern" },
  ];

  const filteredEmployees = employeeData.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="smallLogo">
        <div className="logo">
          <img src={customCare} alt="Logo" />
        </div>
        <div className="logo-small">
          <img src={customC} alt="Small Logo" />
        </div>
      </div>

      <div className="companyLogo">
        <div className="motorLogo">
          <img src={motor} alt="Moptro" />
        </div>
        <div className="motorsmallLogo">
          <img src={motorSmall} alt="Moptro" />
        </div>
      </div>

      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search with name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FaSearch id="search" />
      </div>

      <div className="empContainer">
        {filteredEmployees.length === 0 ? (
          <div className="noData">No employee found</div>
        ) : (
          filteredEmployees.map((employee) => (
            <div className="employee" key={employee.id}>
              <div className="empl-id">
                <div className="empNo">EMP ID </div>
                <div className="evm">:</div>
                <div className="number">{employee.id}</div>
              </div>
              <div className="empl-name">
                <div className="empName">Name </div>
                <div className="evm">:</div>
                <div className="name">{employee.name}</div>
              </div>
              <div className="empl-dob">
                <div className="empDob">DOB </div>
                <div className="evm">:</div>
                <div className="date">{employee.dob}</div>
              </div>
              <div className="empl-role">
                <div className="empRole">ROLE </div>
                <div className="evm">:</div>
                <div className="role">{employee.role}</div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default User
