import React from 'react'
import { GoHeart } from 'react-icons/go'

const Header = () => {
  return (
    <header class="page-header bg-dark" id="home">
      <svg id="svg2" viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg" class="row transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#00f6ffff"></stop><stop offset="95%" stop-color="#d6ff30ff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 141.75,221.28571428571428 283.5,242.57142857142856 401,256 C 518.5,269.42857142857144 611.7499999999999,275 722,268 C 832.2500000000001,261 959.5000000000002,241.42857142857142 1082,228 C 1204.4999999999998,214.57142857142858 1322.25,207.28571428571428 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path></svg>

      <div class="card-static slide-in-bottom">
          <span class="badge rounded-pill bg-success-bright" style={{float: 'right'}}><strong>BREAKING NEWS</strong></span>
          <div class="card-static-item">
              <div class="card-static-item-title">Update: 19/07/2023</div>
              <div class="card-static-item-value h6">
                  <strong>
                      The Cardano Foundation delegation has returned! {!!GoHeart && <span><GoHeart size={20} color='blue' /><GoHeart size={20} color='yellow' /></span>}<br/>For the next 3 months, <a class="a-grad1 glow-on-hover" href="#pool">ADACT</a> will be forging blocks on a regular basis.<br/>
                      Now is a great time to join us:<br />
                      <div>🚀Get 4.5% Staking Rewards on your staked ₳!</div>
                      <div>🚀Get additional ADA CAPITAL REWARDS!</div>
                      <div>🚀Get a paid Subscription Plan to CardanoBI when you delegate ₳10,000 or more, for more details visit <a class="a-grad1 glow-on-hover" href="https://cardanobi.io/pricing" target="_blank" rel="noopener noreferrer"><strong>CardanoBI</strong></a>.<br/></div>
                      {/* 🌻 We give 20% of our revenues to <a class="a-grad1 glow-on-hover" href="https://solar-aid.org/" target="_blank" rel="noopener noreferrer"><strong>SolarAid</strong></a> to help them bring clean electricity to sub-Saharan Africa. */}
                  </strong>
              </div>
          </div>
        </div>

      <div class="container pt-5">
        <div class="row align-items-center justify-content-center">
          <div class="col-md-5 offset-md-1">
            <h2>Welcome to <b>ADA</b>Capital!</h2>
            <hr class="hr1" />
          </div>
          <div class="circleBase circleType1 offset-md-1" id="particles-js"></div>
        </div>


        {/* <div class="row align-items-center justify-content-center">
          <div id="carouselExampleFade" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="0" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleFade" data-bs-slide-to="1" class="active" aria-current="true" aria-label="Slide 2"></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item" data-bs-interval="3000" style={{width: '50%', height: '50%'}}>
                <img src="img/SundaeSwap_ISO_END.png" class="d-block w-100" alt="..."/>
              </div>
              <div class="carousel-item active" data-bs-interval="3000"> */}
        <div class="row align-items-center justify-content-center">
          <div class="col-md-8 offset-md-1">
            <p class="large-first-letter">
              We are a <strong>Single</strong> and <strong>Independent</strong> <strong><a class="a-grad1 glow-on-hover" href="https://cardano.org" target="_blank" rel="noopener noreferrer">Cardano</a> Stake Pool Operator</strong>.
              <br />
            </p>
            <p class="large-first-letter">
              Our <strong>mission</strong> is to <strong>run</strong> and <strong>grow</strong> the Earth’s most advanced, 3rd generation blockchain platform.
              <br />
            </p>
            <p class="large-first-letter">
              We operate along the following <strong>3 tracks</strong>:
              <br />
            </p>
          </div>
        </div>
        <div class="row align-items-center justify-content-center">
          <div class="col-md-5"><a href="#staking" class="popup-button glow-on-hover">Staking</a></div>
        </div>
        <div class="row align-items-center justify-content-center">
          <div class="col-md-5"><a href="#education" class="popup-button glow-on-hover">Education</a></div>
        </div>
        <div class="row align-items-center justify-content-center">
          <div class="col-md-5"><a href="#build" class="popup-button glow-on-hover">Build</a></div>
        </div>
      </div>
      {/* </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div> */}

      <svg id="svg" viewBox="0 0 1440 260" xmlns="http://www.w3.org/2000/svg" class="row transition duration-300 ease-in-out delay-150">
        <defs>
          <linearGradient id="gradient_2">
            <stop offset="5%" stop-color="#d6ff30ff"></stop>
            <stop offset="95%" stop-color="#00f6ffff"></stop>
          </linearGradient>
        </defs>
        <path d="M 0,400 C 0,400 0,200 0,200 C 106.42857142857142,225.96428571428572 212.85714285714283,251.92857142857142 328,252 C 443.14285714285717,252.07142857142858 567.0000000000001,226.25000000000003 684,200 C 800.9999999999999,173.74999999999997 911.1428571428571,147.07142857142856 1036,147 C 1160.857142857143,146.92857142857144 1300.4285714285716,173.46428571428572 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient_2)" class="transition-all duration-300 ease-in-out delay-150"></path>
      </svg>
      <svg id="svg2" viewBox="0 0 1440 260" xmlns="http://www.w3.org/2000/svg" class="row transition duration-300 ease-in-out delay-150">
        <defs>
          <linearGradient id="gradient">
            <stop offset="5%" stop-color="#00f6ffff"></stop>
            <stop offset="95%" stop-color="#d6ff30ff"></stop>
          </linearGradient>
        </defs>
        <path d="M 0,400 C 0,400 0,200 0,200 C 141.75,221.28571428571428 283.5,242.57142857142856 401,256 C 518.5,269.42857142857144 611.7499999999999,275 722,268 C 832.2500000000001,261 959.5000000000002,241.42857142857142 1082,228 C 1204.4999999999998,214.57142857142858 1322.25,207.28571428571428 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150" transform="rotate(-180 720 200)"></path></svg>
    </header>
  )
}

export default Header
