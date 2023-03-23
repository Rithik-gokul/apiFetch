import logo from './logo.svg'
import React, { useState, useEffect } from 'react';
import Comp from './compontent'


function Navbar() {

    const [apiData, setData] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://reqres.in/api/users?page=1')
          .then(response => response.json())
          .then(data => {setData(data.data);setLoading(false);})
          .catch(error => console.error(error));
      }, []);

    
      const handleClick = () => {
        setClicked(true);
      }  

    return ( 
    <div>
    <div className="Navbar">
        <img src={logo} alt="react img" width='70px'/>
        <button onClick={handleClick}>Get Data</button>
    </div> 
    <div>
    {loading && <p>Loading...</p>}    
    {clicked && (
        <div className='card'>
          {apiData.map(item => (
            <Comp key={item.id} {...item} />
          ))}
        </div>
      )}
    </div>
    </div>
    );

}

export default Navbar;