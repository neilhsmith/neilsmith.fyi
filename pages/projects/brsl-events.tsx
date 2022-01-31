import type { NextPage } from 'next';

import { ProjectLayout } from 'layouts/ProjectLayout';
import { Row, Col } from "components/Row";
import { Heading } from "components/Heading";
import { ImageCarousel } from 'components/ImageCarousel';
import { PillBox } from "components/Pills";

import styles from "styles/Project.module.css";

const BrslEvents: NextPage = () => {
  const categories = [{
    id: 1,
    name: 'React'
  }, {
    id: 2,
    name: 'WordPress'
  }, {
    id: 3,
    name: 'TypeScript'
  }, {
    id: 4,
    name: 'PHP'
  }];

  return <ProjectLayout>
    <Row>
      <Col>
        <div className={styles.featuredImage}>
          <ImageCarousel images={[{
            url: '/brsl-events-1.png',
            alt: 'BRSL Events front-end app',
            width: 877,
            height: 724
          }]} />
        </div>
      </Col>
      <Col>
        <Heading>BRSL Events</Heading>
        <PillBox items={categories} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a className="button button-primary" href="https://github.com/neilhsmith/brsl-events">View Code</a>
      </Col>
    </Row>
  </ProjectLayout>;
};

export default BrslEvents;