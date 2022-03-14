import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdExpandLess } from '@react-icons/all-files/md/MdExpandLess';
import PropTypes from 'prop-types';

//https://juliapottinger.com/react-gatsby-scroll-to-top/

const IconButton = styled.button`
    position: fixed;
    z-index: 2;
    padding: 15px;
    bottom: 2.8vh;
    right: 18%;
    border-radius: 40px;
    background-color: transparent;
    border: 2px solid var(--green);
    transition: var(--transition);
    
    &:hover,
    &:focus,
    &:active {
      background-color: var(--green-tint);
      outline: none;
    }

  @media (max-width: 1200px) {
    bottom: 2.8vh;
    right: 7%;
    background-color: var(--dark-navy);
    opacity: .8;
  }

  @media (max-width: 768px) {
    bottom: 2.8vh;
    right: 5%;
    background-color: var(--dark-navy);
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
            <MdExpandLess color="var(--green)" size="40px" />
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
