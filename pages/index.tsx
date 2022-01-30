import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import classNames from 'classnames';

import { Container } from "components/Container";
import { Row, Col } from "components/Row";
import { Navbar } from "components/Navbar";
import { Splash } from "components/Splash";
import { SkillChart } from "components/SkillChart";
import { ExperienceList } from "components/ExperienceList";

import styles from "styles/Home.module.css";


const Home: NextPage = () => {
  return (
    <div className={styles.page}>
      <Head>
        <title>Neil Smith</title>
        <meta name="description" content="Lorem Ipsum" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/e32b9ab8ad.js" crossorigin="anonymous"></script>
      </Head>

      <Navbar />
      <Splash />
      <main role="main">
        <section id="about" className={classNames(styles.section, styles.about)}>
          <Container>
            <div className={styles.aboutInner}>
              <h1 className={styles.heading}>About</h1>
              <h2 className={styles.subHeading}>Lorem ipsum dolor sit amet.</h2>
              <p>
                Hi. I'm Neil, a full-stack (<i>but mostly</i>) front-end developer. With almost 10 years of experience I've helped clients with:
              </p>
              <ul>
                <li>Brocure &amp; e-commerce websites</li>
                <li>Custom internal business applications</li>
                <li>Search engine optimzation</li>
                <li>Analytics</li>
                <li>Email marketing</li>
                <li>And more</li>
              </ul>
              <p><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</strong></p>
            </div>
          </Container>
        </section>
        <section id="skills" className={classNames(styles.section, styles.skills)}>
          <Container>
            <div className={styles.skillsInner}>
              <Row>
                <Col>
                  <h1 className={styles.heading}>Skills</h1>
                  <p>
                    I started my professional journey as a .NET developer building Windows applications and writing SQL to help a Financial Aid department with their reporting obligations.
                    After that, I transitioned into a full-stack role at a fast paced agency and fell in love with the web. There, I worked with C# .NET and Angular to build web portals for both business and personal uses.
                    And now, I'm a solo Web developer at a marketing agency building anything and everything that comes my way including Shopify or WooCommerce e-commerce sites, custom WordPress sites / plugins, APIs used by React front-ends and vanilla, static sites.
                  </p>
                  <p>I'm always eager to learn and strive to keep up with modern technologies and trends.</p>
                </Col>
                <Col>
                  <SkillChart />
                </Col>
              </Row>
              <ExperienceList />
            </div>
          </Container>
        </section>
        <section id="projects" className={classNames(styles.section, styles.projects)}>
          <Container>
            <div className={styles.projectsInner}>
              <h1 className={styles.heading}>projects</h1>
            </div>
          </Container>
        </section>
        <section id="contact" className={classNames(styles.section, styles.contact)}>
          <Container>
            <div className={styles.contactInner}>
              <h1 className={styles.heading}>contact</h1>
            </div>
          </Container>
        </section>
      </main>
    </div >
  )
}

export default Home;
