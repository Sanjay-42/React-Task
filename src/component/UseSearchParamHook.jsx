import React from "react";
import { useSearchParams } from "react-router-dom";

export default function UseSearchParamHook() {
  let [searchParam, setSearchParam] = useSearchParams();

  let currentPage = Number(searchParam.get("page")) || 1;
  const users = [
    {
      id: 1,
      name: "Sanjay",
      email: "sanjay@gmail.com",
      city: "Bangalore",
      role: "Java FullStack Developer",
    },
    {
      id: 2,
      name: "Arun",
      email: "arun@gmail.com",
      city: "Chennai",
      role: "Java Developer",
    },
    {
      id: 3,
      name: "Kumar",
      email: "kumar@gmail.com",
      city: "Coimbatore",
      role: "React Developer",
    },
    {
      id: 4,
      name: "Priya",
      email: "priya@gmail.com",
      city: "Madurai",
      role: "UI Designer",
    },
    {
      id: 5,
      name: "Divya",
      email: "divya@gmail.com",
      city: "Salem",
      role: "Backend Developer",
    },
    {
      id: 6,
      name: "Vijay",
      email: "vijay@gmail.com",
      city: "Trichy",
      role: "Software Tester",
    },
    {
      id: 7,
      name: "Meena",
      email: "meena@gmail.com",
      city: "Erode",
      role: "Full Stack Developer",
    },
    {
      id: 8,
      name: "Rahul",
      email: "rahul@gmail.com",
      city: "Bangalore",
      role: "DevOps Engineer",
    },
    {
      id: 9,
      name: "Anitha",
      email: "anitha@gmail.com",
      city: "Vellore",
      role: "Web Developer",
    },
    {
      id: 10,
      name: "Ravi",
      email: "ravi@gmail.com",
      city: "Chennai",
      role: "Python Developer",
    },
    {
      id: 11,
      name: "Karthik",
      email: "karthik@gmail.com",
      city: "Tiruvannamalai",
      role: "Java Developer",
    },
    {
      id: 12,
      name: "Lakshmi",
      email: "lakshmi@gmail.com",
      city: "Bangalore",
      role: "UI Developer",
    },
    {
      id: 13,
      name: "Suresh",
      email: "suresh@gmail.com",
      city: "Hosur",
      role: "Network Engineer",
    },
    {
      id: 14,
      name: "Nisha",
      email: "nisha@gmail.com",
      city: "Chennai",
      role: "React Developer",
    },
    {
      id: 15,
      name: "Manoj",
      email: "manoj@gmail.com",
      city: "Madurai",
      role: "Frontend Developer",
    },
    {
      id: 16,
      name: "Keerthi",
      email: "keerthi@gmail.com",
      city: "Salem",
      role: "Software Engineer",
    },
    {
      id: 17,
      name: "Dinesh",
      email: "dinesh@gmail.com",
      city: "Bangalore",
      role: "Backend Developer",
    },
    {
      id: 18,
      name: "Swetha",
      email: "swetha@gmail.com",
      city: "Coimbatore",
      role: "QA Engineer",
    },
    {
      id: 19,
      name: "Prakash",
      email: "prakash@gmail.com",
      city: "Trichy",
      role: "Full Stack Developer",
    },
    {
      id: 20,
      name: "Aarthi",
      email: "aarthi@gmail.com",
      city: "Vellore",
      role: "Web Designer",
    },
  ];

  let gotoPage = (p) => {
    if (p >= 1 && p <= totalPage) {
      setSearchParam({ page: p });
    }
  };

  let nextPage = () => {
    if (currentPage < totalPage) {
      setSearchParam({ page: currentPage + 1 });
    }
  };

  let prevPage = () => {
    if (currentPage > 1) {
      setSearchParam({ page: currentPage - 1 });
    }
  };

  let dataPerPage = 5;
  let totalPage = Math.ceil(users.length / dataPerPage);
  let startIndex = (currentPage - 1) * dataPerPage;
  let endIndex = startIndex + dataPerPage;
  let currentUser = users.slice(startIndex, endIndex);

  return (
    <div className="container">
      <div>
        <h1><u>Pagination using useSearchParams</u></h1>
      </div>
      <div className="data-card">
        {currentUser.map((data) => (
          <div key={data.id} className="user-card">
            <p>
              <span>Id: </span>
              {data.id}
            </p>
            <p>
              <span>Name: </span>
              {data.name}
            </p>
            <p>
              <span>Email: </span>
              {data.email}
            </p>
            <p>
              <span>City: </span>
              {data.city}
            </p>
            <p>
              <span>Role: </span>
              {data.role}
            </p>
          </div>
        ))}
      </div>
      <div className="btns">
        <button className="btns1" onClick={prevPage}>Previous</button>
        <div>
          {Array.from({ length: totalPage }, (_, i) => i + 1).map(
            (pageNumber) => (
              <button className="btns2" key={pageNumber} onClick={() => gotoPage(pageNumber)}>{pageNumber}</button>
            ),
          )}
        </div>
        <button className="btns1" onClick={nextPage}>Next</button>
      </div>
    </div>
  );
}
