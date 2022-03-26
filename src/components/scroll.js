import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

//https://juliapottinger.com/react-gatsby-scroll-to-top/

const IconButton = styled.button`
    position: fixed;
    z-index: 2;
    padding: 26px;
    bottom: 2.8vh;
    right: 15%;
    border-radius: 55px;
    background-color: transparent;
    border: 2px solid var(--green);

    &:hover,
    &:focus {
      background-color: var(--green-tint);
      outline: none;
    }

    &:active {
      background-color: var(--blue);
    }

  @media (max-width: 1200px) {
    bottom: 2.8vh;
    right: 7%;
    background-color: var(--dark-navy);
    opacity: .75;
  }

  @media (max-width: 768px) {
    bottom: 2.8vh;
    right: 5%;
  }

  .arrow-up {
    color: var(--green);
    font-size: 25px;
    height: 28px;
    width: 28px;
  }

  }
`;

const Scroll = ({ showBelow }) => {
  const [show, setShow] = useState(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) {
        setShow(true);
      }
    } else {
      if (show) {
        setShow(false);
      }
    }
  };

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
    }
  });

  return (
    <div>
      {show && (
        <div>
          <IconButton onClick={handleClick}>
            <p className="arrow-up">&#x25B2;</p>
          </IconButton>
        </div>
      )}
    </div>
  );
};

Scroll.propTypes = {
  showBelow: PropTypes.string.isRequired,
};

export default Scroll;
