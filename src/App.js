import './App.css';
import { useEffect } from 'react';
import Header  from './component/header';
import  Home  from './component/home';
import Footer from './component/footer';
import { Router, Switch, Route, useNavigate, Routes } from "react-router-dom";
import Aboutus from './component/about-us';
import Contact from './component/contact-us';
import Technology from './component/technology';
import Services from './component/services';
import Servicedetails from './component/service-detail';
import Blog from './component/blog';
import Faq from './component/faq';
import Portfolio from './component/portfolio';
import Portfolioinner from './component/portfolio2';
import Blogdetails from './component/blog-details';
import OnClickMobile from './component/onclick-mobile';
import Teams from './component/teams';
import {Helmet} from "react-helmet";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function App() {
  return (
      <div className="bg-black  h-full w-full  ">
          <Header />
          <Helmet>
          <title>Codler</title>
          <meta name="description" content="best software company in banglore" />
          </Helmet>
          <Routes>
              <Route element={<Home />} path='/' />
              <Route element={<Aboutus />} path='/Aboutus' />
              <Route element={<Contact />} path='/Contactus' />
              <Route element={<Portfolio />} path='/portfolio' />
              <Route element={<Portfolioinner />} path='portfolio/portfoliodetails' />
              <Route element={<Technology/>} path='/technology' />
              <Route element={<Services />} path='/services' />
              <Route element={<Servicedetails />} path='/services/servicedetails' />
              <Route element={<Faq />} path='/faq' />
              <Route element={<Blog />} path='/blog' />
              <Route element={<Blogdetails />} path='/blog/blogdetails' />
              <Route element={<OnClickMobile />} path='/technology/onclickmobile' />
              <Route element={<Teams />} path='/teams' />

              </Routes>
          <Footer />
      </div>
      

  );
}

export default App;
