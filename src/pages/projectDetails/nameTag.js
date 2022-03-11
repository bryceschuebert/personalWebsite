import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfigDetails } from '@config';
import sr from '@utils/sr';
import { Layout } from '@components';
import { usePrefersReducedMotion } from '@hooks';

import Video from '../../components/video';

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

  .vid-div {
    margin-left: 20%;
    margin-right: 20%;

    text-align: center;
  }

  vidcaption {
    padding: 0.5em 0em 0.5em;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 3vw, var(--fz-md));
    font-weight: 200;

    @media (max-width: 768px) {
      padding: 0.7em 0em 0.7em;
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

const NameTag = ({ location }) => {
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
      <Helmet title="Name Plaque" />

      <main>
        <header>
          <h1 className="big-heading">Name Plaque</h1>
          <p className="subtitle">July 2020</p>
        </header>

        <StyledAboutSection id="about" ref={revealContainer}>
          <div className="inner">
            <div className="top-content">
              <div>
                <p>
                  Before starting grad school, I wanted to create a sturdy desk plaque for{' '}
                  <a href="https://www.niqueroth.com">Nique</a> using the{' '}
                  <a href="https://www.bosslaser.com/laser-machines/boss-ls-3655">BossLaser's</a> CO
                  <sub>2</sub> etching spray. With only a few days left working in the lab, my goal
                  was to use some less familiar machines, such as the waterjet.
                </p>
                <p>
                  <em>
                    Disclaimer: the use of the phrase &apos;boss bitch&apos; is an inside joke and
                    is in no way derogatory.
                  </em>
                </p>
              </div>
              <StyledPic>
                <div className="top-img">
                  <StaticImage
                    className="img"
                    src="../../../src/images/projects/nametag/7.JPG"
                    width={500}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Finished plaque"
                  />
                </div>
              </StyledPic>
            </div>
            <div>
              <h2 className="numbered-heading1">Plaque Design</h2>
              <p>
                The first step was to decide on the plaque size, font, font size, and placement. The
                raw 2 mm stainless steel sheet was 300 mm x 300 mm and needed to be cut down to the
                standard desk plaque size of 180 mm x 100 mm. Then, I created an artboard of the
                same dimensions in Illustrator and trimmed the kickstand section off. This approach
                makes lining up the laser incredibly easy. I chose a large sans font for her name
                and then used italics for the title.
              </p>
            </div>
            <StyledPic>
              <div className="wrapper">
                <StaticImage
                  className="img"
                  src="../../../src/images/projects/nametag/1.JPG"
                  width={500}
                  quality={95}
                  formats={['AUTO', 'WEBP', 'AVIF']}
                  alt="illustrator layout of the plaque text"
                />
                <figcaption>Layout of the plaque text in Illustrator</figcaption>
              </div>
            </StyledPic>
            <div>
              <h2 className="numbered-heading1">Waterjet</h2>
              <p>
                The lower-power BossLaser can cut through most thin woods and plastics but will
                reflect off certain metals, such as stainless steel. That is the primary reason I
                used the water jet instead of doing everything at once with the laser.
              </p>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../../src/images/projects/nametag/3.JPG"
                    width={500}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="waterjet metal cut out"
                  />
                  <figcaption>Cut out rectangle still in the waterjet</figcaption>
                </div>
              </StyledPic>
              <p>
                With the file in hand, I powered up the{' '}
                <a href="https://www.protomax.com/">ProtoMAX</a> waterjet, checked the garnet levels
                (abrasive grain), and reproduced the desired rectangle in the OMAX software. The
                machine quickly cut out the metal, and I used a belt sander to take off any sharp
                edges/burrs.
              </p>
            </div>
            <div>
              <h2 className="numbered-heading1">Laser Etching</h2>
              <p>
                RDWorks, the BossLaser software, readily imports .ai files while preserving the
                proper dimensions. I selected the letters to be etched, and since the rectangle was
                already cut out, I turned the laser cutting mode off. However, I kept the bounding
                box layer on to keep the alignment of the rectangle with the laser head convenient.
              </p>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../../src/images/projects/nametag/4.JPG"
                    width={500}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="waterjet metal cut out"
                  />
                  <figcaption>
                    Design after import into RDWorks with the letters selected for etching
                  </figcaption>
                </div>
              </StyledPic>
              <p>
                I sprayed the rectangular metal surface with etching spray, which allows the laser
                to penetrate the reflective surface. Still, the laser's engraving speed had to be
                slowed down, and the power turned up to almost 100 percent; otherwise, it wouldn't
                have enough time or energy to leave a mark.
              </p>
              <div className="vid-div">
                <Video
                  videoSrcURL="https://www.youtube.com/embed/6MpQkiiMEqQ?autoplay=1&controls=0&disablekb=1&fs=0&loop=1&modestbranding=1&iv_load_policy=3&playlist=6MpQkiiMEqQ"
                  videoTitle="Nique's Name Laser-etched"
                />
                <vidcaption>Timelapse of Laser Etching</vidcaption>
              </div>
            </div>
            <div>
              <h2 className="numbered-heading1">Metal Bending</h2>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../../src/images/projects/nametag/6.JPG"
                    width={500}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="plaque in the metal brake"
                  />
                  <figcaption>The plaque placed in the sheet metal brake</figcaption>
                </div>
              </StyledPic>
              <p>
                After wiping off the marking spray residue, the last step was to bend the plate into
                the kickstand. The sheet metal brake already had 25 mm fingers installed, and since
                that was a sufficient radius for the plaque's gauge to avoid cracking, I used the
                existing fingers to bend the plate to its final form.
              </p>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../../src/images/projects/nametag/2.JPG"
                    width={500}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Dominique holding her plaque"
                  />
                  <figcaption>Dominique with her plaque</figcaption>
                </div>
              </StyledPic>
            </div>
          </div>
        </StyledAboutSection>
      </main>
    </Layout>
  );
};
NameTag.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NameTag;
