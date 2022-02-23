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
    grid-gap: 20px;
    counter-reset: my-sec-counter;

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
  margin: 30px auto 50px;

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

const Umbrella = ({ location }) => {
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
      <Helmet title="umBRELLA" />

      <main>
        <header>
          <h1 className="big-heading">umBRELLA</h1>
          <p className="subtitle">March -- June 2021</p>
        </header>

        <StyledAboutSection id="about" ref={revealContainer}>
          <div className="inner">
            <StyledText>
              <div>
                <p>
                  Last year, my Design Methodologies course focused on the holistic design and
                  system engineering process. My professor broke the class into 4-person groups to
                  practice the ideation phase and instructed us to redesign an everyday item. We
                  decided on an umbrella since there has been little variation in its' design in the
                  past century. While the project ended after the ideation phase, I decided to
                  create a CAD model of our design and practice using Keyshot to make realistic
                  product representations.
                </p>
              </div>
              <div>
                <h2 className="numbered-heading1">Observation</h2>
                <p>
                  With limited access to stakeholders, we decided to use the Post-It note process to
                  gather requirements. Every classmate received 5 Post-It notes and was instructed
                  to write or sketch anything they wished an umbrella could do.
                </p>
              </div>
            </StyledText>
            <StyledPic>
              <div className="wrapper">
                <StaticImage
                  className="img"
                  src="../../images/projects/umbrella/1.JPG"
                  width={500}
                  quality={95}
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="Sticky notes sorted into groups"
                />
              </div>
            </StyledPic>
            <StyledText>
              <div>
                <p>
                  After collecting the notes, we distilled the most common needs into functional and
                  non-functional requirements. Many of the notes indicated a demand for a more
                  intelligent, portable umbrella that could keep the user not only dry but safe.
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
                </div>
              </StyledPic>
            </StyledText>
            <div></div>
            <StyledText>
              <div>
                <h2 className="numbered-heading1">Ideation</h2>
                <p>
                  Since a weaponized umbrella is a bad idea for many reasons, we brainstormed
                  designs that focused on providing a safer, preventative experience. Most of the
                  notes suggested that users wanted an umbrella that provided illumination. Since
                  that would require energy, we considered further possibilities to take advantage
                  of the power. Many of the notes suggested including GPS, phone calls, and weather
                  forecasts, but implementing these required some form of input from the user. This
                  input was tough to design since portability was a top functional requirement.
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
                  </div>
                </StyledPic>
              </div>
              <div>
                <p>
                  Taking inspiration from the original iPod, I sketched a glass scroll wheel with a
                  circular screen underneath that would sit on top of the umbrella handle. To
                  prevent unwanted feedback, the wheel would not be touch-sensitive; instead, users
                  could use their thumb to move the glass wheel left or right and press down for
                  input. Users could easily see incoming notifications from their phones with just
                  one hand.
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
                  model. I imported the model components into Keyshot 10 and added color, texture,
                  and lighting to create a realistic visual. I used Illustrator to create a simple
                  scroll wheel app illustration and added emissive illumination to provide an OLED
                  effect.
                </p>
              </div>
            </StyledText>
            <div></div>
            <StyledPic>
              <div className="wrapper">
                <StaticImage
                  className="img"
                  src="../../images/projects/umbrella/7.JPG"
                  width={500}
                  quality={95}
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="Procreate sketch of the scroll wheel"
                />
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
