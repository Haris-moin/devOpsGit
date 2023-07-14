import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
console.log("res1");
  }, []);

console.log("res2");
  const fetchData = async () => {
   console.log("res3");
 const response = await fetch('http://localhost:3001/api/data');
 const jsonData = await response.json();
 console.log("res");
   
 console.log("res",response);
    setData(jsonData);
console.log(jsonData)
  };

  return (
   <div>
      <h1>Data from Node.js API:</h1>
    <ul>
        {data.map((item,i) => (
          <li key={i}>{item.message}</li>
        ))}
      </ul>
    
    </div>
  );
}

export default App;
