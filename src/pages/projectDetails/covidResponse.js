import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Layout } from '@components';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;
    counter-reset: my-sec-counter;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .numbered-heading1 {
    display: flex;
    align-items: center;
    position: relative;
    margin: 10px 0 20px;
    width: 100%;
    font-size: clamp(26px, 5vw, var(--fz-heading));
    white-space: nowrap;

    &:before {
      position: relative;
      bottom: 4px;
      counter-increment: my-sec-counter;
      content: '0' counter(my-sec-counter) '.';
      margin-right: 10px;
      color: var(--green);
      font-family: var(--font-mono);
      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));
      font-weight: 400;

      @media (max-width: 480px) {
        margin-bottom: -3px;
        margin-right: 5px;
      }
    }

    &:after {
      content: '';
      display: block;
      position: relative;
      top: -5px;
      width: 300px;
      height: 1px;
      margin-left: 20px;
      background-color: var(--lightest-navy);

      @media (max-width: 1080px) {
        width: 200px;
      }
      @media (max-width: 768px) {
        width: 100%;
      }
      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }
`;

const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 50px;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);

    &:hover,
    &:focus {
      background: transparent;
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const CovidResponse = ({ location }) => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <Layout location={location}>
      <Helmet title="Covid19" />

      <main>
        <header>
          <h1 className="big-heading">COVID-19 Response</h1>
          <p className="subtitle">March 2020 -- July 2020</p>
        </header>

        <StyledAboutSection id="about" ref={revealContainer}>
          <div className="inner">
            <StyledText>
              <div>
                <p>
                  In March 2020, COVID-19 shut down the University of Georgia (and the rest of the
                  country) for the foreseeable future. All students and non-essential employees were
                  sent home, and my fabrication team initially assumed we'd be going away as well.
                  However, after Piedmont Athens Regional Medical Center desperately reached out for
                  additional PPE supplies, we rushed to design and manufacture economical,
                  comfortable, and practical face shields.
                </p>
              </div>
            </StyledText>
            <StyledPic>
              <div className="wrapper">
                <StaticImage
                  className="img"
                  src="../../../content/featured/Covid19/swabs.png"
                  width={500}
                  quality={95}
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="face shield prototype 1"
                />
              </div>
            </StyledPic>
            <StyledText>
              <div>
                <h2 className="numbered-heading1">Requirements</h2>
                <p>
                  To begin, we defined our requirements. Due to a country-wide supply shortage, the
                  face shield material had to be easily accessible, cheap, cleanable, and
                  antimicrobial. The material also had to be compatible with our existing machinery.
                  Stakeholders said they would be wearing the face shields for extended periods, so
                  the design needed to be lightweight &#38; breathable. Finally, the shield had to
                  cover as much of the face as possible without restricting movement to protect the
                  user.
                </p>
              </div>
            </StyledText>
            <StyledPic>
              <div className="wrapper">
                <StaticImage
                  className="img"
                  src="../../images/projects/covid19/1.JPG"
                  width={500}
                  quality={95}
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="face shield prototype 1"
                />
              </div>
            </StyledPic>
            <StyledText>
              <div>
                <h2 className="numbered-heading1">Initial Design</h2>
                <p>
                  We researched existing face shield plans, and our first prototype was a modified
                  file from the open-source CAD website{' '}
                  <a href="https://www.thingiverse.com/">Thingiverse</a>. While the design was 3D
                  printable and lightweight, our stakeholders said it was extremely uncomfortable
                  due to the thin headband. Also, the 3D print's rough texture made the bands hard
                  to sanitize and easily breakable.
                </p>
              </div>
            </StyledText>
          </div>
        </StyledAboutSection>
      </main>
    </Layout>
  );
};
CovidResponse.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default CovidResponse;
