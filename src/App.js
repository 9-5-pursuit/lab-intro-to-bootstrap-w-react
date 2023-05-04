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
      <div className="container-lg bd-gutter mt-3 my-md-4 bd-layout">
        <SearchBar setSearchTerm={setSearchTerm} />
        <main className="bd-main order-1">
          <div className="bd-sidebar">
            <Cards
              postData={postData}
              images={images}
              searchTerm={searchTerm}
            />
          </div>

          <aside className="bd-toc mt-3 mb-5 my-lg-0 mb-lg-5 px-sm-1 text-body-secondary">
            <Posts postData={postData} />
          </aside>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
