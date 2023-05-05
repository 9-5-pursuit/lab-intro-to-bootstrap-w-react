import postData from "./data/posts.json";
import Nav from "./Components/Nav";
import Quote from "./Components/Quote";
import PostsContainer from "./Components/PostContainer";
import SearchBar from "./Components/SearchBar";
import PostsList from "./Components/PostsList";


function App() {
  console.log(postData);
  return <main>
<Nav />
<Quote/>
<SearchBar/>
<PostsContainer/>
<PostsList/>
  </main>;
}

export default App;
