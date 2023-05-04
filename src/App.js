import postData from "./data/posts.json";
import { useState, useEffect } from "react";
import images from "./images/index";
import Nav from "./Components/Nav";
import Search from "./Components/Search";
import Posts from "./Components/Posts";
import PostsByLocation from "./Components/PostsByLocation";
import Footer from "./Components/Footer";
function App() {
    const [post, setPost] = useState(postData);
    const [info, setInfo] = useState("");
    const [error, setError] = useState(false);
    useEffect(() => {
        if (post.length === 0) {
            setError(true);
        } else {
            setError(false);
        }
    }, [post]);
    return (
        <main>
            <Nav />
            <Search
                setPost={setPost}
                setInfo={setInfo}
                info={info}
                postData={postData}
            />
            <div className="container">
                <div className="row align-items-start">
                    <div className="col">
                        {error ? (
                            <>
                                <div className="alert alert-danger">
                                    No post found with the search term "{info}".
                                    Please try again
                                </div>
                            </>
                        ) : (
                            <div className="container">
                                <div className="row align-items-start row-cols-1 row-cols-md-2">
                                    {post.map((item) => {
                                        return (
                                            <Posts
                                                images={images}
                                                item={item}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="col col-4">
                        <div className="container fw-bold">
                            <PostsByLocation postData={postData} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}

export default App;
