import React, { useEffect, useState } from 'react';

function Homepage() {
  const [food, setFood] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/food')
      .then(response => response.json())
      .then(response => setFood(response));
  }, []);

  console.log(food);
  
  return (
    <div>
      {food && food.map((menu) => {
        return <div key={menu.id}><img src={menu.image_url} alt="" /></div>;
      })}
    </div>
  );
}

export default Homepage;
