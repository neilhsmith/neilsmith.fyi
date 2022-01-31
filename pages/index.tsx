import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import classNames from 'classnames';

import { Section } from 'components/Section';
import { Container } from "components/Container";
import { Row, Col } from "components/Row";
import { Navbar } from "components/Navbar";
import { Heading } from "components/Heading";
import { Splash } from "components/Splash";
import { SkillChart } from "components/SkillChart";
import { ExperienceList } from "components/ExperienceList";
import { ProjectsList } from "components/ProjectsList";
import { ContactForm } from 'components/ContactForm';

import styles from "styles/Home.module.css";

const Home: NextPage = () => {
  return <>
    <Head>
      <title>Neil Smith</title>
    </Head>
    <Navbar />
    <Splash />
    <main role="main">
      <Section id="about">
        <Container>
          <div className={styles.aboutInner}>
            <Heading>About</Heading>
            <h2 className={styles.subHeading}>Lorem ipsum dolor sit amet.</h2>
            <p>
              Hi. I&apos;m Neil, a full-stack (<i>but mostly</i>) front-end developer. With almost 10 years of experience I&apos;ve helped clients with:
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
      </Section>
      <Section id="skills">
        <Container>
          <div className={styles.skillsInner}>
            <Row>
              <Col>
                <Heading>Skills</Heading>
                <p>
                  I started my professional journey as a .NET developer building Windows applications and writing SQL to help a Financial Aid department with their reporting obligations.
                  After that, I transitioned into a full-stack role at a fast paced agency and fell in love with the web. There, I worked with C# .NET and Angular to build web portals for both business and personal uses.
                  And now, I&apos;m a solo Web developer at a marketing agency building anything and everything that comes my way including Shopify or WooCommerce e-commerce sites, custom WordPress sites / plugins, APIs used by React front-ends and vanilla, static sites.
                </p>
                <p>I&apos;m always eager to learn and strive to keep up with modern technologies and trends.</p>
              </Col>
              <Col>
                <SkillChart />
              </Col>
            </Row>
            <ExperienceList />
          </div>
        </Container>
      </Section>
      <Section id="projects">
        <Container>
          <div className={styles.projectsInner}>
            <Row>
              <Col>
                <Heading>Projects</Heading>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </Col>
              <Col>
                <ProjectsList />
              </Col>
            </Row>
          </div>
        </Container>
      </Section>
      <Section id="contact">
        <Container>
          <div className={styles.contactInner}>
            <Row>
              <Col>
                <Heading>Contact</Heading>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </Col>
              <Col>
                <ContactForm />
              </Col>
            </Row>
          </div>
        </Container>
      </Section>
    </main>
  </>;
}

export default Home;
