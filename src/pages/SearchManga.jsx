import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function SearchManga() {
    let [mangalist, setMangalist] = useState([]);
    let query = useLocation().search.split("=")[1];
    console.log(query);

    async function fetchmanga() {
        try {
        let mangaData = await (
            await fetch(`https://api.jikan.moe/v4/manga?q=${query}`)
        ).json();
        console.log(mangaData["data"]);
        setMangalist(mangaData["data"]);
        } catch (e) {
        console.log("Some Error occured : ", e);
        }
    }

    useEffect(() => {
        fetchmanga();
    }, []);
    return (
        <div>
        <div className="page-content">
            {/* Anime Listing Area Start */}
            <section className="trending p-40">
            <div className="container-fluid">
                <div className="row">
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
                </div>
                </div>
            </div>
            </section>
            {/* Anime Listing Area end */}
        </div>
        {/* Main Content End */}
        </div>
    )
}

export default SearchManga
