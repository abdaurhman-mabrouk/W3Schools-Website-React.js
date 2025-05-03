import React from 'react';
import './MainNav.css';

function MainNav() {
  return (
    <nav id="mainNav">
      <div className="main-nav-left-wrapper-container">
        <a
          id="w3Logo"
          href="."
          className="main-nav-link w3-bar-item w3-button w3-hover-none w3-left ga-top ga-top-w3home"
          title="Home"
          style={{ width: '75px' }}
          ariaLabel="Home link"
          data--h-bstatus="0OBSERVED">
          <i
            className="fa fa-logo ws-hover-text-green"
            style={{
              position: 'relative',
              zIndex: '1',
              color: '#04aa6d',
              fontSize: '36px !important',
            }}
            aria-hidden="true"
            data--h-bstatus="0OBSERVED"></i>
        </a>

        <a href="." className="main-nav-link">
          Tutorials
          <i
            className="fa fa-caret-down"
            style={{ fontSize: '15px', display: 'inline', color: '#fff' }}
            ariaHidden="true"
            data--h-bstatus="0OBSERVED"></i>
        </a>

        <a href="." className="main-nav-link">
          Exercises
          <i
            className="fa fa-caret-down"
            style={{ fontSize: '15px', display: 'inline', color: '#fff' }}
            ariaHidden="true"
            data--h-bstatus="0OBSERVED"></i>
        </a>

        <a href="." className="main-nav-link">
          Certificates
          <i
            className="fa fa-caret-down"
            style={{ fontSize: '15px', display: 'inline', color: '#fff' }}
            ariaHidden="true"
            data--h-bstatus="0OBSERVED"></i>
        </a>

        <a href="." className="main-nav-link">
          Services
          <i
            className="fa fa-caret-down"
            style={{ fontSize: '15px', display: 'inline', color: '#fff' }}
            ariaHidden="true"
            data--h-bstatus="0OBSERVED"></i>
        </a>

        <input type="text" id="mainNavSearchInput" placeholder="Search..." />

        <button type="button">
          <i data--h-bstatus="0OBSERVED"></i>
        </button>
      </div>

      <div className="main-nav-right-wrapper-container">
        <a href="." className="main-nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="36"
            viewBox="0 0 12 16"
            fill="none"
            ariaHidden="true"
            data--h-bstatus="0OBSERVED">
            <path
              d="M6.65723 6.24707C6.76704 5.91764 7.233 5.91765 7.34281 6.24707L7.98828 8.1835C8.276 9.04666 8.95332 9.72399 9.81648 10.0117L11.7529 10.6572C12.0824 10.767 12.0824 11.233 11.7529 11.3428L9.81649 11.9883C8.95332 12.276 8.27599 12.9533 7.98828 13.8165L7.34281 15.7529C7.233 16.0823 6.76704 16.0823 6.65723 15.7529L6.01173 13.8165C5.72401 12.9533 5.04669 12.276 4.18353 11.9883L2.24707 11.3428C1.91764 11.233 1.91764 10.767 2.24707 10.6572L4.18353 10.0117C5.04669 9.72399 5.72401 9.04667 6.01173 8.18352L6.65723 6.24707Z"
              fill="#9763f6"
              data--h-bstatus="0OBSERVED"></path>
            <path
              d="M2.79434 1.14824C2.86023 0.950586 3.1398 0.950587 3.20569 1.14824L3.59297 2.3101C3.7656 2.828 4.172 3.2344 4.6899 3.40703L5.85177 3.79432C6.04942 3.86021 6.04942 4.13978 5.85177 4.20567L4.6899 4.59296C4.172 4.76559 3.7656 5.17199 3.59297 5.68989L3.20569 6.85176C3.13981 7.04941 2.86023 7.04942 2.79434 6.85176L2.40704 5.68988C2.23441 5.17198 1.82801 4.76559 1.31012 4.59296L0.148241 4.20567C-0.0494137 4.13978 -0.0494138 3.86021 0.148241 3.79432L1.31012 3.40703C1.82802 3.2344 2.23441 2.82801 2.40704 2.31011L2.79434 1.14824Z"
              fill="#9763f6"
              data--h-bstatus="0OBSERVED"></path>
            <path
              d="M9.8629 0.0988265C9.90682 -0.032943 10.0932 -0.0329419 10.1371 0.098828L10.3953 0.873401C10.5104 1.21867 10.7813 1.4896 11.1266 1.60469L11.9012 1.86288C12.0329 1.9068 12.0329 2.09319 11.9012 2.13711L11.1266 2.39531C10.7813 2.51039 10.5104 2.78133 10.3953 3.12659L10.1371 3.90117C10.0932 4.03294 9.90682 4.03294 9.8629 3.90117L9.6047 3.12659C9.48961 2.78132 9.21868 2.5104 8.87342 2.39531L8.09883 2.13711C7.96706 2.09319 7.96706 1.9068 8.09883 1.86288L8.87342 1.60469C9.21868 1.4896 9.48961 1.21867 9.6047 0.873408L9.8629 0.0988265Z"
              fill="#9763f6"
              data--h-bstatus="0OBSERVED"></path>
          </svg>
          Plus
        </a>

        <a href="." className="main-nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 640 512"
            ariaHidden="true"
            data--h-bstatus="0OBSERVED">
            <path
              d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
              fill="#9763f6"
              data--h-bstatus="0OBSERVED"></path>
          </svg>
          Spaces{' '}
        </a>

        <a href="." className="main-nav-link">
          <svg
            stroke="#9763f6"
            fill="#9763f6"
            strokeWidth="0"
            viewBox="0 0 640 512"
            focusable="false"
            className="chakra-icon css-9gdywz"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            data--h-bstatus="0OBSERVED">
            <path
              d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"
              data--h-bstatus="0OBSERVED"></path>
          </svg>
          For Techers
        </a>

        <a href="." className="main-nav-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 576 512"
            ariaHidden="true"
            data--h-bstatus="0OBSERVED">
            <path
              d="M24 0C10.7 0 0 10.7 0 24S10.7 48 24 48H69.5c3.8 0 7.1 2.7 7.9 6.5l51.6 271c6.5 34 36.2 58.5 70.7 58.5H488c13.3 0 24-10.7 24-24s-10.7-24-24-24H199.7c-11.5 0-21.4-8.2-23.6-19.5L170.7 288H459.2c32.6 0 61.1-21.8 69.5-53.3l41-152.3C576.6 57 557.4 32 531.1 32h-411C111 12.8 91.6 0 69.5 0H24zM131.1 80H520.7L482.4 222.2c-2.8 10.5-12.3 17.8-23.2 17.8H161.6L131.1 80zM176 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm336-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"
              fill="#9763f6"
              data--h-bstatus="0OBSERVED"></path>
          </svg>
          Get Certified
        </a>

        <a>
          <span>
            <img
              src="."
              // alt="user_profile"
              style={{
                width: '35px',
                height: '35px',
                border: '1px solid #000',
                borderRadius: '100%',
              }}
            />
          </span>
        </a>
      </div>
    </nav>
  );
}

export default MainNav;
