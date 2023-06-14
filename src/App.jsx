import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import axios from 'axios'
import './App.css'

// Components
import Header from './components/Header'

// Pages
import Home from './pages/Home'
import Publish from './pages/Publish'
import Projet from './pages/Projet'
import Signup from './pages/Signup'
import Account from './pages/Account'
import Login from './pages/Login'

import projets from '../assets/json/projets.json'
import users from '../assets/json/users.json'

function App() {

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();
  const [search, setSearch] = useState("");
  //const [sortPrice, setSortPrice] = useState();
  //const [fetchRangeValues, setFetchRangeValues] = useState([0, 10000]);
  //const [] = useState();

/*
  useEffect( () => {
    const fetchData = async () => {
        const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/projets?title=${search}`);
        setData(response.data);
        setIsLoading(false);
    };
    fetchData();
  }, [search]);
*/

/*
const test = users[0];
const tab = [];

for (let i = 0; i < emojis.length; i++) {
  // Si l'émoji de ce tour contient, dans sa clef keywords, ce que j'ai écrit dans mon input (docn ce qu'il y a dans le state search) => alors, je crée un composant Line que je push dans tab
  if (emojis[i].keywords.includes(search)) {
    // Si tab contient moins de 20 éléments
    if (tab.length < 20) {
      // Je push dans tab un composant Line
      tab.push(<Line emoji={emojis[i]} key={i} />);
    } else {
      break;
    }
  }
}
*/

  return (
    <div>
      <Router>
        <Header 
          search={search}
          setSearch={setSearch}
        />
        <Routes>
          <Route path='/' element={<Home data={data} isLoading={isLoading} />}/>
          <Route path='/Publish' element={<Publish setUser={setUser} />}/>
          <Route path='/Login' element={<Login setUser={setUser}/>}/>
          <Route path='/Projet' element={<Projet />}/>
          <Route path='/Signup' element={<Signup />}/>
          <Route path='/Account' element={<Account token={token}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
