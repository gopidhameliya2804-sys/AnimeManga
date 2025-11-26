import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

function MangaDetail() {
    let [details , setDetails] = useState();
    let id = useLocation().pathname.split("/")[2];
    console.log(id);

    useEffect(() => {
        fetch(`https://api.jikan.moe/v4/manga/${id}`)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            setDetails(data["data"]);
          })
          console.log(details);
    }, []);

  return (
    <div>
      <div>
        {/* Hero Banner start */}
        <div className="inner-banner p-40">
          <div className="container-fluid">
            <div className="row">
              <div className='col'>
                {details ? (
                  <div className='m-3 text-center mb-5' style={{height:"250px"}}>
                  <img src={details.images.jpg.image_url} alt='' style={{height:"300px" , width:"350px"}} />
                </div>
                ): (
                  <p>Loading country details</p>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Main Content Start */}
        <div className="page-content">
          {/* Movie Detail Area Start */}
          <section className="movie-detail p-40">
            <div className="container-fluid">
            {details ? (
              <div className="row">
                <div className="col-xxl-8 col-xl-8 col-lg-9 mb-lg-0 mb-24">
                  <div className="name-rating mb-24">
                    <h2 className="h-30 bold color-white ">
                      {details.title}
                    </h2>
                    <div className="rating">
                      <span className="h-24 color-white">
                        {details.score}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={32}
                          height={32}
                          viewBox="0 0 32 32"
                          fill="none"
                        >
                          <path
                            d="M16.0001 23.027L21.5334 26.3737C22.5468 26.987 23.7868 26.0803 23.5201 24.9337L22.0534 18.6403L26.9468 14.4003C27.8401 13.627 27.3601 12.1603 26.1868 12.067L19.7468 11.5203L17.2268 5.57367C16.7734 4.49367 15.2268 4.49367 14.7734 5.57367L12.2534 11.507L5.81343 12.0537C4.6401 12.147 4.1601 13.6137 5.05343 14.387L9.94676 18.627L8.4801 24.9203C8.21343 26.067 9.45343 26.9737 10.4668 26.3603L16.0001 23.027Z"
                            fill="#EEAA0F"
                          />
                        </svg>
                      </span>
                      <span className="h-24 color-white">({details.popularity}k)</span>
                    </div>
                  </div>
                  <ul className="tag unstyled mb-24">
                    <li>18+</li>
                    <li>HD</li>
                    <li>{details.published.prop.from.year}</li>
                    <li>{details.type}</li>
                  {/*<li></li>*/}
                  </ul>
                  <h5 className="h-24 color-white mb-16 bold " style={{textAlign:"left"}}>
                    About the Story
                  </h5>
                  <p className="sec color-white mb-24" style={{textAlign:"left"}}>
                    {details.synopsis}
                  </p>
                  <p className="sec color-white mb-16" style={{textAlign:"left"}}>
                    <span className="color-medium-gray">Staring:</span> Natsuki
                    Hanae, Akari Kito, Hiro Shimono{" "}
                  </p>
                  <p className="sec color-white mb-16" style={{textAlign:"left"}}>
                    <span className="color-medium-gray">Language:</span>{" "}
                    Japanese, English, English (India), Español (América Latina)
                  </p>
                  <p className="sec color-white mb-30" style={{textAlign:"left"}}>
                    <span className="color-medium-gray">Subtitles:</span>{" "}
                    Japanese, English
                  </p>
                  <Link
                    to="#"
                    data-bs-toggle="modal"
                    data-bs-target="#videoModal"
                    className="cus-btn primary"
                  >
                    <i className="far fa-play" />
                    Play
                  </Link>
                </div>
                <div className="col-xxl-3 col-xl-4 col-lg-3" style={{textAlign:"left"}}>
                  <div className="about">
                    <h3 className="h-30 bold color-white mb-24">About</h3>
                    <p className="sec color-white mb-8">
                      <span className="color-medium-gray">Type:</span>{details.type}
                    </p>
                    <p className="sec color-white mb-8">
                      <span className="color-medium-gray">Authors:</span> {details.authors[0].name}
                    </p>
                    <p className="sec color-white mb-8">
                      <span className="color-medium-gray">Date aired:</span>{" "}{details.published.string}
                    </p>
                    <p className="sec color-white mb-8">
                      <span className="color-medium-gray">Status:</span>{" "}
                      {details.status}
                    </p>
                    <p className="sec color-white mb-8">
                      <span className="color-medium-gray">Country:</span> Japan
                    </p>
                    <p className="sec color-white mb-8">
                      <span className="color-medium-gray">Popularity:</span>{" "}
                      {details.popularity}
                    </p>
                    <p className="sec color-white mb-24">
                      <span className="color-medium-gray">Rank: </span>{" "}
                      {details.rank}
                    </p>
                    <div className="categorie">
                      <p className="sec color-medium-gray">Genre:</p>
                      <ul className="categorie-list unstyled">
                        <li>
                          <Link to="#">Action</Link>
                        </li>
                        <li>
                          <a href="#">Thriller</a>
                        </li>
                        <li>
                          <a href="#">Sci-Fi</a>
                        </li>
                        <li>
                          <a href="#">Cyberpunk</a>
                        </li>
                        <li>
                          <a href="#">Shounen</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>) : (
                <p>Loading country details</p>
              )}
              <div className="line" />
            </div>
          </section>
          {/* Movie Detail Area end */}
        
          {/* Comment Area Start */}
          <section className="comment p-40">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-8 mb-40">
                  <div className="heading-block mb-32">
                    <div className="title">
                      <h3 className="h-36 color-white">Comments</h3>
                      <div className="list">50</div>
                    </div>
                    <div className="title sec">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={33}
                        viewBox="0 0 32 33"
                        fill="none"
                      >
                        <path
                          d="M28.2001 5.52877C28.0791 5.27211 27.8208 5.1084 27.537 5.1084H4.81706C4.53332 5.1084 4.2751 5.27211 4.15401 5.52877C4.03301 5.78542 4.07093 6.0888 4.25145 6.30773L12.9853 16.9009V26.6687C12.9853 26.9224 13.1164 27.1579 13.3318 27.2916C13.4499 27.3648 13.5839 27.4018 13.7184 27.4018C13.8295 27.4018 13.941 27.3764 14.0438 27.3255L18.951 24.8933C19.2004 24.7698 19.3581 24.5158 19.3585 24.2375L19.3681 16.9012L28.1025 6.30763C28.2831 6.0888 28.3211 5.78533 28.2001 5.52877ZM18.0699 16.1713C17.9619 16.3022 17.9027 16.4667 17.9025 16.6366L17.8931 23.7815L14.4515 25.4873V16.6376C14.4515 16.4674 14.3924 16.3025 14.2841 16.1713L6.37147 6.57436H25.9825L18.0699 16.1713Z"
                          fill="#9EA2A8"
                        />
                      </svg>
                      <h3 className="h-36 color-medium-gray">Popularity</h3>
                    </div>
                  </div>
                  <div className="comment-box  mb-32">
                    <img src="assets/media/author/profile-1.png" alt />
                    <div className="text-block">
                      <div className="top-line mb-8">
                        <h5 className="h-20 bold color-white">
                          @otaku_obsessed
                        </h5>
                        <h6 className="color-medium-gray">5 minutes ago</h6>
                      </div>
                      <p className="color-medium-gray sec sm mb-24">
                        Lorem ipsum dolor sit amet consectetur. Blandit luctus
                        nunc nulla ut etiam penatibus gravida fusce. Id viverra
                        erat nisl tincidunt risus elit. Lect diamn on leo
                        volutpat nulla. Aliquet a at iaculis imperdiet diam
                        tincidunt venenatis eget. Urna elementum rhoncus eu
                        tristique lorem.
                      </p>
                      <div className="mb-24">
                        <div className="botton-row">
                          <div className="btn-block">
                            <a href="#">
                              <i className="fal fa-thumbs-up" />
                            </a>
                            <span>50K</span>
                          </div>
                          <div className="btn-block">
                            <a href="#">
                              <i className="fal fa-thumbs-down" />
                            </a>
                            <span>50K</span>
                          </div>
                          <div className="btn-block">
                            <button
                              className=" accordion-button collapsed comment-btn reply-btn"
                              data-bs-toggle="collapse"
                              data-bs-target="#reply2"
                              aria-expanded="true"
                            >
                              Reply <i className="fal fa-reply" />
                            </button>
                          </div>
                        </div>
                        <div
                          id="reply2"
                          className="accordion-collapse collapse write-reply"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="write-comment-box">
                            <form action="https://uiparadox.co.uk/templates/vivid/v3/anime-detail.html">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control p-0 border-0"
                                  name="search"
                                  required
                                  placeholder="Write your comment"
                                />
                                <button type="submit">Post</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="accordion-button comment-btn collapsed  mb-32 action-btn"
                        data-bs-toggle="collapse"
                        data-bs-target="#reply"
                        aria-expanded="false"
                        aria-controls="reply"
                      >
                        <i className="fa fa-chevron-down" /> Show 02 Replies
                      </a>
                      <div
                        id="reply"
                        className="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="extra-comments">
                          <div className="comment-box  mb-32 sm">
                            <img src="assets/media/author/profile-3.png" alt />
                            <div className="text-block">
                              <div className="top-line mb-8">
                                <h5 className="h-20 bold color-white">
                                  @otaku_obsessed
                                </h5>
                                <h6 className="color-medium-gray">
                                  5 minutes ago
                                </h6>
                              </div>
                              <p className="color-medium-gray sec sm mb-24">
                                Lorem ipsum dolor sit amet consectetur. Blandit
                                luctus nunc nulla ut etiam penatibus gravida
                                fusce. Id viverra erat nisl tincidunt risus eli.
                                Lectur diam non leo volutpat nulla. Aliquet a at
                                iaculis imperdiet diam.
                              </p>
                              <div className="mb-24">
                                <div className="botton-row">
                                  <div className="btn-block">
                                    <a href="#">
                                      <i className="fal fa-thumbs-up" />
                                    </a>
                                    <span>50K</span>
                                  </div>
                                  <div className="btn-block">
                                    <a href="#">
                                      <i className="fal fa-thumbs-down" />
                                    </a>
                                    <span>50K</span>
                                  </div>
                                  <div className="btn-block">
                                    <button
                                      className=" accordion-button collapsed comment-btn reply-btn"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#reply3"
                                      aria-expanded="true"
                                    >
                                      Reply <i className="fal fa-reply" />
                                    </button>
                                  </div>
                                </div>
                                <div
                                  id="reply3"
                                  className="accordion-collapse collapse write-reply"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="write-comment-box">
                                    <form action="https://uiparadox.co.uk/templates/vivid/v3/anime-detail.html">
                                      <div className="input-group">
                                        <input
                                          type="text"
                                          className="form-control p-0 border-0"
                                          name="search"
                                          required
                                          placeholder="Write your comment"
                                        />
                                        <button type="submit">Post</button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="comment-box  mb-32 sm">
                            <img src="assets/media/author/profile-3.png" alt />
                            <div className="text-block">
                              <div className="top-line mb-8">
                                <h5 className="h-20 bold color-white">
                                  @otaku_obsessed
                                </h5>
                                <h6 className="color-medium-gray">
                                  5 minutes ago
                                </h6>
                              </div>
                              <p className="color-medium-gray sec sm mb-24">
                                Lorem ipsum dolor sit amet consectetur. Blandit
                                luctus nunc nulla ut etiam penatibus gravida
                                fusce. Id viverra erat nisl tincidunt risus eli.
                                Lectur diam non leo volutpat nulla. Aliquet a at
                                iaculis imperdiet diam.
                              </p>
                              <div className="mb-24">
                                <div className="botton-row">
                                  <div className="btn-block">
                                    <a href="#">
                                      <i className="fal fa-thumbs-up" />
                                    </a>
                                    <span>50K</span>
                                  </div>
                                  <div className="btn-block">
                                    <a href="#">
                                      <i className="fal fa-thumbs-down" />
                                    </a>
                                    <span>50K</span>
                                  </div>
                                  <div className="btn-block">
                                    <button
                                      className=" accordion-button collapsed comment-btn reply-btn"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#reply4"
                                      aria-expanded="true"
                                    >
                                      Reply <i className="fal fa-reply" />
                                    </button>
                                  </div>
                                </div>
                                <div
                                  id="reply4"
                                  className="accordion-collapse collapse write-reply"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="write-comment-box">
                                    <form action="https://uiparadox.co.uk/templates/vivid/v3/anime-detail.html">
                                      <div className="input-group">
                                        <input
                                          type="text"
                                          className="form-control p-0 border-0"
                                          name="search"
                                          required
                                          placeholder="Write your comment"
                                        />
                                        <button type="submit">Post</button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-box  mb-32">
                    <img src="assets/media/author/profile-2.png" alt />
                    <div className="text-block">
                      <div className="top-line mb-8">
                        <h5 className="h-20 bold color-white">@kawaii_kat</h5>
                        <h6 className="color-medium-gray">5 minutes ago</h6>
                      </div>
                      <p className="color-medium-gray sec sm mb-24">
                        Lorem ipsum dolor sit amet consectetur. Blandit luctus
                        nunc nulla ut etiam penatibus gravida fusce. Id viverra
                        erat nisl tincidunt risus elit. Lect diamn on leo
                        volutpat nulla. Aliquet a at iaculis imperdiet diam
                        tincidunt venenatis eget. Urna elementum rhoncus eu
                        tristique lorem.
                      </p>
                      <div className="mb-24">
                        <div className="botton-row">
                          <div className="btn-block">
                            <a href="#">
                              <i className="fal fa-thumbs-up" />
                            </a>
                            <span>50K</span>
                          </div>
                          <div className="btn-block">
                            <a href="#">
                              <i className="fal fa-thumbs-down" />
                            </a>
                            <span>50K</span>
                          </div>
                          <div className="btn-block">
                            <button
                              className=" accordion-button collapsed comment-btn reply-btn"
                              data-bs-toggle="collapse"
                              data-bs-target="#reply5"
                              aria-expanded="true"
                            >
                              Reply <i className="fal fa-reply" />
                            </button>
                          </div>
                        </div>
                        <div
                          id="reply5"
                          className="accordion-collapse collapse write-reply"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="write-comment-box">
                            <form action="https://uiparadox.co.uk/templates/vivid/v3/anime-detail.html">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control p-0 border-0"
                                  name="search"
                                  required
                                  placeholder="Write your comment"
                                />
                                <button type="submit">Post</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      <a
                        href="#"
                        className="accordion-button comment-btn mb-32 action-btn"
                        data-bs-toggle="collapse"
                        data-bs-target="#reply6"
                        aria-expanded="false"
                        aria-controls="reply"
                      >
                        <i className="fa fa-chevron-up" /> Show 02 Replies
                      </a>
                      <div
                        id="reply6"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="extra-comments">
                          <div className="comment-box  mb-32 sm">
                            <img src="assets/media/author/profile-3.png" alt />
                            <div className="text-block">
                              <div className="top-line mb-8">
                                <h5 className="h-20 bold color-white">
                                  @otaku_obsessed
                                </h5>
                                <h6 className="color-medium-gray">
                                  5 minutes ago
                                </h6>
                              </div>
                              <p className="color-medium-gray sec sm mb-24">
                                Lorem ipsum dolor sit amet consectetur. Blandit
                                luctus nunc nulla ut etiam penatibus gravida
                                fusce. Id viverra erat nisl tincidunt risus eli.
                                Lectur diam non leo volutpat nulla. Aliquet a at
                                iaculis imperdiet diam.
                              </p>
                              <div className="mb-24">
                                <div className="botton-row">
                                  <div className="btn-block">
                                    <a href="#">
                                      <i className="fal fa-thumbs-up" />
                                    </a>
                                    <span>50K</span>
                                  </div>
                                  <div className="btn-block">
                                    <a href="#">
                                      <i className="fal fa-thumbs-down" />
                                    </a>
                                    <span>50K</span>
                                  </div>
                                  <div className="btn-block">
                                    <button
                                      className=" accordion-button collapsed comment-btn reply-btn"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#reply7"
                                      aria-expanded="true"
                                    >
                                      Reply <i className="fal fa-reply" />
                                    </button>
                                  </div>
                                </div>
                                <div
                                  id="reply7"
                                  className="accordion-collapse collapse write-reply"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="write-comment-box">
                                    <form action="https://uiparadox.co.uk/templates/vivid/v3/anime-detail.html">
                                      <div className="input-group">
                                        <input
                                          type="text"
                                          className="form-control p-0 border-0"
                                          name="search"
                                          required
                                          placeholder="Write your comment"
                                        />
                                        <button type="submit">Post</button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="comment-box  mb-32 sm">
                            <img src="assets/media/author/profile-3.png" alt />
                            <div className="text-block">
                              <div className="top-line mb-8">
                                <h5 className="h-20 bold color-white">
                                  @cosplayqueen
                                </h5>
                                <h6 className="color-medium-gray">
                                  5 minutes ago
                                </h6>
                              </div>
                              <p className="color-medium-gray sec sm mb-24">
                                Lorem ipsum dolor sit amet consectetur. Blandit
                                luctus nunc nulla ut etiam penatibus gravida
                                fusce. Id viverra erat nisl tincidunt risus eli.
                                Lectur diam non leo volutpat nulla. Aliquet a at
                                iaculis imperdiet diam.
                              </p>
                              <div className="mb-24">
                                <div className="botton-row">
                                  <div className="btn-block">
                                    <a href="#">
                                      <i className="fal fa-thumbs-up" />
                                    </a>
                                    <span>50K</span>
                                  </div>
                                  <div className="btn-block">
                                    <a href="#">
                                      <i className="fal fa-thumbs-down" />
                                    </a>
                                    <span>50K</span>
                                  </div>
                                  <div className="btn-block">
                                    <button
                                      className=" accordion-button collapsed comment-btn reply-btn"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#reply8"
                                      aria-expanded="true"
                                    >
                                      Reply <i className="fal fa-reply" />
                                    </button>
                                  </div>
                                </div>
                                <div
                                  id="reply8"
                                  className="accordion-collapse collapse write-reply"
                                  data-bs-parent="#accordionExample"
                                >
                                  <div className="write-comment-box">
                                    <form action="https://uiparadox.co.uk/templates/vivid/v3/anime-detail.html">
                                      <div className="input-group">
                                        <input
                                          type="text"
                                          className="form-control p-0 border-0"
                                          name="search"
                                          required
                                          placeholder="Write your comment"
                                        />
                                        <button type="submit">Post</button>
                                      </div>
                                    </form>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-box  mb-32">
                    <img src="assets/media/author/profile-2.png" alt />
                    <div className="text-block">
                      <div className="top-line mb-8">
                        <h5 className="h-20 bold color-white">@kawaii_kat</h5>
                        <h6 className="color-medium-gray">5 minutes ago</h6>
                      </div>
                      <p className="color-medium-gray sec sm mb-24">
                        Lorem ipsum dolor sit amet consectetur. Blandit luctus
                        nunc nulla ut etiam penatibus gravida fusce. Id viverra
                        erat nisl tincidunt risus elit. Lect diamn on leo
                        volutpat nulla. Aliquet a at iaculis imperdiet diam
                        tincidunt venenatis eget. Urna elementum rhoncus eu
                        tristique lorem.
                      </p>
                      <div className="mb-24">
                        <div className="botton-row">
                          <div className="btn-block">
                            <a href="#">
                              <i className="fal fa-thumbs-up" />
                            </a>
                            <span>50K</span>
                          </div>
                          <div className="btn-block">
                            <a href="#">
                              <i className="fal fa-thumbs-down" />
                            </a>
                            <span>50K</span>
                          </div>
                          <div className="btn-block">
                            <button
                              className=" accordion-button collapsed comment-btn reply-btn"
                              data-bs-toggle="collapse"
                              data-bs-target="#reply9"
                              aria-expanded="true"
                            >
                              Reply <i className="fal fa-reply" />
                            </button>
                          </div>
                        </div>
                        <div
                          id="reply9"
                          className="accordion-collapse collapse write-reply"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="write-comment-box">
                            <form action="https://uiparadox.co.uk/templates/vivid/v3/anime-detail.html">
                              <div className="input-group">
                                <input
                                  type="text"
                                  className="form-control p-0 border-0"
                                  name="search"
                                  required
                                  placeholder="Write your comment"
                                />
                                <button type="submit">Post</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="more">
                    <a
                      href="#"
                      className="accordion-button comment-btn collapsed  mb-0 action-btn"
                      data-bs-toggle="collapse"
                      data-bs-target="#reply20"
                      aria-expanded="false"
                      aria-controls="reply"
                    >
                      {" "}
                      Load More Comments <i className="fa fa-chevron-down" />
                    </a>
                    <p className="color-medium-gray">40 of 1500</p>
                  </div>
                  <div
                    id="reply20"
                    className="accordion-collapse collapse mt-32"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="extra-comments">
                      <div className="comment-box  mb-32">
                        <img src="assets/media/author/profile-1.png" alt />
                        <div className="text-block">
                          <div className="top-line mb-8">
                            <h5 className="h-20 bold color-white">
                              @kawaii_kat
                            </h5>
                            <h6 className="color-medium-gray">5 minutes ago</h6>
                          </div>
                          <p className="color-medium-gray sec sm mb-24">
                            Lorem ipsum dolor sit amet consectetur. Blandit
                            luctus nunc nulla ut etiam penatibus gravida fusce.
                            Id viverra erat nisl tincidunt risus elit. Lect
                            diamn on leo volutpat nulla. Aliquet a at iaculis
                            imperdiet diam tincidunt venenatis eget. Urna
                            elementum rhoncus eu tristique lorem.
                          </p>
                          <div className="mb-24">
                            <div className="botton-row">
                              <div className="btn-block">
                                <a href="#">
                                  <i className="fal fa-thumbs-up" />
                                </a>
                                <span>50K</span>
                              </div>
                              <div className="btn-block">
                                <a href="#">
                                  <i className="fal fa-thumbs-down" />
                                </a>
                                <span>50K</span>
                              </div>
                              <div className="btn-block">
                                <button
                                  className=" accordion-button collapsed comment-btn reply-btn"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#reply10"
                                  aria-expanded="true"
                                >
                                  Reply <i className="fal fa-reply" />
                                </button>
                              </div>
                            </div>
                            <div
                              id="reply10"
                              className="accordion-collapse collapse write-reply"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="write-comment-box">
                                <form action="https://uiparadox.co.uk/templates/vivid/v3/anime-detail.html">
                                  <div className="input-group">
                                    <input
                                      type="text"
                                      className="form-control p-0 border-0"
                                      name="search"
                                      required
                                      placeholder="Write your comment"
                                    />
                                    <button type="submit">Post</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="comment-box">
                        <img src="assets/media/author/profile-2.png" alt />
                        <div className="text-block">
                          <div className="top-line mb-8">
                            <h5 className="h-20 bold color-white">
                              @kawaii_kat
                            </h5>
                            <h6 className="color-medium-gray">5 minutes ago</h6>
                          </div>
                          <p className="color-medium-gray sec sm mb-24">
                            Lorem ipsum dolor sit amet consectetur. Blandit
                            luctus nunc nulla ut etiam penatibus gravida fusce.
                            Id viverra erat nisl tincidunt risus elit. Lect
                            diamn on leo volutpat nulla. Aliquet a at iaculis
                            imperdiet diam tincidunt venenatis eget. Urna
                            elementum rhoncus eu tristique lorem.
                          </p>
                          <div className="mb-0">
                            <div className="botton-row">
                              <div className="btn-block">
                                <a href="#">
                                  <i className="fal fa-thumbs-up" />
                                </a>
                                <span>50K</span>
                              </div>
                              <div className="btn-block">
                                <a href="#">
                                  <i className="fal fa-thumbs-down" />
                                </a>
                                <span>50K</span>
                              </div>
                              <div className="btn-block">
                                <button
                                  className=" accordion-button collapsed comment-btn reply-btn"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#reply11"
                                  aria-expanded="true"
                                >
                                  Reply <i className="fal fa-reply" />
                                </button>
                              </div>
                            </div>
                            <div
                              id="reply11"
                              className="accordion-collapse collapse write-reply"
                              data-bs-parent="#accordionExample"
                            >
                              <div className="write-comment-box">
                                <form action="https://uiparadox.co.uk/templates/vivid/v3/anime-detail.html">
                                  <div className="input-group">
                                    <input
                                      type="text"
                                      className="form-control p-0 border-0"
                                      name="search"
                                      required
                                      placeholder="Write your comment"
                                    />
                                    <button type="submit">Post</button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4">
                  <div className="trailer">
                    <img src="assets/media/anime-card/img-26.png" alt />
                    <div className="detail">
                      <h4 className="h-20 bold color-primary mb-8">
                        Coming Soon!
                      </h4>
                      <ul className="timer countdown unstyled data-timer1">
                        <li>
                          20 <small>Days</small>
                        </li>
                        <li>
                          23 <small>Hrs</small>
                        </li>
                        <li>
                          50 <small>Min</small>
                        </li>
                        <li>
                          34 <small>Sec</small>
                        </li>
                      </ul>
                      <h2 className="h-40 bold color-white mb-12">
                        Chainsawman
                      </h2>
                      <p className="color-medium-gray sec mb-40">
                        Lorem ipsum dolor sit amet consectetur. Ligula <br />{" "}
                        quam enim ullamcorper pulvinar. Tincidunt felis
                      </p>
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#videoModal"
                        className="cus-btn primary"
                      >
                        <i className="far fa-play" />
                        Watch Trailer
                      </a>
                    </div>
                  </div>
                  <div className="notification">
                    <h4 className="h-36 bold color-white mb-8">
                      Notifications
                    </h4>
                    <p className="sec color-medium-gray mb-32">
                      Subscribe to our notifications so you get notified about
                      new episodes!
                    </p>
                    <form action="https://uiparadox.co.uk/templates/vivid/v3/anime-detail.html">
                      <input
                        type="email"
                        id="email"
                        className="form-control mb-32"
                        placeholder="Your email"
                      />
                      <button type="submit" className="cus-btn primary">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-xl-8">
                  <div className="comment-block p-40 pb-0">
                    <h4 className="h-36 bold color-white mb-8">
                      Leave a Comment
                    </h4>
                    <p className="sec color-medium-gray mb-24">
                      Your email will be kept private.
                    </p>
                    <form action="https://uiparadox.co.uk/templates/vivid/v3/anime-detail.html">
                      <div className="row">
                        <div className="col-lg-6">
                          <input
                            type="text"
                            id="name"
                            className="form-control mb-16"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="email"
                            id="email2"
                            className="form-control mb-16"
                            placeholder="Your email"
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            name="comment"
                            id="comment"
                            className="form-control mb-30"
                            placeholder="Your Comment"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-12">
                          <div className="checkBox mb-24">
                            <input type="checkbox" id="comments" />
                            <label htmlFor="comments">
                              Please remember my details for future comments.
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="cus-btn primary">
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Comment Area End */}
        </div>
        {/* Main Content End */}
      </div>
    </div>
  )
}

export default MangaDetail
