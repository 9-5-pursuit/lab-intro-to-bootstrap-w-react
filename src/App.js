import postData from "./data/posts.json";
import images from "./images/index";

//-----------Components Import-----------------------//
import NavigationBar from "./Components/NavigationBar";
import HeroQuote from "./Components/HeroQuote";
import SearchBar from "./Components/SearchBar";
import Cards from "./Components/Cards";
import Posts from "./Components/PostsAside";
import Footer from "./Components/Footer";
import { useState } from "react";

//---------------------------------------------------//

function App() {
  //console.log(postData);
  const [searchTerm, setSearchTerm] = useState("");
  // console.log(typeof searchTerm);
  // console.log(searchTerm);
  return (
    <>
      <NavigationBar />
      <HeroQuote />
      <div className="container-lg row g-2">
        <SearchBar setSearchTerm={setSearchTerm} />
        <main className="bd-main  col-md-8">
          <div className="bd-sidebar ">
            <Cards
              postData={postData}
              images={images}
              searchTerm={searchTerm}
            />
          </div>
        </main>
        <aside className="text-body-secondary col-md-4">
          <Posts postData={postData} />
        </aside>
      </div>
      <Footer />
    </>
  );
}

export default App;
