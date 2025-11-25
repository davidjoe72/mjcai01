import React from 'react';

function Food({name, picture}){
  return (
    <div>
        <h1>I love {name}</h1>
        <img src={picture} />
    </div>
  );
}

const foodILike = [
{
  name :'kimchi',
  image : 'https://shop.hansalim.or.kr/shopping/is/itm/100101024/100101024_3_568.jpg',
},
{
  name :'sam',
   image : 'https://i.namu.wiki/i/oFHlYDjoEh8f-cc3lNK9jAemRkbXxNGwUg7XiW5LGS6DF1P2x8GCeNQxbQhVIwtUS1u53YPw-uoyqpmLtrGNJA.webp',
}

];

function App() {
  return (
  <div>
  {foodILike.map(dish=> (<Food name={dish.name} picture={dish.image}/>))}
  </div>
  ); 
}

export default App;
