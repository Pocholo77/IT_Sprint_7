import React, { useState, useEffect } from "react";

export default function App() {

  const [number, setNumber] = useState({
    one: 0,
    two: 0,
    three: 0,
  });

  const [checked, setChecked] = useState(false);
  const [suma, setSuma] = useState(0);

  useEffect(() => {
    const { one, two, three } = number;
    setSuma(parseInt(one) + parseInt(two) + parseInt(three));
  }, [number]);

  const handleInput = event => {
    
    const { name, value, checked } = event.target;
     
    setChecked(event.checked)

    if(checked){
      console.log('yep')
      setNumber({ ...number, [name]: value });
    }
    if(!checked){ 
      console.log('Nop')
      setNumber({ ...number, [name]: 0 }); ;
    }  
   
  };

  return (

   
    <div className="App">
       <p>Que quieres hacer?</p>
       <div className='CheckList'>
       <div className='CheckClass'>
       <input
        type="checkbox"
        checked={checked}
        onChange={handleInput}
        name="one"
        value={500}
      /> <p>Una Pagina web (500€)</p>
       </div>
      <div className='CheckClass'>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleInput}
        name="two"
        value={300}
      /><p>Consulteria SEO (300€)</p>
      </div>
      <div className='CheckClass'>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleInput}
        name="three"
        value={200}
      /><p>Campanya ADS (200€)</p>
      </div>
      </div>
      <h3>Total: {suma} €</h3>
    </div>
  );
}

