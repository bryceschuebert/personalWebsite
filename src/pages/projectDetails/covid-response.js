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
    width: 100%;
    display: block;
    margin: auto;
  }
`;

const CovidResponse = ({ location }) => {
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
      <Helmet title="COVID-19" />

      <main>
        <Scroll showBelow="250" />
        <header>
          <h1 className="big-heading">COVID-19 Response</h1>
          <p className="subtitle">March -- July 2020</p>
        </header>

        <StyledAboutSection id="about" ref={revealContainer}>
          <div className="inner">
            <div className="top-content">
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
              <StyledPic>
                <div className="top-img">
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
            </div>
            <div>
              <h2 className="numbered-heading1">Requirements</h2>
              <p>
                To begin, we defined our requirements. Due to a country-wide supply shortage, the
                face shield material had to be easily accessible, cheap, cleanable, and
                antimicrobial. The material also had to be manufacturable with our existing
                machinery. Stakeholders said they would be wearing the face shields for extended
                periods, so the design needed to be lightweight &#38; breathable. Finally, the
                shield had to cover as much of the face as possible without restricting movement to
                fully protect the user.
              </p>
            </div>
            <div>
              <h2 className="numbered-heading1">Initial Design</h2>
              <p>
                We researched existing face shield plans, and our first prototype was a modified
                file from the open-source CAD website{' '}
                <a href="https://www.thingiverse.com/">Thingiverse</a>. The shield was 2 mm clear
                acrylic that was easy to laser cut without creating dangerous fumes, and the straps
                were hand-cut velcro. While the design was 3D printable and lightweight, our
                stakeholders said it was extremely uncomfortable due to the thin headband and velcro
                straps. Also, FDM 3D prints are rough and anisotropic, making the bands hard to
                sanitize and easily breakable. Lastly, the shield material was too rigid and
                obstructed the user from moving their head around.
              </p>
            </div>
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
                <figcaption>Face shield - 1st prototype</figcaption>
              </div>
            </StyledPic>
            <div>
              <h2 className="numbered-heading1">Final Design</h2>
              <p>
                Building on stakeholder feedback, I created a new headband in Inventor that was
                thick enough to be virtually unbreakable yet comfortable. It could also fit a
                replaceable foam pad for further comfort and cleanability, making 3D printing a
                viable option again. For scalability, the headband design could be stacked 12 high
                with a small amount of support in-between, and 2 stacks could be nested onto one 3D
                print bed. We could print 24 headbands every 12 hours on just one printer on the
                fastest setting. We used ABS material for maximum avaliability, rigidity, and
                cleanability.
              </p>
            </div>
            <div>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../images/projects/covid19/2.JPG"
                    width={500}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="3D printed headband stacks"
                  />
                  <figcaption>3D printed headband stacks</figcaption>
                </div>
              </StyledPic>
            </div>
            <div>
              <p>
                The straps and shields were redesigned to be nestable and laser cut to avoid a
                production bottleneck. Instead of using velcro, the headband had multiple hooks on
                either side that a flexible rubber strap could fasten onto. After I manually
                adjusted the laser cutter for the thickness of the rubber, we could cut 80 straps
                from one rubber sheet in under 30 minutes. Instead of using 2 mm acrylic sheets, we
                used cheaper 1 mm sheets for increased flexibility. I modified the shield to have
                45-degree cuts on either side, so users could move their heads side-to-side.
              </p>
            </div>
            <div>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../images/projects/covid19/3.JPG"
                    width={495}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Finished Face Shield"
                  />
                  <figcaption>Finalized Face Shield Design</figcaption>
                </div>
              </StyledPic>
            </div>
            <div>
              <p>
                While we had to make minor adjustments after initial feedback, our stakeholders were
                extremely satisfied with the design. After the Red &#38; Black newspaper published
                an{' '}
                <a href="https://www.redandblack.com/athensnews/uga-college-of-engineering-produces-face-shields-for-health-care-workers/article_b08a3f64-755b-11ea-9f6e-2399aefa6819.html#:~:text=As%20of%20Monday%2C%20the%20College%20of%20Engineering%20produced%20about%2050%20face%20shields%20and%20hope%20to%20have%20about%20500%20by%20the%20end%20of%20the%20week%20for%20the%20hospital%2C%20which%20is%20more%20than%20the%20hospital%E2%80%99s%20request%2C%20said%20Bryce%20Schuebert%2C%20the%20student%20project%20manager.">
                  article
                </a>{' '}
                about the face shields, we received requests from across the state for shields,
                swabs, and respirators.
              </p>
            </div>
            <div>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../images/projects/covid19/5.JPG"
                    width={495}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Bryce holding 3D printed swabs"
                  />
                  <figcaption>Bryce holding 3D printed swabs</figcaption>
                </div>
              </StyledPic>
            </div>
          </div>
        </StyledAboutSection>
      </main>
    </Layout>
  );
};
CovidResponse.propTypes = {
  location: PropTypes.object.isRequired,
};

export default CovidResponse;
