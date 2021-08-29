import React from 'react';
import {PostType} from "../App"

const Post = ({ post }: { post: PostType }) => {
    const [isLiked, setIsLiked] = React.useState(false)
    const [isAdded, setIsAdded] = React.useState(false)

    return (
      <div className="card post">
        <div className="card-header card-heading">
        <div className="user-div">
          <img src="https://s3.envato.com/files/284159902/matrix-code-1920x1080.jpg" alt="" className="user-image"/>
          <h6 className="card-title cardtitle">{post.username}</h6>
        
        </div>
          <div><i className=" bi bi-three-dots" /></div>
        </div>
        <img src={post.post} className="card-image-top" alt="" />
        <div className="buttons">
          <i className={isLiked ? "bi bi-heart-fill liked" : "bi bi-heart"} onClick={()=>setIsLiked(!isLiked)} />
          <i className="bi bi-chat" />
          <i className="bi bi-share" />
          <i className={isAdded? "bi bi-bookmark-fill" : "bi bi-bookmark"} onClick={()=>setIsAdded(!isAdded)} style={{float:"right",margin:"0px 10px"}}></i>
        </div>
        <div style={{margin: "5px 20px",height:"30px"}}>
        <p>Liked by <b>mr.invincible</b> and <b>others</b></p>
        </div>
        <div className="postdetails">
        <b>{post.username}</b> Education which makes you financially independent. We bring job opportunities, freelancing projects, and internships for the students
        </div>
        <div style={{margin: "0px 20px 10px 20px",color:"grey"}}>
        View all 19 comments
        </div>
      </div>
    );
}

export default Post
