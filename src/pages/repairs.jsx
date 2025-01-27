import React, { Component } from "react";
import NavBar from "../components/navbar_dark.jsx";
import Social from "../components/sm_bar.jsx";
import "./css/repairs.css";

class Repairs extends Component {
  state = {};
  render() {
    return (
      <div>
        <head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossorigin="anonymous"
          />

          {/* Open Graph Meta Tags */}
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </head>
        <body>
          {/* NavBar */}
          <NavBar />
          {/* Main Page */}
          <div id="repairs-title">
            <div class="row">
              <div class="col-md-7">
                <div id="main-text-repairs">
                  i believe that anyone can fix anything.
                </div>
              </div>
              <div class="col-md-5">
                <img
                  id="main-pic"
                  src={require("../Images/imac.png")}
                  alt="main-pic"
                />
              </div>
            </div>
          </div>
          <div id="repairs-body">
            <div class="text-repairs">
              I love tinkering! I would consider repairing tech items a
              specialty of mine. I have worked with several computers, laptops,
              and smartphones. My work ranges from simple battery replacements
              and component upgrades to LCD replacements and more. I also work
              with electric vehicles as well, such as skateboards and scooters.
              I personally find satisfaction restoring a broken product and
              bringing it back to life. Now, whenever my friends and family have
              any sort of technical issues with their devices, they come to me
              for help. I'm always honored to help with their needs and save
              them some money and a trip to the repair store as well!
            </div>
          </div>
          <div id="repairs-list">
            <div class="row justify-content-center">
              <div class="col-md-6">
                <div class="text-repairs">
                  <div class="row">
                    A few of the devices I've worked with...
                  </div>
                  <li>MacBook Pro</li>
                  <li>MacBook Air</li>
                  <li>iMac</li>
                  <li>iPhone X</li>
                  <li>iPhone 7</li>
                  <li>iPhone 6/6s</li>
                  <li>Samsung Galaxy</li>
                  <li>Windows laptops</li>
                  <li>PCs</li>
                </div>
              </div>
              <div class="col-md-6">
                <div class="text-repairs">
                  Some of the repairs I've done...
                  <li>Battery replacements</li>
                  <li>Hard drive upgrades</li>
                  <li>LCD screen replacements</li>
                  <li>OS installation</li>
                  <li>Memory wiping</li>
                  <li>Logic board replacments</li>
                </div>
              </div>
            </div>
          </div>
          {/* Social Media Bar */}

          <Social />
        </body>
      </div>
    );
  }
}

export default Repairs;
