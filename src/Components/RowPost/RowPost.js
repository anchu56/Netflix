import React,{useEffect,useState} from 'react';
import './RowPost.css'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      //alert('error')
    })
  }, []);
  
  return (

  <div className='row'>
    <h2>{props.title}</h2> 
    <div className="posters">
      {movies.map((obj)=>
         <img className={props.isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" /> //As there is no other thing and we removed the curly braces everything comes under return
      )}
        
        
    </div>
  </div>);
}

export default RowPost;
