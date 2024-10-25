import React, { useState } from "react";
import "./Detail.css";
import { useParams } from "react-router-dom";
import backward from "../assets/backward.png";
import heart from "../assets/heart.svg";
import share from "../assets/share.svg";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
const Detail = () => {
  const { posts } = useSelector((state) => state);
  let { id } = useParams();
  const [currentPost,setCurrentPost] = useState(posts.posts.filter((post) => post.id == id)[0]);
  const [showUser, setShowUser] = useState(false);
  useEffect(()=>{
    setCurrentPost(posts.posts.filter((post) => post.id == id)[0]);
    localStorage.setItem('currentId',id)
  },[id])
  if(!currentPost){
    alert('id is not fetched')
    return <></>
  }
  
  return (
    <div className="detailsContainer">
      <div className="postSec">
        <div className="postImgSec">
          <div className="postId">
            <img src={backward} className="backBtn" alt="<--" />
            <h1>Post Number #{currentPost.id}</h1>
          </div>
          <div className="imgContainer">
            <img
              src={`https://picsum.photos/200?random=${currentPost.id}`}
              alt="img"
              className="detailsImg"
            />
            <div className="titleIcon">
              <p>{currentPost.title.slice(0,10)}</p>
              <div>
                <img className="imgIcons" src={share} alt="share" />
                <img className="imgIcons heart" src={heart} alt="like" />
              </div>
            </div>
          </div>
        </div>
        <div className="userDetailsContainer">
          <div className="userBtnsSec">
            <button
              className={`detailsBtn ${!showUser && "selected"}`}
              onClick={() => showUser && setShowUser(false)}
            >
              Detail
            </button>
            <button
              className={`detailsBtn ${showUser && "selected"}`}
              onClick={() => !showUser && setShowUser(true)}
            >
              User Info
            </button>
          </div>
          <p className="details">
            {showUser
              ? `Post Was Posted By ${currentPost.userId}`
              : currentPost.body}
          </p>
        </div>
      </div>
      <div className="morePosts">
        <h2 className="morePostsHeading">More Post</h2>
        <div className="cardSec">
          {posts.posts.slice(0, 3).map((post, i) => (
            <Card key={i} cardDetails={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;
