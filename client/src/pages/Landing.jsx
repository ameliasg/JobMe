import React from 'react';
import styled from "styled-components";
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
  <Wrapper>
    <nav>
      <Logo />
    </nav>
    <div className="container page">
      <div className="info">
        <h1>
          job <span>tracking</span> app
        </h1>
        <p>
        Jobify is a dynamic and user-friendly job search platform designed to connect job seekers with potential employers efficiently. It offers a wide range of features, including advanced search filters, resume-building tools, and personalized job recommendations, making it easier for users to find roles that match their skills and preferences.
        </p>
        <Link to='/register' className='btn register-link'>
          Register
        </Link>
        <Link to='/login' className='btn '>
          Login / Demo User
        </Link>
      </div>
      <img src={main} alt="job hunt" className='img main-img'/>
    </div>
  </Wrapper>
  );
};



export default Landing;