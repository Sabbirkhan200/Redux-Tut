import React from 'react'

const Home = () => {
  return (
    <section>
      <div
        style={{
          textAlign: 'center',
          marginTop: 50,
        }}
      >
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
                src="https://media.istockphoto.com/id/996990848/photo/students-creating-programs-while-using-laptop.jpg?s=612x612&w=0&k=20&c=qJTLvRI0jmDT4S_YZpwv7dhv7tZiox_p1_FNzMiMK6o="
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://media.istockphoto.com/id/819689842/photo/female-executive-working-over-laptop-at-her-desk.jpg?s=612x612&w=0&k=20&c=t9-ekHpR1Whjt7sQvg7XVIpDmTvhWGWUHbde3Bt5UX4="
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://media.istockphoto.com/id/1221204650/photo/business-can-not-wait.jpg?s=612x612&w=0&k=20&c=1ZJn_BWN-OqIlnjohELZnsUlaXsw9LsKHkUDS8mHfhY="
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
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* card title */}
      <div
        style={{
          textAlign: 'center',
          padding: 20,
        }}
      >
        <h5 style={{ color: 'red' }}>পরিশ্রম !! </h5>
        <p>
          যদি পরিশ্রম করেন তবে অবশ্যই একদিন খুব ভালো মানের প্রোগ্রামার হতে
          পারবেন ।<br /> তবে আপনি শুরু টা জেইভাবে করতে পারেন।
          <br />
          আপনাকে কেও রুখতে পারবেনা যদি আপনার ইচ্ছা শক্তি অটুট থাকে
        </p>
      </div>
    </section>
  )
}

export default Home
