import type { NextPage } from 'next';
import Image from "next/image";

import { ProjectLayout } from 'layouts/ProjectLayout';
import { Row, Col } from "components/Row";
import { Heading } from "components/Heading";
import { ImageCarousel } from 'components/ImageCarousel';
import { PillBox } from "components/Pills";

import styles from "styles/Project.module.css";

const Kysek: NextPage = () => {
  const categories = [{
    id: 1,
    name: 'Shopify'
  }];

  return <ProjectLayout>
    <Row>
      <Col>
        <div className={styles.featuredImage}>
          <ImageCarousel images={[{
            url: '/kysek-home-877.png',
            alt: 'KYSEK Website home page',
            width: 877,
            height: 718
          }, {
            url: '/kysek-product.png',
            alt: 'KYSEK Website product page',
            width: 877,
            height: 718
          }]} />
        </div>
      </Col>
      <Col>
        <Heading>KYSEK</Heading>
        <PillBox items={categories} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a className="button button-primary" href="https://kysek.com">View Site</a>
      </Col>
    </Row>
  </ProjectLayout>;
};

export default Kysek;