import React from 'react';

function Food({fav}) {
 
return(
<h1>I love {fav}</h1>
)
}

function App() {
  // return <div className="App" />;
  return (
  <div>
    <h3>Hello!!</h3> 
    <Food fav="김치" />
    <Food fav="짜장면" />
    <Food fav="짬뽕" />
  </div>
  );
}

export default App;
