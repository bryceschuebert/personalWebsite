import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledVideo = styled.div`
  position: relative;
  text-align: center;
  overflow: hidden;
  padding-top: 94%;
  -webkit-overflow-scrolling: touch;
  margin-bottom: 2%;

  .top-vid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
  }
`;

const Video = ({ videoSrcURL, videoTitle }) => (
  <StyledVideo>
    <iframe
      className="top-vid"
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </StyledVideo>
);

Video.propTypes = {
  videoWidth: PropTypes.string,
  videoHeight: PropTypes.string,
  videoSrcURL: PropTypes.string,
  videoTitle: PropTypes.string,
};

export default Video;
