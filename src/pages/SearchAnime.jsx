import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function SearchAnime() {
  let [animelist, setAnimelist] = useState(null);
  let [currentPage, setCurrentPage] = useState(1);
  let [lastpage, setLastpage] = useState(1);
  let query = useLocation().search.split("=")[1];
  console.log(query);

  async function fetchAnime() {
    try {
      let animeData = await (
        await fetch(`https://api.jikan.moe/v4/anime?q=${query}`)
      ).json();
      console.log(animeData["data"]);
      setAnimelist(animeData["data"]);
      setCurrentPage(animeData["pagination"]["current_page"]);
      setLastpage(animeData["pagination"]["last_visible_page"]);
    } catch (e) {
      console.log("Some Error occured : ", e);
    }
  }

  useEffect(() => {
    fetchAnime();
  }, [query]);

  return (
    <div>
      <div className="page-content">
        {/* Anime Listing Area Start */}
        <section className="trending p-40">
          <div className="container-fluid">
            <div className="row">
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

export default SearchAnime;
