import postData from "./data/posts.json";
import CardList from "./Components/CardList";
import Table from "./Components/Table";
import { useState, useEffect } from 'react'

function App() {

  const [post, setPost] = useState(postData)
  const [value, setValue] = useState("")
  const [bool, setBool] = useState(false)

  useEffect(() => {
    setPost(post.filter(item => item.location.toLowerCase().includes(value.toLowerCase())))
  }, [value])

  useEffect(() => {
    if (!post.length) setBool(true)
  }, [post])


  return <main>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Travel <span className="script-font">Blog</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Popular posts</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <header className="bg-light text-dark py-5 d-none d-sm-block">
      <div className="container text-center">
        <h1 className="script-font">Travel is the only thing you buy that makes you richer...</h1>
      </div>
    </header>
    <div className="py-4 d-none d-sm-block">
      <form className="">
        <label htmlFor="search" className="form-label">Search Posts by Location:</label>
        <input type="text" value={value} className="d-inline w-50 m-2 px-10" id="search" placeholder="Enter location" onChange={(e) => setValue(e.target.value)} />
        <button type="click" className="btn btn-secondary m-3" onClick={() => setPost(postData)}>Cancel</button>
      </form>
    </div>

    <div className="row">
      <div className="container py-1 col-lg px-4">
        <div className="row row-cols-1 row-cols-md-2">
          {post.length && (post.map(item => (
            <CardList key={item.id} cards={item} />
          )))}
          {bool &&

            (<div className="alert alert-primary d-flex align-items-center" role="alert">
              <div>
                No Posts Found with the Search Term {value}
              </div>
            </div>)
          }
        </div>
      </div>
      <div className="col-lg px-4">
        <Table postData={postData} />
      </div>
    </div>
    <footer className="bg-warning py-3">
  <div className="container">
    <div className="row">
      <div className="col-md-6 text-center text-md-start">
        <p className="text-white">Copyright © 2023 Your Company.
          All rights reserved.</p>
      </div>
      <div className="col-md-6 text-center text-md-end">
        <p className="text-white">Designed by Your Name</p>
      </div>
    </div>
  </div>
</footer>

  </main>;
}

export default App;
