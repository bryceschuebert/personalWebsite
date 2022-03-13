import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfigDetails } from '@config';
import sr from '@utils/sr';
import { Layout } from '@components';
import { usePrefersReducedMotion } from '@hooks';
import Scroll from '../../components/scroll';

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
  max-width: 700px;
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

const Creature = ({ location }) => {
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
      <Helmet title="Creature" />

      <main>
        <header>
          <h1 className="big-heading">Curiosity Cabinet</h1>
          <p className="subtitle">June -- July 2021</p>
        </header>

        <StyledAboutSection id="about" ref={revealContainer}>
          <div className="inner">
            <div className="top-content">
              <div>
                <p>
                  Creature Comforts, an Athens-based brewery, invests heavily in the surrounding
                  community, especially <a href="https://getcurious.com/">local artists</a>. They
                  have restocked Free Little Libraries across the city to provide free access to
                  books. Last year, Creature decided to add its own free library and called for
                  design submissions from local artists.
                </p>
              </div>
              <StyledPic>
                <div className="top-img">
                  <StaticImage
                    className="img"
                    src="../../images/projects/creature/1.jpg"
                    width={500}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Man looking at Bryce's submission"
                  />
                </div>
              </StyledPic>
            </div>
            <div className="line-seperator"></div>
            <div>
              <p>
                Artists could either submit templates or original designs, and the winner would win
                $350 for a template design or $550 for original designs. I date an extraordinarily
                talented artist, <a href="https://niqueroth.com/">Dominique Roth,</a> so it sounded
                like a fun project for the two of us to do together. She did all the exterior
                artwork, and I designed the library.
              </p>
            </div>
            <StyledPic>
              <div className="wrapper">
                <StaticImage
                  className="img"
                  src="../../images/projects/creature/2.PNG"
                  width={500}
                  quality={95}
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="Full view of the Creature model"
                />
                <figcaption>Full view of the Creature model</figcaption>
              </div>
            </StyledPic>
            <div>
              <p>
                While I could've used Siemens NX to create the design, it was simple enough to CAD
                in <a href="https://www.shapr3d.com/">Shapr3D</a>. I immediately decided that a
                little Creature Comforts would be a fun challenge to turn into a working library.
                Instead of hinged doors, I created two functional garage doors big enough to fit 20
                books. The doors would use ball bearings on 3D-printed tracks. The doors would be
                clear acrylic, cut to size with the{' '}
                <a href="https://www.bosslaser.com/laser-machines/boss-ls-3655">Boss Laser</a>. The
                exterior would be two sheets of 25 mm thick sanded pine wood, and after getting it
                down to size with a SawStop table saw, I would use the{' '}
                <a href="https://www.shopbottools.com/products/max">ShopBot Desktop Max</a>, a CNC
                router, to do all of the intricate cutting.
              </p>
            </div>

            <StyledPic>
              <div className="wrapper">
                <StaticImage
                  className="img"
                  src="../../images/projects/creature/3.JPG"
                  width={500}
                  quality={95}
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="Bryce in front of blueprint"
                />
                <figcaption>Bryce in front of the final submission: Little Creature</figcaption>
              </div>
            </StyledPic>
            <div>
              <p>
                Our design made it to the final round and was judged by the community and a panel of
                Creature employees. It was an honor to be judged next to such incredible entries!
              </p>
            </div>
          </div>
        </StyledAboutSection>
      </main>
      <Scroll showBelow="300" />
    </Layout>
  );
};
Creature.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Creature;
