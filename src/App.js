import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import {originals,action,comedy,horror,romance,documentaries} from './urls'
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
     <div className='App'>
        <NavBar/>
        <Banner/>
        <RowPost url={originals} title='Netflix Orginals' />
        <RowPost url={action} title='Action' isSmall={true}/>
        <RowPost url={comedy} title='Comedy' isSmall={true}/>
        <RowPost url={horror} title='Horror' isSmall={true}/>
        <RowPost url={romance} title='Romance' isSmall={true}/>
        <RowPost url={documentaries} title='Documentaries' isSmall={true}/>
     </div>
  );
}

export default App;

