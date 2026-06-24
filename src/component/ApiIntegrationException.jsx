import React, { useEffect, useState } from "react";

export default function APIIntegrationException() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        let apiLink = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!apiLink.ok) {
          throw new Error("Unable to fetch the data");
        }
        const data = await apiLink.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  if (loading) {
    return <p style={{backgroundColor:'green',color:'white',fontSize:'22px',padding:'10px 20px',width:'fit-content',borderRadius:'5px',margin:'100px auto'}}>Loading...</p>;
  }
  if (error) {
    return <p style={{backgroundColor:'red',color:'white',fontSize:'22px',padding:'10px 20px',width:'fit-content',borderRadius:'5px',margin:'100px auto'}}>{error}</p>;
  }
  return <div className="container">
    <div>
  <h1><u>API Integration with Exception Handling</u></h1>
    </div>
    <div>
  
    <table>
      <tr className="table-data">
        <th>Id</th>
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Website</th>
      </tr>
      {user.map((e)=>(
      <tr key={e.id} className="table-data">
        <td>{e.id}</td>
        <td>{e.name}</td>
        <td>{e.username}</td>
        <td>{e.email}</td>
        <td>{e.phone}</td>
        <td>{e.website}</td>
      </tr>
    
  ))}
  </table>
    </div>
  </div>;
}
