import React, {useState, useEffect} from 'react';
import Search from './Search';

import logo from './logo.svg';
import './App.css';

function getUser(){
  return Promise.resolve({id: '1', name: 'Robin'})
}

function App() {
  const [search, setSearch] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    (async() =>{
      const user = await getUser();
      setUser(user)
    })()
  },[])

  function handleChange(event){
    setSearch(event.target.value);
  }

  return (
    <div className="App">
      {user ? <p>Signed in as a {user.name}</p> : 'not loaded'}
      <Search value={search} onChange={handleChange}>Search</Search>
      <p>Searches for {search ? search : '...'}</p>
    </div>
  );
}

export default App;
