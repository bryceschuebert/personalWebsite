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

  ul.printer-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 1em;
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

const Printing = ({ location }) => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfigDetails());
  }, []);

  const printers = [
    'Lulzbot Taz6',
    'Makerbot Replicator',
    'Lulzbot Workhorse',
    'Dremel 3D45',
    'FF Creator Pro',
    'Creality',
    'MF Mark II',
    'Fortus 450mc',
    'uPrint SE',
    'Formlabs 3',
    'DMP Flex 350',
    'Formlabs 3L',
  ];

  return (
    <Layout location={location}>
      <Helmet title="3D Printing" />

      <main>
        <header>
          <h1 className="big-heading">3D Printing</h1>
          <p className="subtitle">May 2017 - Current</p>
        </header>

        <StyledAboutSection id="about" ref={revealContainer}>
          <div className="inner">
            <div className="top-content">
              <div>
                <p>
                  When I started working at the Fabrication Lab, there were just two Taz6 3D
                  printers. Part of my job description was to{' '}
                  <q>set up, manage, and instruct students on how to use 3D printers</q>, and with
                  no prior experience, I had to quickly learn everything about the 3D printing
                  process. Fortunately, students broke the Taz's every other day, so there were
                  plenty of learning opportunities. Over <b>sixteen</b> various 3D printers were
                  running full-time by the time I left. Now, as a graduate assistant, I am still
                  maintaining four printers. Here is a full list of printers I've worked with:
                </p>
                <ul className="printer-list">
                  {printers && printers.map((skill, i) => <li key={i}>{skill}</li>)}
                </ul>
              </div>
              <StyledPic>
                <div className="top-img">
                  <StaticImage
                    className="img"
                    src="../../../src/images/projects/printing/1.JPG"
                    width={500}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Metal prints on print bed"
                  />
                </div>
              </StyledPic>
            </div>
            <div>
              <h2 className="numbered-heading1">Direct Metal Laser Sintering</h2>
              <p>
                There were two primary subjects covered: pumps and electricity. Each topic was
                covered for half of each day, and by the week's end, the concepts and projects
                merged.
              </p>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../../src/images/projects/printing/4.JPG"
                    width={500}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="A student soldering"
                  />
                  <figcaption>A student safely soldering wires to the battery casing</figcaption>
                </div>
              </StyledPic>
            </div>
            <div>
              <h2 className="numbered-heading1">Stereolithography</h2>
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
                    src="../../../src/images/projects/printing/1.JPG"
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
                    src="../../../src/images/projects/printing/1.JPG"
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
              <h2 className="numbered-heading1">Fused Deposition Modeling</h2>
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
                    src="../../../src/images/projects/printing/1.JPG"
                    width={600}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Water bucket filling from hose"
                  />
                  <figcaption>The 5-gallon contraption being tested before use</figcaption>
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
                    src="../../../src/images/projects/printing/1.JPG"
                    width={600}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="A student using a drill"
                  />
                  <figcaption>A student working on the drivetrain platform</figcaption>
                </div>
              </StyledPic>
              <p>
                The other group devised a method of converting a bike's rotational energy into
                hydraulic energy via a 3D-printed wheel attached to the drive train rod. This
                objective was more difficult than intended. The students (and instructors) struggled
                to fabricate a platform that kept the bike wheel steady and firmly placed onto the
                wheel.
              </p>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../../src/images/projects/sprinting/1.JPG"
                    width={600}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="A student positioning a 3D printed wheel behind a bike"
                  />
                  <figcaption>
                    A student calculating the necessary distance between wheels
                  </figcaption>
                </div>
              </StyledPic>
              <p>
                With too much pressure, the wheel melted from friction after a few revolutions, and
                too little pressure wouldn't spin the 3D print at all. Eventually, the students
                switched to a grooved wooden wheel, and with both teams ready, the final half-day
                focused on the competition.
              </p>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../../src/images/projects/printing/1.JPG"
                    width={600}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Bike spinning on drivetrain"
                  />
                  <figcaption>
                    Students using a motor to calculate the power output of the bike
                  </figcaption>
                </div>
              </StyledPic>
              <p>
                Comparing the power output of both, most expected the battery team to win. However,
                one of the students went insanely hard on the bike, almost winning the competition
                and nearly passing out. Each week, we tinkered with the curriculum based on student
                feedback, and overall, it was a great learning experience for all involved.
              </p>
            </div>
          </div>
        </StyledAboutSection>
      </main>
    </Layout>
  );
};
Printing.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Printing;
