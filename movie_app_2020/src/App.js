import React from 'react';
import img01 from './images/1.jpg';
import img02 from './images/2.jpg';
import img03 from './images/3.jpg';
import img04 from './images/4.jpg';
import img05 from './images/5.jpg';



function Food({name,picture, alt0}) {
 
return(
  <div>

<h1>I love {name}</h1>
<img src={picture} alt={alt0} />
  </div>
);
}

const foodLike = [
{
  id: 1,
  name : '김치',
  image : img01,
  message0 : '김치 사진'
},

{
  id: 2,
  name : '만두',
  image : img02,
  message0 : '만두 사진'
},

{
  id: 3,
  name : '피자',
  image : img03,
  message0 : '피자 사진'
},

{
  id: 4,
name : '아이스크림',
image : img04,
message0 : '아이스크림 사진'
},

{
  id: 5,
  name : '초밥',
image : img05,
message0 : '초밥 사진'
}


]

function App() {
  // return <div className="App" />;
  return (
  <div>
    {foodLike.map(dish =>(<Food key={dish.name} name={dish.name} picture={dish.image} alt0={dish.message0}/>))}
  </div>
  );
}

export default App;
