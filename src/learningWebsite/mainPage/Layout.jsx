import { Outlet, Link, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'

const Layout = () => {
  return (
    <>
      <div className="card bg-info">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid">
                <NavLink className="navbar-brand " to="/">
                  আসুন প্রোগ্রামিং শিখি
                </NavLink>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to="html"
                      >
                        HTML
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="css">
                        CSS
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="bosstrap">
                        BOOSTRAP
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="javascript">
                        JAVASCRIPT
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link" to="react">
                        REACT
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="installation">
                        INSTALLATION
                      </NavLink>
                    </li>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        to="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        More
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink className="dropdown-item" to="interviewq">
                            Interview Qustion
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" to="goudeline">
                            Full stack developer guideline
                          </NavLink>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <NavLink
                            className="dropdown-item"
                            style={{ display: 'flex' }}
                            to="about"
                          >
                            <Stack direction="row" spacing={2}>
                              <Avatar src="pic/sabbir.jpg" />
                            </Stack>
                            About Me
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  )
}

export default Layout
