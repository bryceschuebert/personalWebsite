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

  .top-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 20px;
    font-size: 1.1em;
    display: grid;
    justify-content: center;
    align-items: center;
    margin: 0px 0 20px;

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

const Umbrella = ({ location }) => {
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
      <Helmet title="umBRELLA" />

      <main>
        <header>
          <h1 className="big-heading">umBRELLA</h1>
          <p className="subtitle">March -- June 2021</p>
        </header>

        <StyledAboutSection id="about" ref={revealContainer}>
          <div className="inner">
            <div className="top-content">
              <div>
                <p>
                  Last year, my Design Methodologies course focused on the holistic design and
                  system engineering process. The professor broke the class into 4-person groups to
                  practice the ideation phase and instructed us to redesign an everyday item. We
                  decided on an umbrella since there has been little variation in its' design in the
                  past century. While the project ended after ideation, I created a CAD model of our
                  design and practiced making realistic product representations using Keyshot.
                </p>
              </div>
              <StyledPic>
                <div className="top-img">
                  <StaticImage
                    className="img"
                    src="../../images/projects/umbrella/1.JPG"
                    width={800}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Sticky notes sorted into groups"
                  />
                </div>
              </StyledPic>
            </div>
            <div>
              <h2 className="numbered-heading1">Observation</h2>
              <p>
                With limited access to stakeholders, we decided to use the Post-It note process to
                gather requirements. Every classmate received 5 Post-It notes and was instructed to
                write or sketch anything they wished an umbrella could do.
              </p>
            </div>
            <div>
              <p>
                After collecting the notes, we distilled the most common needs into functional and
                non-functional requirements. Many of the notes indicated a demand for a more
                intelligent, portable umbrella that could keep the user dry AND safe.
              </p>
            </div>
            <div></div>
            <StyledPic>
              <div className="wrapper">
                <StaticImage
                  className="img"
                  src="../../images/projects/umbrella/2.JPG"
                  width={500}
                  quality={95}
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="Sticky notes with observations"
                />
                <figcaption>Sticky notes with observations</figcaption>
              </div>
            </StyledPic>
            <div></div>
            <div>
              <h2 className="numbered-heading1">Ideation</h2>
              <p>
                Since a weaponized umbrella is a bad idea for several reasons, we brainstormed
                designs that focused on providing a safer, preventative experience. Most of the
                notes suggested that users wanted an umbrella that provided illumination. Since that
                would require energy, we considered potential possibilities to take advantage of the
                power consumption. Many of the notes suggested including GPS, phone calls, and
                weather forecasts, but implementing these required some form of input from the user.
                We had to balance this input with portability, a top functional requirement.
              </p>
            </div>
            <div>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../images/projects/umbrella/3.JPG"
                    width={500}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Functional ideas"
                  />
                  <figcaption>Functional ideas</figcaption>
                </div>
              </StyledPic>
            </div>
            <div>
              <p>
                Taking inspiration from the original iPod, I sketched a glass scroll wheel with a
                circular screen underneath that would sit on top of the umbrella handle. To prevent
                unwanted feedback, the wheel would not be touch-sensitive; instead, users could use
                their thumb to scroll the glass wheel left or right and press down for selection.
                Users could now easily see incoming notifications mirrored from their phones with
                just one hand.
              </p>
            </div>
            <div>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../images/projects/umbrella/4.JPG"
                    width={500}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Procreate sketch of the scroll wheel"
                  />
                  <figcaption>Procreate sketch of the scroll wheel</figcaption>
                </div>
              </StyledPic>
            </div>
            <div>
              <p>
                Our final design remained portable and included the scroll wheel, an LED light
                around the brim, a flashlight in the base.
              </p>
            </div>
            <div>
              <h2 className="numbered-heading1">Model Representation</h2>
              <p>
                With the project complete, I decided to try out Sharpr3D to create a CAD umbrella
                model. I imported the model components into Keyshot 10 and added color, texture, and
                lighting to create a realistic visual. I used Illustrator to create a simple scroll
                wheel app illustration and added emissive illumination to provide an OLED effect.
                While I had to switch gears to focus on thesis writing, I plan to go back and create
                a short animation in the new Keyshot 11.
              </p>
            </div>
            <div></div>
            <StyledPic>
              <div className="wrapper">
                <StaticImage
                  className="img"
                  src="../../images/projects/umbrella/7.JPG"
                  width={500}
                  quality={95}
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="Keyshot 10 Rendering of the scroll wheel"
                />
                <figcaption>Keyshot 10 Rendering of the scroll wheel</figcaption>
              </div>
            </StyledPic>
          </div>
        </StyledAboutSection>
      </main>
    </Layout>
  );
};
Umbrella.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default Umbrella;
