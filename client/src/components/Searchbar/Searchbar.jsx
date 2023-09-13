// Searchbar.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const history = useHistory();

  const handleSearch = () => {
    
    history.push(`/search-results?name=${searchTerm}`);
  };


     const handleChange =(event) =>{
        setSearchTerm(event.target.value)
      }


 return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange}/>
      <button onClick={handleSearch}>Buscar</button>
    </div>
     )
}

export default Searchbar;
