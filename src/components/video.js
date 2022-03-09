import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ videoWidth, videoHeight, videoSrcURL, videoTitle }) => (
  <div>
    <iframe
      width={videoWidth}
      height={videoHeight}
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
);

Video.propTypes = {
  videoWidth: PropTypes.string,
  videoHeight: PropTypes.string,
  videoSrcURL: PropTypes.string,
  videoTitle: PropTypes.string,
};

export default Video;
