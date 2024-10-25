import React, { useEffect ,useState} from "react";
import './Home.css'
import Card from "./Card";
import { useSelector,useDispatch } from "react-redux";
import {fetchPosts} from '../redux/thunkaction.jsx'


const Home = () => {
  const {posts,loading,error}=useSelector((state)=>state);
  const [visibleCards,setVisibleCards]=useState(6);
  const handleShowmore=()=>{
    setVisibleCards(prev=>prev+6);
  }
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchPosts())
  },[dispatch]);
  if(loading){
    return <div>Loading ...</div>
  }
  if(error){
    return <div>Error :{error}</div>
  }
  
  return (
    <div className="homeContainer">
      <div className="searchSec">
        <h1 className="searchHeading">Social Media For Travellers</h1>
        <input type="text" placeholder="Search here..." className="search"/>
      </div>
      <div className="cardSec">
          {posts.posts.slice(0,visibleCards).map((post,i)=><Card key={i} cardDetails={post}/>)}
      </div>
      {visibleCards<posts.posts.length&&(
            <button className="showMoreBtn" onClick={handleShowmore}>Show More ..</button>
          )}
    </div>
  );
};

export default Home;
