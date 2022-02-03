import React from 'react';
import "./Header.css"


export default function Root(props) {

  const handleSubmit = (e) => {
    e.preventDefault();

    const { target: form } = e;
    const input = form?.elements?.something;

    const customEvent = new CustomEvent('message', { detail: input.value });
    window.dispatchEvent(customEvent)
 
  }


  return (
    <><div className="row m-0">
      <div className="col-md-12 p-0">

        <div className="header-main">
          <div className="wrap pl-0 pr-1">
            <div className="container-item">
              <div className="logo">
                <img className="my-portal-logo" src="https://cdnassets.powell-software.com/cdn/stylesheets/themes/8086/images/logo-my-portal.png?v=1642074603" />
              </div>
              <div className="item-list">
                <div className="wrapper-topnav-standard">
                  <nav className="topnav-standard">
                    <ul className="first-level">
                      <li>
                        <span id="parent">Home</span>
                      </li>
                      <li>
                        <span>MY HR INFOS & TOOLS</span>
                      </li>
                      <li>
                        <span>MY TEAMS & NETWORK</span>

                      </li>
                      <li>
                        <span>SSI FUNCTIONS</span>

                      </li>
                      <li>
                        <span>CORPORATE SUPPORTS</span>

                      </li>
                      <li>
                        <span>HELP</span>
                        <i className="fas fa-sort-down"></i>

                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="toggle-container">

              </div>
            </div>
          </div>
        </div>

      </div>
    </div><div className="row m-0">
        <div className="my-portal-banner-container">
          <div className="my-portal-banner"> <a href="/login" className="search" color='red'>Search</a> <form onSubmit={handleSubmit} action='/login'>
            <input className="search" type="text" name="something" placeholder="Search" />
            <button  className="searchbutton" type="submit">Search</button>
          </form>
          </div>
        </div>

      </div></>
  );
}
