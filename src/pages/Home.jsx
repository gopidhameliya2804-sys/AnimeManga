import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  let [topanime, setTopanime] = useState([]);
  let [topmanga, setTopmanga] = useState([]);
  let [genres, setGenres] = useState([]);

  const genreImages = [
    "/assets/media/categories/Img-1.png",
    "/assets/media/categories/Img-2.png",
    "/assets/media/categories/Img-3.png",
    "/assets/media/categories/Img-4.png",
    "/assets/media/categories/Img-5.png",
    "/assets/media/categories/Img-6.png",
    "/assets/media/categories/Img-7.png",
    "/assets/media/categories/Img-8.png",
  ];

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((response) => {
        return response.json();
      })
      .then((anime) => {
        setTopanime(anime["data"].slice(0, 10));
      });
    console.log(topanime);
  }, []);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/manga")
      .then((response) => {
        return response.json();
      })
      .then((manga) => {
        setTopmanga(manga["data"].slice(0, 10));
      });
    console.log(topmanga);
  }, []);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/genres/anime")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGenres(data["data"].slice(0, 8));
      });
    console.log(genres);
  }, []);

  return (
    <div>
      <div>
        {/* Hero Banner start */}
        <div className="hero-banner-1 p-40">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xxl-8 mb-30 mb-xxl-0">
                <div className="anime-card ">
                  <div className="content">
                    <img
                      src="assets/media/logo/logo-1.png"
                      className="logo"
                      alt
                    />
                    <h2 className="h-40 bold color-white mb-16">
                      Demon Slayer: <br /> Kimetsu no Yaiba
                    </h2>
                    <ul className="tag unstyled mb-16">
                      <li>18+</li>
                      <li>HD</li>
                      <li>2029</li>
                      <li>Anime</li>
                      <li>1hr 45m</li>
                    </ul>
                    <p className="color-white mb-32">
                      <b className="color-medium-gray">Starting:</b> Natsuki
                      Hanae, Akari Kito, Hiro Shimono
                    </p>
                    <div className="btn-block">
                      <Link
                        to="#"
                        data-bs-toggle="modal"
                        data-bs-target="#videoModal"
                        className="cus-btn primary"
                      >
                        <i className="far fa-play" />
                        Play
                      </Link>
                      <Link to="listing" className="cus-btn sec">
                        <i className="fal fa-info-circle" />
                        More info
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Main Content Start */}
        <div className="page-content">
          {/* Categories Area Start */}
          <section className="categories p-40">
            <div className="container-fluid">
              <div className="row">
                {genres.map((value, index) => {
                  return (
                    <>
                      <div className="col-xxl-3 col-sm-6 mb-30">
                        <a href="anime-listing.html" className="categorie-item">
                          <img src={genreImages[index]} alt={value.name} />
                          <div className="content">
                            <h2 className="h-36 mb-1 color-white">
                              {value.name}
                            </h2>
                            <span className="h-20 color-medium-gray">
                              {value.count}+ {value.name}
                            </span>
                          </div>
                        </a>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </section>
          {/* Categories Area End */}
          {/* trending Area Start */}
          <section className="trending p-40">
            <div className="container-fluid">
              <div className="heading mb-32">
                <h2 className="h-40 bold">Top Anime</h2>
                <Link to="listing" className="light-btn primary">
                  View All <i className="far fa-chevron-right" />
                </Link>
              </div>
              <div className="row">
                {topanime.map((value, index) => {
                  return (
                    <>
                      <div className="col-xxl-3 col-xl-4 col-sm-6 mb-30 mb-xl-0">
                        <div className="card">
                          <div className="img-block mb-30">
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
                            <div className="list">{index + 1}</div>
                            <div className="name">
                              <h4 className="h-24 color-white bold">
                                {value.title}
                              </h4>
                              <h6 className="h-20 color-medium-gray ">
                                {value.genres[0].name}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="trending p-40">
            <div className="container-fluid">
              <div className="heading mb-32">
                <h2 className="h-40 bold">Top Manga</h2>
                <Link to="mangalisting" className="light-btn primary">
                  View All <i className="far fa-chevron-right" />
                </Link>
              </div>
              <div className="row">
                {topmanga.map((value, index) => {
                  return (
                    <>
                      <div className="col-xxl-3 col-xl-4 col-sm-6 mb-30 mb-xl-0">
                        <div className="card">
                          <div className="img-block mb-30">
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
                            <div className="list">{index + 1}</div>
                            <div className="name">
                              <h4 className="h-24 color-white bold">
                                {value.title}
                              </h4>
                              <h6 className="h-20 color-medium-gray ">
                                {value.type}
                              </h6>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </section>
          {/* treading Area End */}
        </div>
        {/* Main Content End */}
      </div>
    </div>
  );
}

export default Home;
