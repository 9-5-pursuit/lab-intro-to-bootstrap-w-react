import postData from "./data/posts.json";

function App() {
  function posts() {}

  function postsTableCount() {}

  console.log(postData);
  return (
    <main>
      <nav>
        <logo>Travel Blog</logo>
        <a href="">About</a>
        <a href="">Popular Posts</a>
      </nav>
      <div>
        <h1>Travel is the only thing you buy that makes you richer...</h1>
      </div>
      <div>
        <section>
          <label>Search posts by title and location...</label>
          <input type="text"></input>
        </section>
        <section>{posts()}</section>
        <section>{postsTableCount()}</section>
      </div>
      <footer>
        <a href="">Contact Me</a>
        <a href="">About the Author</a>
        <p>Lorem ipsum</p>
      </footer>
    </main>
  );
}

export default App;
