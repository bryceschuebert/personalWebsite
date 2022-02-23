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
    grid-gap: 30px;

    @media (max-width: 768px) {
      display: block;
    }
  }


    &:before {
      position: relative;
      bottom: 4px;
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

const StyledPic = styled.div`
  position: relative;
  max-width: 300px;
  margin: 30px auto 30px;

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

const Creature = ({ location }) => {
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
      <Helmet title="Creature" />

      <main>
        <header>
          <h1 className="big-heading">Curiosity Cabinet</h1>
          <p className="subtitle">June -- July 2021</p>
        </header>

        <StyledAboutSection id="about" ref={revealContainer}>
          <div className="inner">
            <div>
              <p>
                Creature Comforts, an Athens-based brewery, invests heavily in the surrounding
                community, especially <a href="https://getcurious.com/">local artists</a>. They have
                restocked Free Little Libraries across the city to provide free access to books.
                Last year, Creature decided to add its own free library and called for design
                submissions from local artists.
              </p>
            </div>
            <StyledPic>
              <div className="wrapper">
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
                  alt="Orthoview of the Creature model"
                />
              </div>
            </StyledPic>
            <div>
              <p>
                While I could've used Siemens NX to create the design, it was simple enough to CAD
                in <a href="https://www.shapr3d.com/">Shapr3D</a>. I immediately decided that a
                little Creature Comforts would be a fun challenge to turn into a working library.
                Instead of hinged doors, I created two functional garage doors big enough to fit 20
                books. The doors would use ball bearings on 3D-printed tracks. The door would be
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
              </div>
            </StyledPic>
            <div>
              <p>
                Our design made it to the final competition and was judged by the community and a
                panel of Creature employees. While we didn't win, working with other local artists
                was really fun!
              </p>
            </div>
          </div>
        </StyledAboutSection>
      </main>
    </Layout>
  );
};
Creature.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default Creature;
