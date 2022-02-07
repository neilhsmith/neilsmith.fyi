import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

import { Section } from "components/Section";
import { Container } from "components/Container";
import { Row, Col } from "components/Row";
import { Navbar } from "components/Navbar";
import { Heading } from "components/Heading";
import { Splash } from "components/Splash";
import { SkillChart } from "components/SkillChart";
import { ExperienceList } from "components/ExperienceList";
import { ProjectsList } from "components/ProjectsList";
import { ContactForm } from "components/ContactForm";

import styles from "styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
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
              <p>
                Hi. I&apos;m Neil, a full-stack (<i>but mostly</i>) front-end
                developer from Baton Rouge, Louisiana. I'm an innovative and
                driven professional with 9+ years of experience providing
                amazing experiences on the web. I've built e-commerce websites,
                brocure websites and custom internal business applications. In
                addition to building things from scratch, I've helped clients
                with their online marketing strategy, SEO, analytics, site
                hosting and administration.
              </p>
              <p>
                I love working with modern tech and I'm always looking for the
                project that will refine my chops.{" "}
                <Link href="https://docs.google.com/document/d/1HdHDJXYyAxWriy5R4-gm4OP9cRvtKhHwUNtmIJoh9I4/edit?usp=sharing">
                  <a>Check out my CV</a>
                </Link>{" "}
                or <Link href="#contact">drop me a line.</Link>
              </p>
            </div>
          </Container>
        </Section>
        <Section id="skills">
          <Container>
            <div className={styles.skillsInner}>
              <Heading>Skills</Heading>
              <Row>
                <Col>
                  <p>
                    I started my journey as a .NET developer building Windows
                    applications and writing SQL to help a Financial Aid
                    department with their reporting obligations. After that, I
                    transitioned into a full-stack role at a fast paced agency
                    and fell in love with the web. There, I worked with C# .NET
                    and Angular to build web portals for both business and
                    personal uses. And now, I&apos;m a solo Web developer at a
                    marketing agency building anything and everything that comes
                    my way including Shopify or WooCommerce e-commerce sites,
                    custom WordPress sites / plugins, APIs used by React
                    front-ends and vanilla, static sites.
                  </p>
                  <p></p>
                  <p>
                    I&apos;m always eager to learn and strive to keep up with
                    modern technologies and trends.
                  </p>
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
              <Heading>Projects</Heading>
              <ProjectsList />
            </div>
          </Container>
        </Section>
        <Section id="contact">
          <Container>
            <div className={styles.contactInner}>
              <Heading>Contact</Heading>
              <ContactForm />
            </div>
          </Container>
        </Section>
      </main>
    </>
  );
};

export default Home;
