import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfigDetails } from '@config';
import sr from '@utils/sr';
import { Layout } from '@components';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: block;
    counter-reset: my-sec-counter;
  }

  p {
    margin: 1em;
  }

  .line-seperator {
    content: '';
    display: block;
    position: relative;
    top: -5px;
    width: 55%;
    height: 1px;
    margin: 20px auto 20px;
    background-color: var(--lightest-navy);
  }

  .top-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 20px;
    font-size: 1.1em;
    display: grid;
    justify-content: center;
    align-items: center;
    margin: 0px 0 25px;

    @media (max-width: 768px) {
      display: block;
    }
  }

  .numbered-heading1 {
    display: flex;
    align-items: center;
    position: relative;
    margin: 25px 0 20px;
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
      width: 100%;
      height: 1px;
      margin-left: 20px;
      background-color: var(--lightest-navy);

      @media (max-width: 600px) {
        margin-left: 10px;
      }
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  max-width: 900px;
  margin: 30px auto 30px;

  .img {
    border-radius: var(--border-radius);
  }

  .top-img {
    ${({ theme }) => theme.mixins.boxShadow};
    position: relative;
    width: 100%;

    @media (max-width: 768px) {
      margin: 35px auto 55px;
      width: 80%;
    }

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

  figcaption {
    padding: 0.5em 0em 0.5em;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 3vw, var(--fz-md));
    font-weight: 200;
  }

  .wrapper {
    position: relative;
    width: 80%;
    display: block;
    margin: auto;
  }
`;

const scanning = ({ location }) => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfigDetails());
  }, []);

  return (
    <Layout location={location}>
      <Helmet title="3D Scanning" />

      <main>
        <header>
          <h1 className="big-heading">3D Scanning</h1>
          <p className="subtitle">January -- July 2020</p>
        </header>

        <StyledAboutSection id="about" ref={revealContainer}>
          <div className="inner">
            <div className="top-content">
              <div>
                <p>
                  Creating CAD models of complex objects is often extraordinarily challenging. The
                  fabrication lab purchased two 3D scanners for high-quality captures of large and
                  small parts. The Artec Leo has a resolution of 0.2 mm and has a scannable distance
                  of up to 1.2 meters, making it perfect for large objects. For smaller items, the
                  Artec Spider has a resolution of 0.05 mm and can reproduce parts with steadfast
                  accuracy.
                </p>
              </div>
              <StyledPic>
                <div className="top-img">
                  <StaticImage
                    className="img"
                    src="../../images/projects/scanning/3.JPG"
                    width={500}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Artec Spider next to a small metal part"
                  />
                </div>
              </StyledPic>
            </div>
            <div className="line-seperator"></div>
            <div>
              <p>
                After scanning an object, post-processing occurs in Artec Studio, where multiple
                scans are combined. Any inclusions are fixed, and a final CAD model is ready for
                export.
              </p>
            </div>
            <StyledPic>
              <div className="wrapper">
                <StaticImage
                  className="img"
                  src="../../images/projects/scanning/11.JPG"
                  width={500}
                  quality={95}
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="Artec Leo right out of the box"
                />
                <figcaption>New Artec Leo</figcaption>
              </div>
            </StyledPic>
            <div>
              <p>
                Soon after purchasing the scanners, the College of Ecology approached the
                fabrication lab with a decaying whale skull to see if we could create a CAD model to
                preserve deteriorating features. Since it would be a challenge to recreate with
                standard CAD software, I decided to put the Artec Leo to the test.
              </p>
            </div>
            <StyledPic>
              <div className="wrapper">
                <StaticImage
                  className="img"
                  src="../../images/projects/scanning/2.JPG"
                  width={500}
                  quality={95}
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="Whale skull"
                />
                <figcaption>A small whale skull</figcaption>
              </div>
            </StyledPic>
            <div>
              <p>
                It took approximately one hour to take three scans of the skull. I moved the scanner
                slowly over the surface to get all the porous features. Leo's screen indicates when
                the user moves too quickly, making it a breeze to scan.
              </p>
            </div>
            <StyledPic>
              <div className="wrapper">
                <StaticImage
                  className="img"
                  src="../../images/projects/scanning/1.JPG"
                  width={500}
                  quality={95}
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="The skull next to the Artec Leo"
                />
                <figcaption>An skull next to the Leo</figcaption>
              </div>
            </StyledPic>
            <div>
              <p>
                Ecology received the final model and a small 3D print of the skull. They were
                delighted with the final product and intended to recreate a permanent model with a
                CNC foam cutter.
              </p>
            </div>
            <StyledPic>
              <div className="wrapper">
                <StaticImage
                  className="img"
                  src="../../images/projects/scanning/4.jpeg"
                  width={500}
                  quality={95}
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="The model in 3D printing software"
                />
                <figcaption>The final CAD model in the 3D printing software Cura</figcaption>
              </div>
            </StyledPic>
          </div>
        </StyledAboutSection>
      </main>
    </Layout>
  );
};
scanning.propTypes = {
  location: PropTypes.object.isRequired,
};

export default scanning;
