import React, { useEffect, useState } from "react";

export default function DataEffect() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
        console.log(data);
      });
  },[data]);

  return (
    <div>
        <div className="row d-flex">
      {data.map((photo) => (
        
            <div className="col-3">
          <div class="card" style={{ width: "18 rem" }}>
            {/* <img src={photo.thumbnailUrl} class="card-img-top" alt="image" /> */}
            <div class="card-body">
              <p class="card-text">
                <h1> {photo.id}</h1>
                <h4>{photo.title}</h4>
              </p>
            </div>
            </div>
          </div>
       
      ))}
       </div>
    </div>
  );
}
