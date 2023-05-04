import postData from "./data/posts.json";
import CardList from "./Components/CardList";
import Table from "./Components/Table";
import {useState} from 'react'

function App() {
 
  const [post, setPost] = useState(postData)
  const [value, setValue] = useState("")

  function handlePosts(posts) {
    const inputstring = posts.target.value
    setPost(post.filter(item => item.location.includes(inputstring)))
    setValue(inputstring) 
  }
  return <main>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Travel <span className="script-font">Blog</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Popular posts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <header class="bg-light text-dark py-5 d-none d-sm-block">
      <div class="container text-center">
        <h1 class="script-font">Travel is the only thing you buy that makes you richer...</h1>
      </div>
    </header>
    <div className="py-4">
      <form className="">
        <label for="search" className="form-label">Search Posts by Location:</label>
        <input type="text" value={value} className="d-inline w-50" id="search" placeholder="Enter location" onChange={(e) => handlePosts(e)}/>
        <button type="click" className="btn btn-secondary" onClick={()=> setPost(postData)}>Cancel</button>
      </form>
    </div>

    <div className="row">
      <div className="container py-1 col-lg">
        <div className="row row-cols-1 row-cols-md-2">
          {post.map(item => (
            <CardList key={item.id} cards={item} />
          ))}
        </div>
      </div>
      <div className="col-lg px-4">
        <Table />
      </div>
    </div>

  </main>;
}

export default App;
