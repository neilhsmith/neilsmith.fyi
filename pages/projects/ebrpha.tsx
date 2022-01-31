import type { NextPage } from 'next';

import { ProjectLayout } from 'layouts/ProjectLayout';
import { Row, Col } from "components/Row";
import { Heading } from "components/Heading";
import { ImageCarousel } from 'components/ImageCarousel';
import { PillBox } from "components/Pills";

import styles from "styles/Project.module.css";

const EBRPHA: NextPage = () => {
  const categories = [{
    id: 1,
    name: 'WordPress'
  }];

  return <ProjectLayout>
    <Row>
      <Col>
        <div className={styles.featuredImage}>
          <ImageCarousel images={[{
            url: '/ebrpha-home-1.png',
            alt: 'EBRPHA Website home page',
            width: 877,
            height: 687
          }, {
            url: '/ebrpha-home-2.png',
            alt: 'EBRPHA Website home page',
            width: 877,
            height: 687
          }, {
            url: '/ebrpha-home-3.png',
            alt: 'EBRPHA Website sub page',
            width: 877,
            height: 687
          }]} />
        </div>
      </Col>
      <Col>
        <Heading>EBRPHA</Heading>
        <PillBox items={categories} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a className="button button-primary" href="https://ebrpha.org/">View Site</a>
      </Col>
    </Row>
  </ProjectLayout>;
};

export default EBRPHA;