/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import './MainFooter.css';
import footerBG from '../../../assets/images/bg_sky_darker.gif';

function MainFooter() {
  return (
    <footer id="mainFooter">
      <div className="top-line-footer-links-conatiner">
        <a
          href="//www.w3schools.com"
          className="ga-bottom"
          aria-label="W3Schools.com"
          alt="W3Schools.com"
          data--h-bstatus="0OBSERVED">
          <i className="fa fa-logo" data--h-bstatus="0OBSERVED"></i>
        </a>

        <Link to="/plus" className="top-line-footer-link">
          PLUS
        </Link>

        <Link to="/spaces" className="top-line-footer-link">
          SPACES
        </Link>

        <Link to="/get_certified" className="top-line-footer-link">
          GET CERTIFIED
        </Link>

        <Link to="/for_techers" className="top-line-footer-link">
          FOR TEACHERS
        </Link>

        <Link to="/for_business" className="top-line-footer-link">
          FOR BUSINESS
        </Link>

        <Link to="/contact_us" className="top-line-footer-link">
          CONTACT US
        </Link>
      </div>

      <div className="middle-line-footer-links-container">
        <span className="footer-middle-line-column">
          <h6>Top Tutorials</h6>
          <Link to="/html">HTML Tutorial</Link>
          <Link to="/css">CSS Tutorial</Link>
          <Link to="/javascript">JavaScript Tutorial</Link>
          <Link to="/how_to">How To Tutorial</Link>
          <Link to="/sql">SQL Tutorial</Link>
          <Link to="/python">Python Tutorial</Link>
          <Link to="/w3.css">W3.CSS Tutorial</Link>
          <Link to="/bootstrap">Bootstrap Tutorial</Link>
          <Link to="/php">PHP Tutorial</Link>
          <Link to="/java">Java Tutorial</Link>
          <Link to="/c++">C++ Tutorial</Link>
          <Link to="/jquery">Jquery Tutorial</Link>
        </span>

        <span className="footer-middle-line-column">
          <h6>Top References</h6>
          <Link to="/references/html">HTML References</Link>
          <Link to="/references/css">CSS References</Link>
          <Link to="/references/javascript">JavaScript References</Link>
          <Link to="/references/how_to">How To References</Link>
          <Link to="/references/sql">SQL References</Link>
          <Link to="/references/python">Python References</Link>
          <Link to="/references/w3.css">W3.CSS References</Link>
          <Link to="/references/bootstrap">Bootstrap References</Link>
          <Link to="/references/php">PHP References</Link>
          <Link to="/references/java">Java References</Link>
          <Link to="/references/c++">C++ References</Link>
          <Link to="/references/jquery">Jquery References</Link>
        </span>

        <span className="footer-middle-line-column">
          <h6>Top Examples</h6>
          <Link to="/example/html">HTML Example</Link>
          <Link to="/example/css">CSS Example</Link>
          <Link to="/example/javascript">JavaScript Example</Link>
          <Link to="/example/how_to">How To Example</Link>
          <Link to="/example/sql">SQL Example</Link>
          <Link to="/example/python">Python Example</Link>
          <Link to="/example/w3.css">W3.CSS Example</Link>
          <Link to="/example/bootstrap">Bootstrap Example</Link>
          <Link to="/example/php">PHP Example</Link>
          <Link to="/example/java">Java Example</Link>
          <Link to="/example/c++">C++ Example</Link>
          <Link to="/example/jquery">Jquery Example</Link>
        </span>

        <span className="footer-middle-line-column">
          <h6>Get Certified</h6>
          <Link to="/certificate/html">HTML Certificate</Link>
          <Link to="/certificate/css">CSS Certificate</Link>
          <Link to="/certificate/javascript">JavaScript Certificate</Link>
          <Link to="/certificate/how_to">How To Certificate</Link>
          <Link to="/certificate/sql">SQL Certificate</Link>
          <Link to="/certificate/python">Python Certificate</Link>
          <Link to="/certificate/w3.css">W3.CSS Certificate</Link>
          <Link to="/certificate/bootstrap">Bootstrap Certificate</Link>
          <Link to="/certificate/php">PHP Certificate</Link>
          <Link to="/certificate/java">Java Certificate</Link>
          <Link to="/certificate/c++">C++ Certificate</Link>
          <Link to="/certificate/jquery">Jquery Certificate</Link>
        </span>
      </div>
    </footer>
  );
}

export default MainFooter;
