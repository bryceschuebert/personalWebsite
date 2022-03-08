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

  .side-by-side {
    position: relative;
    display: flex;

    @media (max-width: 768px) {
      width: 80%;
      display: block;
      margin: auto;
    }
  }

  .side-img {
    flex: 50%;
    margin: 15px 15px 15px 15px;
    border-radius: var(--border-radius);
    padding: 5px;
  }
`;

const FishTank = ({ location }) => {
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
      <Helmet title="Fish Tank" />

      <main>
        <header>
          <h1 className="big-heading">Fish Tank</h1>
          <p className="subtitle">October 2018</p>
        </header>

        <StyledAboutSection id="about" ref={revealContainer}>
          <div className="inner">
            <div className="top-content">
              <div>
                <p>
                  Freshman year, I purchased a simple 10-gallon (excuse the use of imperial units)
                  aquaponic tank in which beta fish fertilized succulents while the succulents
                  cleaned the water. I was gifted a few more fish and purchased a 30-gallon tank to
                  accommodate the new tenants. I enjoyed the challenge of maintaining a healthy
                  aquarium, and by junior year, a friend's uncle kindly offered up a 120-gallon tank
                  for free. Tanks of this size weigh over 500 kg when filled with water, and stands
                  can cost hundreds of dollars. Therefore, I decided to build my own frame with a
                  budget of $100.
                </p>
              </div>
              <StyledPic>
                <div className="top-img">
                  <StaticImage
                    className="img"
                    src="../../images/projects/fishtank/6.JPG"
                    width={800}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Finished 120 gallon tank in blue light"
                  />
                </div>
              </StyledPic>
            </div>
            <div>
              <h2 className="numbered-heading1">Framing</h2>
              <p>
                With a set appropriation, the primary focus was on weight distribution over
                aesthetics. While I no longer have the exact calculations or tank dimensions, the
                tank was roughly 2.1 m L x .4 m W x .5 m H, and while it was over 20 years old, the
                previous owner guaranteed that the seals were intact. The destination was in the
                living room of a newly built house, and I confirmed adequate support via the
                crawlspace.
              </p>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../images/projects/fishtank/1.JPG"
                    objectFit="fill"
                    width={500}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Basic framing of aquarium stand"
                  />
                  <figcaption>Framing of the stand</figcaption>
                </div>
              </StyledPic>
              <p>
                I purchased several 2x4s from Home Depot and used the fabrication lab's miter saw to
                cut them down to the tank's length and width. After drilling pilot holes, I used a
                level table to screw the planks together, forming two rectangles that would serve as
                the stand and tank's foundation. The final tank height had to balance a nice viewing
                height and accessibility for daily cleaning, so the four inner vertical planks
                connecting the two rectangles were roughly 1.2 m tall.
              </p>
            </div>
            <div>
              <h2 className="numbered-heading1">Support</h2>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../images/projects/fishtank/2.JPG"
                    width={500}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Frame with supports"
                  />
                  <figcaption>The stand with additional vertical and torsional supports</figcaption>
                </div>
              </StyledPic>
              <p>
                While the framing of the stand was complete, the weight of a full tank would cause
                the screws to shear off. Also, the frame would slightly twist with horizontal
                pressure. To counter the torsion, I affixed two inner planks centered on either side
                of the rectangle's length. To distribute the weight from the top rectangle to the
                floor, ten shortened planks were added that fit in between the top and bottom
                rectangles and screwed into the inner planks. For additional torsional support and
                as a base for the plywood platforms, short planks were inserted on either side of
                the verticle inner planks and parallel to the short sides of the rectangle.
              </p>
            </div>
            <div>
              <h2 className="numbered-heading1">Final Touches</h2>
              <p>
                Finally, I nailed in two 7 mm particle baseboards to hold aquarium supplies and
                laser cut a small chemical bottle holder, fixed between the center vertical
                supports. I used the SawStop table saw to cut the remaining particleboard to cover
                the top of the stand, serving as a flat surface for the aquarium. In retrospect, it
                would have been worth the extra money to use pressure-treated wood for waterproofing
                and adding an excellent stain for aesthetics.
              </p>
              <StyledPic>
                <div className="side-by-side">
                  <StaticImage
                    className="side-img"
                    src="../../images/projects/fishtank/3.JPG"
                    width={500}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Stand finished inside fab lab"
                  />
                  <StaticImage
                    className="side-img"
                    src="../../images/projects/fishtank/4.JPG"
                    width={500}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Stand inside home with full aquarium ontop"
                  />
                </div>
                <figcaption>
                  Before: Final product in the lab \\ After: Stand under filled aquarium
                </figcaption>
              </StyledPic>
              <p>
                The tank stand performed nicely for the rest of the year, and while it wasn't the
                prettiest stand, it was highly functional, making maintenance a breeze.
              </p>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../images/projects/fishtank/5.JPG"
                    width={500}
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Frame with supports"
                  />
                  <figcaption>Aquarium filled with life</figcaption>
                </div>
              </StyledPic>
              <p>
                I eventually sold the stand, tank, and fish after signing a new lease in a much
                smaller apartment, but the fun of building and maintaining the aquarium was well
                worth the challenge.
              </p>
            </div>
          </div>
        </StyledAboutSection>
      </main>
    </Layout>
  );
};
FishTank.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

export default FishTank;
