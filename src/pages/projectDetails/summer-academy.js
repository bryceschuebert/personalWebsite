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

  .top-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 20px;
    font-size: 1.1em;
    display: grid;
    justify-content: center;
    align-items: center;

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
    width: 100%;
    display: block;
    margin: auto;
  }
`;

const SummerAcademy = ({ location }) => {
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
      <Helmet title="Summer Academy" />

      <main>
        <header>
          <h1 className="big-heading">UGA Summer Academy</h1>
          <p className="subtitle">June 2018, June 2019</p>
        </header>

        <StyledAboutSection id="about" ref={revealContainer}>
          <div className="inner">
            <div className="top-content">
              <div>
                <p>
                  Every summer, the College of Engineering hosts the engineering-focused classes
                  from the UGA Summer Camp. The fabrication lab team's job was to formulate an
                  experiential curriculum around a specific engineering topic short enough to be
                  completed in a week. The curriculum was adjusted according to class level, ranging
                  from middle to high school.
                </p>
              </div>
              <StyledPic>
                <div className="top-img">
                  <StaticImage
                    className="img"
                    src="../../../src/images/projects/summercamp/7.JPG"
                    width={500}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Students affixing the bike rod to plywood"
                  />
                </div>
              </StyledPic>
            </div>
            <div>
              <h2 className="numbered-heading1">Pumps</h2>
              <p>
                There were two primary subjects covered: pumps and electricity. Each topic was
                covered for half of each day, and by the week's end, the concepts and projects
                merged.
              </p>
              <p>
                The pump section covered the essential inner workings (volute casing, flow rate,
                pumps don't suck liquids, etc.), and then groups of students had to develop, 3D
                print, and assemble their pumps. To design the pump body, each group followed along
                as we taught the basics of AutoCAD, and within two hours, the pump drawings were 3D
                models, ready to print. Assembly was the most challenging part since creating a
                working seal with 3D parts is nearly impossible. While rubber gaskets were used, we
                didn't anticipate that the 3D prints would &apos;sweat&apos; water under pressure.
                Each part was sprayed with a sealant that worked well enough to fix the sweating.
              </p>
            </div>
            <div>
              <h2 className="numbered-heading1">Electricity</h2>
              <p>
                With electricity being a somewhat abstract concept, we designed a simple project
                that demonstrated electromagnetism, voltage, resistance, and current by letting
                students construct a small motor with magnets, two AA batteries, and a nail with
                coiled wire. By applying a voltage to the nail, its magnetic field spun the eight
                magnets on a 3D-printed octagon.
              </p>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../../src/images/projects/summercamp/9.JPG"
                    width={500}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="A student soldering"
                  />
                  <figcaption>A student safely soldering wires to the battery casing</figcaption>
                </div>
              </StyledPic>
              <p>
                This project was by the student's favorite since they were given the basics and then
                allowed to customize their motor as much as possible. For example, one student
                created a pinwheel projection that appeared animated as the attached wheel spun.
              </p>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../../src/images/projects/summercamp/4.jpg"
                    width={500}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="A student's motor with pinwheel attacged'"
                  />
                  <figcaption>A student's motor with the pinwheel disk spinning</figcaption>
                </div>
              </StyledPic>
            </div>
            <div>
              <h2 className="numbered-heading1">The Final Competition</h2>
              <p>
                Bringing the concepts together, the final project illustrated the Conversation of
                Energy of both mechanical to hydraulic and electrical to hydraulic energy. To do so,
                the section was divided into two groups with the same objective: pump water up a
                2-meter hose into a bucket. Whichever team filled the 5-gallon bucket first (and
                subsequently drenched the instructor underneath) won the competition.
              </p>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../../src/images/projects/summercamp/6.JPG"
                    width={600}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Water bucket filling from hose"
                  />
                  <figcaption>A 5-gallon bucket being filled up</figcaption>
                </div>
              </StyledPic>
              <p>
                Both groups constructed a drive train using a rod fit into bearings that they
                screwed into a plywood base. One group focused on electrical to mechanical
                conversion and calculated the number and size of batteries necessary to power an
                electric motor attached directly to a 3D printed pump.
              </p>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../../src/images/projects/summercamp/8.JPG"
                    width={600}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="A student using a drill"
                  />
                  <figcaption>A student working on the drivetrain platform</figcaption>
                </div>
              </StyledPic>
            </div>
          </div>
        </StyledAboutSection>
        <Scroll showBelow="300" />
      </main>
    </Layout>
  );
};
SummerAcademy.propTypes = {
  location: PropTypes.object.isRequired,
};

export default SummerAcademy;
