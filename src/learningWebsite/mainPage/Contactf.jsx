import React from 'react'

const Contactf = () => {
  return (
    <div>
      <div>
        <div class="contacts">
          <div
            class="row row-cols-1 row-cols-md-3 g-6"
            style={{ textAlign: 'center', marginTop: '5vh' }}
          >
            <div class="col">
              <div class="card text-bg-info">
                <h2>Support</h2>
                <p>
                  <img
                    src="pic/pngtree-phone-icon-in-solid-circle-png-image_2380227.jpg"
                    style={{ width: 30, textAlign: 'center' }}
                  />
                  01773218006
                </p>
                <p>
                  <img src="pic/124034.png" style={{ width: 30 }} />
                  1773218006
                </p>
              </div>
            </div>
            <div class="col">
              <div class="card text-bg-info">
                <h2>Company</h2>
                <p>
                  <h5>Mabias company ltd</h5>
                </p>
                <p>Our Company Make More Happiness For You</p>
              </div>
            </div>
            <div class="col">
              <div class="card text-bg-info ">
                <h2>Connected us</h2>
                <p>
                  <img src="pic/95627.png" style={{ width: 30 }} />
                  sabbirkhan81863@gmail.com
                </p>
                <p>
                  <img
                    src="pic/location-icon-isolated-on-abstract-260nw-1538200850.webp"
                    style={{ width: 30 }}
                  />
                  Mirpur,Dhaka
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactf
