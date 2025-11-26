import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Mangalist() {
  let [topRated, setTopRated] = useState(null);
  let [mangalist, setMangalist] = useState([]);
  let [totalCount, setTotalCount] = useState(0);
  let [currentCount, setCurrentCount] = useState(0);

  let [currentPage, setCurrentPage] = useState(1);
  let [lastpage, setLastpage] = useState(1);
  let [query , setQuery] = useState("");
  let navigate = useNavigate();

  function handleSubmit(e){
    e.preventDefault();
    navigate(`/searchManga?query=${query}`);
  }

  async function fetchTopManga() {
    try {
      let response = await fetch("https://api.jikan.moe/v4/top/manga?limit=10");
      let topRatedData = await response.json();
      console.log(topRatedData["data"]);
      setTopRated(topRatedData["data"]);
    } catch (e) {
      console.log("Some Error occured : ", e);
    }
  }

  useEffect(() => {
    fetchTopManga();
  }, []);

  async function fetchmanga() {
    try {
      let mangaData = await (
        await fetch(`https://api.jikan.moe/v4/manga?page=${currentPage}`)
      ).json();
      console.log(mangaData["data"]);
      setMangalist(mangaData["data"]);
      setCurrentPage(mangaData["pagination"]["current_page"]);
      setLastpage(mangaData["pagination"]["last_visible_page"]);
      setCurrentCount(mangaData["pagination"]["items"]["count"]);
      setTotalCount(mangaData["pagination"]["items"]["total"]);
    } catch (e) {
      console.log("Some Error occured : ", e);
    }
  }

  useEffect(() => {
    fetchmanga();
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
                   {currentCount} Top Manga out of {totalCount}
                  </h2>
                  <div className="row mt-5">
                    {topRated ? (
                      <>
                        {topRated.map((manga, index) => {
                          return (
                            <>
                              <div className="col-xxl-12 col-md-6">
                                <Link
                                  to="movie-detail.html"
                                  className="anime-card mb-12"
                                >
                                  <img src={manga.images.jpg.image_url} alt />
                                  <div className="text-block">
                                    <div className="sm-title">
                                      <h6 className="color-white">
                                        {manga.title}
                                      </h6>
                                      <p className="color-medium-gray sm sec">
                                        Status: {manga.status}
                                      </p>
                                    </div>
                                    <ul className="tag unstyled">
                                      <li>{manga.type}</li>
                                      <li></li>
                                      <li></li>
                                      <li className="icon">
                                        <i className="fas fa-star" />{" "}
                                        {manga.score}
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
                        <p>Loading....</p>
                      </>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-xxl-9 mt-5">
                <h1 className=" mb-40" style={{ color: "grey" }}>
                  Manga List
                </h1>
                <div className="row">
                  {mangalist.map((value, index) => {
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
                                to={`/magnadetail/${value.mal_id}`}
                                className="cus-btn light"
                              >
                                <i className="far fa-eye" />
                                View Details
                              </Link>
                            </div>
                            <div className="content">
                              <h4 className="h-24 color-white bold">
                                {value.title}
                              </h4>
                              <ul
                                className="tag unstyled"
                                style={{ marginLeft: "50px" }}
                              >
                                <li>{value.type}</li>
                                <li>{value.published.prop.from.year}</li>
                                <li className="icon">
                                  <i
                                    className="fas fa-star"
                                    style={{ marginRight: "8px" }}
                                  />
                                  {value.score}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
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

export default Mangalist;
