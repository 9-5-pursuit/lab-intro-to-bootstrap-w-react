import postData from "./data/posts.json";
import Search from "./Components/Search";
import NavBar from "./Components/NavBar";
import Quote from "./Components/Quote";
import Cards from "./Components/Cards";
import images from "./images";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [searchQuery, setsearchQuery] = useState("");

  const filteredCities = postData.filter((city) => {
    return city.location.toLowerCase().includes(searchQuery.toLowerCase());
  });

  function handleChange(event) {
    setsearchQuery(event.target.value);
  }
  useEffect(() => {
    if (filteredCities.length === 0 && searchQuery.length > 0) {
      alert(
        `No posts found with the search term "${searchQuery}".Please try again.`
      );
    }
  }, [filteredCities]);

  const locationCount = postData.reduce((accumulator, currentValue) => {
    if (!accumulator[currentValue.location]) {
      accumulator[currentValue.location] = 1;
    } else {
      accumulator[currentValue.location]++;
    }
    return accumulator;
  }, {});

  return (
    <>
      <NavBar />
      <Quote />
      <Search handleChange={handleChange} searchQuery={searchQuery} />

      <div className="container mb-5">
        <div className="row">
          <div className="col-md-8">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {filteredCities.map((card) => {
                return (
                  <div className="col" key={card.id}>
                    <Cards
                      image={
                        images[card.location.split(" ").join("").toLowerCase()]
                      }
                      title={card.title}
                      location={card.location}
                      content={card.content}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-md-4">
            <h5>
              Posts by <span className="text-warning">location</span>
            </h5>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Location</th>
                  <th>Posts</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(locationCount).map((city) => {
                  return (
                    <tr key={city}>
                      <td className="text-left">{city}</td>
                      <td className="text-left">{locationCount[city]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
