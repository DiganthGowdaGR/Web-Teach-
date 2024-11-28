import React, { useState } from 'react'; // Import useState from React

function App() {
  const [user, setUser] = useState({ name: 'Sharath', age: 18 });

  const updateAge = () => {
    setUser({ ...user, age: 19 });
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={updateAge}>Update Age</button>
    </div>
  );
}

export default App;
