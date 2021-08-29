import React from "react";
import { useSelector } from "react-redux";
import { PostType } from "../App";
import Post from "./Post";

const Landing = ({ posts }: { posts: PostType[] }) => {
  const user = useSelector((state: any) => state.user);
    const story = React.useRef<any>();
    React.useEffect(() => {
        story.current.scrollBy({
            top: 0,
            left: 100,
            behavior: "smooth",
        })
    }, []);
  return (
    <div className="container landing">
      <div className="row">
        <div className="col-8">
          <div className="card story" ref={story}>
            {[...Array(15)].map((_, i) => (
              <div className="story-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8otjk1VXK7XdTru_ewYmKckuIY_fxsjq4g&usqp=CAU" alt="" />
              </div>
            ))}
          </div>
                  <div className="posts"
                  >{posts.map((post,i) => (
                      <Post post={post} key={i} />
                  ))}</div>
        </div>
        <div className="col-4">
        <div>
        
        </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
