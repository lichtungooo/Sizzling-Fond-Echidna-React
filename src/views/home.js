import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import AppComponent from '../components/component'
import CTA26 from '../components/cta26'
import Steps2 from '../components/steps2'
import Features25 from '../components/features25'
import Testimonial17 from '../components/testimonial17'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Sizzling Fond Echidna</title>
        <meta property="og:title" content="Sizzling Fond Echidna" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10">Vision</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">Map</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">People</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">Donate</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14">Page One</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15">Page Two</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16">Page Three</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17">Page Four</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">Main Action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text19">Secondary Action</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text20">Page One Description</span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text21">Page Two Description</span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22">Page Three Description</span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text23">Page Four Description</span>
          </Fragment>
        }
      ></Navbar8>
      <video
        src="/waterdrop.mp4"
        muted="true"
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        autoPlay="true"
        className="home-video"
      ></video>
      <AppComponent
        text={
          <Fragment>
            <span className="home-text24">Text</span>
          </Fragment>
        }
        login={
          <Fragment>
            <span className="home-text25">Login</span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text26">About</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text27">Features</span>
          </Fragment>
        }
        text3={
          <Fragment>
            <span className="home-text28">Pricing</span>
          </Fragment>
        }
        text4={
          <Fragment>
            <span className="home-text29">Team</span>
          </Fragment>
        }
        text5={
          <Fragment>
            <span className="home-text30">Blog</span>
          </Fragment>
        }
        text6={
          <Fragment>
            <span className="home-text31">About</span>
          </Fragment>
        }
        text7={
          <Fragment>
            <span className="home-text32">Features</span>
          </Fragment>
        }
        text8={
          <Fragment>
            <span className="home-text33">Pricing</span>
          </Fragment>
        }
        text9={
          <Fragment>
            <span className="home-text34">Team</span>
          </Fragment>
        }
        login1={
          <Fragment>
            <span className="home-text35">Login</span>
          </Fragment>
        }
        text10={
          <Fragment>
            <span className="home-text36">Blog</span>
          </Fragment>
        }
        register={
          <Fragment>
            <span className="home-text37">Register</span>
          </Fragment>
        }
        register1={
          <Fragment>
            <span className="home-text38">Register</span>
          </Fragment>
        }
      ></AppComponent>
      <CTA26
        content1={
          <Fragment>
            <span className="home-text39">
              Explore our interactive map, watch our inspiring video, and learn
              more about how you can contribute to a peaceful world.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text40">Lets`s give peace a value again</span>
          </Fragment>
        }
      ></CTA26>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text41">
              <span>scan qr-code</span>
              <br></br>
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text44">place Profile on Map</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text45">Connect People</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text46">join Events</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text47">
              install Telegram and follow the Instruction to create your Profile
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text48">
              Immerse yourself in a visual journey showcasing moments of peace
              and unity from various cultures and communities.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text49">
              Explore three key points related to peace, including ways to
              promote harmony, understanding, and cooperation.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text50">
              Take action by participating in events, supporting organizations,
              or spreading awareness to contribute to a more peaceful world.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text51">Interactive Map</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text52">Loop Video</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text53">Menu with Peace Points</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text54">
              Explore different regions and locations related to peace on our
              interactive map.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text55">
              Watch a mesmerizing loop video that embodies the essence of peace
              and tranquility.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text56">
              Discover three key points related to peace in our menu and delve
              deeper into their significance.
            </span>
          </Fragment>
        }
      ></Features25>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text57">
              Using the interactive map on this website has been a game-changer
              for our organization. It has helped us visualize data in a whole
              new way.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text58">
              The loop video on the homepage is so captivating and really sets
              the tone for exploring the site further. Kudos to the team!
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text59">
              The peace-themed menu options are not only innovative but also a
              great conversation starter. It&apos;s refreshing to see such
              creativity in web design.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text60">
              I appreciate the focus on peace throughout the website. It&apos;s
              a reminder that even in the digital world, we can promote harmony
              and understanding.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text61">
              Read what our customers have to say about their experience with
              our interactive map and peace-focused menu.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text62">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text63">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text64">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text65">David Lee</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text66">Sarah Johnson</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text67">CEO, Company ABC</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text68">Founder, Organization XYZ</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text69">Director, Nonprofit DEF</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text70">Coordinator, Charity GHI</span>
          </Fragment>
        }
      ></Testimonial17>
      <img alt="image" src="/logo2.svg" className="home-image" />
      <Footer4
        link1={
          <Fragment>
            <span className="home-text71">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text72">Contact</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text73">Donate</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text74">Link 4</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text75">Link 5</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text76">Terms of Use</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text77">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text78">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
      <span>Text</span>
    </div>
  )
}

export default Home
