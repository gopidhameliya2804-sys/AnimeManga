import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Search() {
  let query = useLocation().search.split("=")[1];
  console.log(query);
  let [anime, setAnime] = useState(null);
  let [manga, setManga] = useState(null);
  let [merged, setMerged] = useState(null);

  async function fetchAnime() {
    try {
      let animeData = await (
        await fetch(`https://api.jikan.moe/v4/anime?q=${query}`)
      ).json();
      console.log(animeData["data"]);
      setAnime(animeData["data"]);
    } catch (e) {
      console.log(" Some error occured : ", e);
    }
  }

  useEffect(() => {
    fetchAnime();
  }, []);

  async function fetchmanga() {
    try {
      let mangaData = await (
        await fetch(`https://api.jikan.moe/v4/manga?q=${query}`)
      ).json();
      console.log(mangaData["data"]);
      setManga(mangaData["data"]);
      console.log(merged);
    } catch (e) {
      console.log("Some Error occured : ", e);
    }
  }

  useEffect(() => {
    fetchmanga();
  }, []);

  useEffect(() => {
    if (anime && manga) {
      setMerged([...anime, ...manga]);
    }
  }, [anime, manga]);

  return (
    <div>
      <div className="page-content">
        {/* Anime Listing Area Start */}
        <section className="trending p-40">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-9">
                <h1 className=" mb-40" style={{ color: "grey" }}>
                  Anime & Manga
                </h1>
                <div className="row">
                  {merged ? (
                    <>
                      {merged.map((value, index) => {
                        return (
                          <>
                            <div className="col-md-4 col-sm-6 mb-40">
                              <div className="card st-2 m-0">
                                <div className="img-block mb-20">
                                  <img
                                    src={value.images.jpg.image_url}
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

export default Search;
