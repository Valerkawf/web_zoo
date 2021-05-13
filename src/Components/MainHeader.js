import React, { useState } from "react";

const MainHeader = () => {
  const [redirected] = useState(false);

  if (redirected) {
    window.location.href = "/team";
  }
  if (redirected) {
    window.location.href = "/animals";
  }

  if (redirected) {
    window.location.href = "/contactus";
  }

  return (
    <header role="banner">
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="home">
            WEB ZOO
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarsExample05"
            aria-controls="navbarsExample05"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarsExample05">
            <ul class="navbar-nav ml-auto pl-lg-5 pl-0">
              <li class="nav-item">
                <a class="nav-link active" href="home">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/team">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/animals">
                  Animals
                </a>
              </li>
            </ul>

            <ul class="navbar-nav ml-auto">
              <li class="nav-item cta-btn">
                <a class="nav-link" href="/contactus  ">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default MainHeader;
