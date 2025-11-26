import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Listing() {
  let [topRated, setTopRated] = useState(null);
  let [animelist, setAnimelist] = useState(null);
  let [totalCount, setTotalCount] = useState(0);
  let [currentCount, setCurrentCount] = useState(0);

  let [currentPage, setCurrentPage] = useState(1);
  let [lastpage, setLastpage] = useState(1);
  let [query , setQuery] = useState("");
  let navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    navigate(`/searchAnime?query=${query}`);
  }

  async function fetchTopRated() {
    try {
      let response = await fetch("https://api.jikan.moe/v4/top/anime?limit=10");
      let topRatedData = await response.json();
      console.log(topRatedData["data"]);
      setTopRated(topRatedData["data"]);
    } catch (e) {
      console.log("Some Error occured : ", e);
    }
  }

  useEffect(() => {
    fetchTopRated();
  }, []);

  async function fetchAnime() {
    try {
      let animeData = await (
        await fetch(`https://api.jikan.moe/v4/anime?page=${currentPage}`)
      ).json();
      console.log(animeData["data"]);
      setAnimelist(animeData["data"]);
      setCurrentPage(animeData["pagination"]["current_page"]);
      setLastpage(animeData["pagination"]["last_visible_page"]);
      setCurrentCount(animeData["pagination"]["items"]["count"]);
      setTotalCount(animeData["pagination"]["items"]["total"]);
    } catch (e) {
      console.log("Some Error occured : ", e);
    }
  }

  useEffect(() => {
    fetchAnime();
  }, [currentPage]);

  return (
    <div>
      <div className="page-content">
        <div className="search-block mt-5 w-50 ms-auto">
          <form onSubmit={handleSubmit}
            action="https://uiparadox.co.uk/templates/vivid/v3/anime-listing.html"
            className="input-group search-bar"
          >
            <button className="search" type="submit">
              <i className="far fa-search search-icon" />
            </button>
            <input onChange={(e) => {
              setQuery(e.target.value);
            }} type="text" placeholder="Search..." required />
          </form>
        </div>
        {/* Anime Listing Area Start */}
        <section className="trending p-40">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-3">
                <div className="top-anime mb-12">
                  <h2 className="h-30 bold color-white mb-12">
                    {currentCount} Top Anime out of  {totalCount}
                  </h2>
                  <div className="row mt-5">
                    {topRated ? (
                      <>
                        {topRated.map((anime, index) => {
                          return (
                            <>
                              <div className=" col-md-6">
                                <Link
                                  to="movie-detail.html"
                                  className="anime-card mb-12"
                                >
                                  <img src={anime.images.jpg.image_url} alt />
                                  <div className="text-block">
                                    <div className="sm-title">
                                      <h6 className="color-white">
                                        {anime.title}
                                      </h6>
                                      <p className="color-medium-gray sm sec">
                                        Episodes {anime.episodes}
                                      </p>
                                    </div>
                                    <ul className="tag unstyled">
                                      <li>{anime.genres[0].name}</li>
                                      <li>{anime.year}</li>
                                      <li className="icon">
                                        <i className="fas fa-star" />{" "}
                                        {anime.score}
                                      </li>
                                    </ul>
                                  </div>
                                </Link>
                              </div>
                            </>
                          );
                        })}
                      </>
                    ) : (
                      <>
                        <p>Loading.....</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-xxl-9">
                <h1 className=" mb-40" style={{ color: "grey" }}>
                  Anime List
                </h1>
                <div className="row">
                  {animelist ? (
                    <>
                      {animelist.map((value, index) => {
                        return (
                          <>
                            <div className="col-md-4 col-sm-6 mb-40">
                              <div className="card st-2 m-0">
                                <div className="img-block mb-20">
                                  <img
                                    src={value.images["jpg"]["image_url"]}
                                    alt
                                    style={{ height: "200px" }}
                                  />
                                  <Link
                                    to={`/animedetail/${value.mal_id}`}
                                    className="cus-btn light"
                                  >
                                    <i className="far fa-eye" />
                                    view details
                                  </Link>
                                </div>
                                <div className="content">
                                  <h4 className="h-24 color-white bold">
                                    {value.title}
                                  </h4>
                                  <ul className="tag unstyled">
                                    <li>{value.type}</li>
                                    <li>{value.year}</li>
                                    <li>EP-{value.episodes}</li>
                                    <li className="icon">
                                      <i className="fas fa-star" />
                                    </li>
                                    <li>{value.score}</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </>
                  ) : (
                    <>
                      <p>Loading....</p>
                    </>
                  )}
                </div>
                <ul className="pagination unstyled">
                  <li>
                    <a>
                      <button
                        disabled={currentPage === 1}
                        onClick={() => {
                          setCurrentPage(currentPage - 1);
                        }}
                        style={{
                          border: "none",
                          backgroundColor: "#212020",
                          color: "white",
                        }}
                      >
                        <i className="fas fa-chevron-left" />
                      </button>
                    </a>
                  </li>
                  <li>
                    {" "}
                    <Link className="active"> {currentPage} </Link>{" "}
                  </li>
                  <li>
                    <a>
                      <button
                        disabled={currentPage === lastpage}
                        onClick={() => {
                          setCurrentPage(currentPage + 1);
                        }}
                        style={{
                          border: "none",
                          backgroundColor: "#212020",
                          color: "white",
                        }}
                      >
                        <i className="fas fa-chevron-right" />
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* Anime Listing Area end */}
      </div>
      {/* Main Content End */}
    </div>
  );
}

export default Listing;
