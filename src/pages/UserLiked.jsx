import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from '../component/Navbar';
import NotAvialable from '../component/NotAvialable';
import SelectGenre from '../component/SelectGenre';
import Slider from '../component/Slider';
import { fetchMovies, getGenres, getUserLikedMovies } from '../store';
import { firebaseAuth } from '../utils/firebase-confij';
import Card from '../component/Card';


function UserLiked(){
    const [ isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    const genresLoaded = useSelector((state)=> state.netflix.genresLoaded);
    const movies = useSelector((state)=> state.netflix.movies)
      const dispatch =useDispatch();

      const [email,setEmail] = useState(undefined)
    onAuthStateChanged(firebaseAuth,(currentuser)=>{
        if(currentuser) setEmail(currentuser.email);
        else navigate("/login");
       })
  
      useEffect(()=>{
        if(email){
            dispatch(getUserLikedMovies(email))
        }
      },[email]);
  
    
    window.onscroll=()=>{
      setIsScrolled(window.pageYOffset === 0 ? false : true);
      return ()=> (window.onscroll = null) ;
    }
       return(
           <Container>
            <Navbar isScrolled={isScrolled}/>
            <div className="content flex column">
                <h1>My List</h1>
                <div className="grid flex">
                    {movies.map((movie , index)=>{
                        return <Card movieData={movie} isLiked={true} index={index} key={movie.id} />
                    })}
                </div>
            </div>
           </Container>
       )}

       const Container = styled.div`
    .content{
        margin: 2.3rem;
        margin-top: 8rem;
        gap: 3rem;
        h1{
            margin-left: 3rem;
        }
        .grid{
            flex-wrap: wrap;
            gap: 1rem;
        }
    }
`;
       export default UserLiked