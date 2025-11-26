import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Category() {
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
    "/assets/media/categories/Img-1.png",
    "/assets/media/categories/Img-2.png",
    "/assets/media/categories/Img-3.png",
    "/assets/media/categories/Img-4.png",
    "/assets/media/categories/Img-5.png",
    "/assets/media/categories/Img-6.png",
    "/assets/media/categories/Img-7.png",
    "/assets/media/categories/Img-8.png",
    "/assets/media/categories/Img-1.png",
    "/assets/media/categories/Img-2.png",
    "/assets/media/categories/Img-3.png",
    "/assets/media/categories/Img-4.png",
    "/assets/media/categories/Img-5.png",
    "/assets/media/categories/Img-6.png",
    "/assets/media/categories/Img-7.png",
    "/assets/media/categories/Img-8.png",
    "/assets/media/categories/Img-1.png",
    "/assets/media/categories/Img-2.png",
    "/assets/media/categories/Img-3.png",
    "/assets/media/categories/Img-4.png",
    "/assets/media/categories/Img-5.png",
    "/assets/media/categories/Img-6.png",
    "/assets/media/categories/Img-7.png",
    "/assets/media/categories/Img-8.png",
    "/assets/media/categories/Img-1.png",
    "/assets/media/categories/Img-2.png",
    "/assets/media/categories/Img-3.png",
    "/assets/media/categories/Img-4.png",
    "/assets/media/categories/Img-5.png",
    "/assets/media/categories/Img-6.png",
    "/assets/media/categories/Img-7.png",
    "/assets/media/categories/Img-8.png",
    "/assets/media/categories/Img-1.png",
    "/assets/media/categories/Img-2.png",
    "/assets/media/categories/Img-3.png",
    "/assets/media/categories/Img-4.png",
    "/assets/media/categories/Img-5.png",
    "/assets/media/categories/Img-6.png",
    "/assets/media/categories/Img-7.png",
    "/assets/media/categories/Img-8.png",
    "/assets/media/categories/Img-1.png",
    "/assets/media/categories/Img-2.png",
    "/assets/media/categories/Img-3.png",
    "/assets/media/categories/Img-4.png",
    "/assets/media/categories/Img-5.png",
    "/assets/media/categories/Img-6.png",
    "/assets/media/categories/Img-7.png",
    "/assets/media/categories/Img-8.png",
    "/assets/media/categories/Img-1.png",
    "/assets/media/categories/Img-2.png",
    "/assets/media/categories/Img-3.png",
    "/assets/media/categories/Img-4.png",
    "/assets/media/categories/Img-5.png",
    "/assets/media/categories/Img-6.png",
    "/assets/media/categories/Img-7.png",
    "/assets/media/categories/Img-8.png",
    "/assets/media/categories/Img-1.png",
    "/assets/media/categories/Img-2.png",
    "/assets/media/categories/Img-3.png",
    "/assets/media/categories/Img-4.png",
    "/assets/media/categories/Img-5.png",
    "/assets/media/categories/Img-6.png",
    "/assets/media/categories/Img-7.png",
    "/assets/media/categories/Img-8.png",
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
    fetch("https://api.jikan.moe/v4/genres/anime")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setGenres(data["data"]);
      });
    console.log(genres);
  }, []);

  return (
    <div>
      {/* Categories Area Start */}
      <section className="categories p-40">
        <div className="container-fluid">
          <div className="row mt-5">
            {genres.map((value, index) => {
              return (
                <>
                  <div className="col-xxl-3 col-sm-6 mb-30">
                    <Link to={value.url} className="categorie-item">
                      <img src={genreImages[index]} alt={value.name} />
                      <div className="content">
                        <h2 className="h-36 mb-1 color-white">{value.name}</h2>
                        <span className="h-20 color-medium-gray">
                          {value.count}+ {value.name}
                        </span>
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
      {/* Categories Area End */}
    </div>
  );
}

export default Category;
