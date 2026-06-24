import React, { useEffect, useState } from "react";

export default function Home() {
  let [data, setData] = useState([]);
  let[filtered,setFiltered]=useState([])

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setFiltered(data)
      }).catch((err)=>{
        console.error(err);
      })
  }, []);

  let all=()=>{
    setFiltered(data)
  }

  let fcategory=(cname)=>{
    let fdata=data.filter((e)=>(
        e.category===cname
    ))
    setFiltered(fdata)
  }

  return (
    <div>
      <div className="btn">
        <button onClick={all}>All</button>
        <button onClick={()=>fcategory("electronics")}>Electronics</button>
        <button onClick={()=>fcategory("jewelery")}>Jewelery</button>
        <button onClick={()=>fcategory("men's clothing")}>Men's Clothing</button>
        <button onClick={()=>fcategory("women's clothing")}>Women's Clothing</button>
      </div>
      <div className="container">
        {filtered.map((e) => (
          <div key={e.id} className="card-container">
            <img
              src={e.image}
              alt=""
              style={{ height: "150px", width: "180px" }}
            />
            <br />
            <p className="category">{e.category}</p>
            <br />
            <h3>{e.title.slice(0, 20)}</h3>
            <p>{e.description.slice(0, 35)}</p>
            <br />
            <div className="rating">
              <p className="price">₹ {e.price}</p>
              <p className="rate">{e.rating.rate}⭐</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
