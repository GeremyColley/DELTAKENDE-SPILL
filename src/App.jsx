import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import axios from 'axios'
import './App.css'

// Components
import Header from './components/Header'
import Line from './components/Line'

// Pages
import Home from './pages/Home'
import Publish from './pages/Publish'
import Projet from './pages/Projet'
import Signup from './pages/Signup'
import Account from './pages/Account'
import Login from './pages/Login'

import projets from './assets/json/projets.json'


function App() {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  //const [sortPrice, setSortPrice] = useState();
  //const [fetchRangeValues, setFetchRangeValues] = useState([0, 10000]);

  const tab = [];

  for (let i = 0; i < projets.length; i++) {
    if (projets[i].NomProjet.includes(search)) {
      if (tab.length < 9) {
        tab.push(<Line projets={projets[i]} key={i} />);
      } else {
        break;
      }
    }
  }

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

  return (
    <div>
     
      <Router>
        <Header 
          search={search}
          setSearch={setSearch}
        />
       
        <Routes>
          <Route path='/' element={<Home data={tab} isLoading={isLoading} />}/>
          <Route path='/Login' element={<Login />}/>
          
        </Routes>
      </Router>
    </div>
  )
}

export default App


/*
<Route path='/Publish' element={<Publish setUser={setUser} />}/>
          <Route path='/Login' element={<Login setUser={setUser}/>}/>
          <Route path='/Projet' element={<Projet />}/>
          <Route path='/Signup' element={<Signup />}/>
          <Route path='/Account' element={<Account token={token}/>}/> */


          /*
           for (let i = 0; i < projets.length; i++) {
    if (projets[i].NomProjet.includes(search)) {
      if (tab.length < 3) {
        tab.push(<Line projets={projets[i]} key={i} />);
      } else {
        break;
      }
    }
  }*/