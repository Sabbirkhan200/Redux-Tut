import React from 'react'
import './stylee.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

const Home = () => {
  return (
    <div>
      <div class="frist-back">
        <div class="navbar">
          <nav class="navbar bg-primary">
            <div class="container-fluid">
              <a>
                <img src="pic/pi1.jpg" alt="" class="picsize" />
                <a style={{ fontSize: 20 }} class="MENTAL">
                  MENTAL GAMING
                </a>
              </a>

              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </nav>

          <div class="coimtainer">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="true"
            >
              <div class="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="pic\Capture 2022-09-02 20.54.55.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="pic\Capture 2022-09-02 21.02.05.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="pic\Capture 2022-09-02 21.08.38.jpg"
                    class="d-block w-100"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="text-2">
        <h1>Top up NOW </h1>
      </div>

      <div class="card-img">
        <div class="row row-cols-1 row-cols-md-6 g-6">
          <div class="col">
            <div class="card">
              <img src="pic/pi1.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">free fire (id code)</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="pic/images.png" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">free fire (in game)</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="pic/pubg-mobile-logo-28E182F8A8-seeklogo.com.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Pubg (mobile)</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="pic/41606473215g9mjcrjtlspst9jlusb0xn1k07z8rwjmrldg3bh4ruiz8lmuscm9idorqy4hytt8al41ns7hrltctvafraudzhuzyy4esmwdkfvp.png"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Call off duty</h5>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card">
              <img
                src="pic/optimized_large_thumb_stage.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">clash of clans</h5>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img
                src="pic/logo-for-special-offer-sale-vector-31686317.jpg"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Our offers(all)</h5>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="contacts">
        <div class="row row-cols-1 row-cols-md-3 g-6">
          <div class="col">
            <div class="card">
              <h2>Support</h2>
              <p>
                <img
                  src="pic/pngtree-phone-icon-in-solid-circle-png-image_2380227.jpg"
                  class="phn-icn"
                />
                01773218006
              </p>
              <p>
                <img src="pic/124034.png" class="phn-icn" />
                1773218006
              </p>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <h2>Company</h2>
              <p>
                <h5>Mabias company ltd</h5>
              </p>
              <p>our company make more happiness you</p>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <h2>Connected us</h2>
              <p>
                <img src="pic/95627.png" class="phn-icn" />
                Mental Gaming5564@gmail.com
              </p>
              <p>
                <img
                  src="pic/location-icon-isolated-on-abstract-260nw-1538200850.webp"
                  class="phn-icn"
                />
                Mirpur,Dhaka
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
