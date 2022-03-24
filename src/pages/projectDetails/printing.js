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
                  maintaining four printers for various research projects. Here is a complete list
                  of printers I've worked with:
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
                Fabricating complex metal parts through subtractive means (i.e., mills and lathes)
                can quickly become time-consuming and expensive. For this reason, the engineering
                machine shop rarely fabricated metal prototypes for indecisive students. However,
                many senior design projects are sponsored by companies that expect more than a
                plastic prototype. To resolve this issue, the college purchased a direct metal
                printer called the DMP Flex 350.
              </p>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../../src/images/projects/printing/2.JPG"
                    width={800}
                    objectFit="contain"
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="The DMP Flex in its final spot"
                  />
                  <figcaption>The DMP Flex recently delivered</figcaption>
                </div>
              </StyledPic>
              <p>
                The printer works rather well, but it requires significant setup and
                post-processing. The metal particulate is microscopic and, in some cases, extremely
                flammable; anyone interacting with the particulate has to wear a PAPR suit for
                protection. The chamber must be pressurized and filled with argon, and the final
                parts are removed with a bandsaw. Also, the print resolution isn't close to a
                machined finish.
              </p>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../../src/images/projects/printing/5.JPG"
                    width={800}
                    objectFit="contain"
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="A metal pump impeller"
                  />
                  <figcaption>A finished pump impeller from the DMP Flex</figcaption>
                </div>
              </StyledPic>
              <p>
                Beyond setup and surface finish, metal prints have the classic 3D printing issue of
                anisotropic properties, meaning different tensile strengths depending on the
                measured direction. Without a reflow oven, the metal parts were non-load bearing.
                Also, as the sintering laser moves along the bed, it kicks up the particulate in
                front of it. This motion creates tiny inclusions in the finished part, leading to
                further weaknesses.
              </p>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../../src/images/projects/printing/3.JPG"
                    width={800}
                    objectFit="contain"
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="The metal particulate inside the printing chamber"
                  />
                  <figcaption>Inside the printing chamber</figcaption>
                </div>
              </StyledPic>
              <p>
                With all that said, the printer still provides a promising way for students to
                fabricate parts. The technology is still in its infancy, so I am excited to see how
                future printers attempt to solve these issues.
              </p>
            </div>
            <div>
              <h2 className="numbered-heading1">Stereolithography</h2>
              <p>
                Classic FDM printers provide a cheap and quick way to print prototypes. However,
                some applications call for parts with a tight tolerance or specific material
                strength. For those, stereolithography, or resin printing, is a fantastic option. A
                laser hardens resin on a platform that slowly moves upward layer by layer. While
                more expensive to print than FDM, the laser creates a part with a microscopic layer
                height. The finished prints can range from flexible to stiff depending on the resin
                type.
              </p>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../../src/images/projects/printing/77.JPG"
                    width={800}
                    objectFit="contain"
                    quality={85}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="A finished resin print"
                  />
                  <figcaption>
                    A finished resin print, demonstrating the Form 3's capabilities
                  </figcaption>
                </div>
              </StyledPic>
              <p>
                While at the fabrication lab, I managed three Form 3 resin printers and printed
                prototypes ranging from a flexible lung to wax molds for lost wax casting. With the
                MODEL group, I have set up and run the much larger Form 3L for research projects and
                recently printed holders for the pecan impactor using durable resin.
              </p>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../../src/images/projects/printing/11.jpg"
                    width={800}
                    objectFit="contain"
                    quality={85}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="Finished resin prints for the pecan impactor'"
                  />
                  <figcaption>Finished parts for the pecan impactor</figcaption>
                </div>
              </StyledPic>
            </div>
            <div>
              <h2 className="numbered-heading1">Fused Deposition Modeling</h2>
              <p>
                Most of my 3D printing experience lies with FDM printers, and I have a love-hate
                relationship with the tech. FDM printers are usually cheap and easy to start using,
                perfect for the average student, but they can be challenging to fix, especially when
                someone else breaks them. There is also the matter of company support, and since the
                tech is in its infancy, many of the companies we bought printers from went under or
                were bought out (Lulzbot, Dremel, Makerbot).
              </p>
              <StyledPic>
                <div className="wrapper">
                  <StaticImage
                    className="img"
                    src="../../../src/images/projects/printing/12.jpg"
                    width={800}
                    height={900}
                    objectFit="contain"
                    quality={95}
                    formats={['AUTO', 'WEBP', 'AVIF']}
                    alt="The Dremel 3D45"
                  />
                  <figcaption>The Dremel 3D45 looking pretty</figcaption>
                </div>
              </StyledPic>
              <p>
                Despite those reasons, I am very excited about new iterations of FDM printers,
                especially from{' '}
                <a href="https://www.youtube.com/watch?v=9peACH52KTo">
                  revolutionary companies like Prusa
                </a>
                . The next generation of students has incredible opportunities to build powerful
                prototypes.
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
