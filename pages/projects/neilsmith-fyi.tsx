import type { NextPage } from 'next';
import Image from "next/image";

import { ProjectLayout } from 'layouts/ProjectLayout';
import { Row, Col } from "components/Row";
import { Heading } from "components/Heading";
import { PillBox } from "components/Pills";

import styles from "styles/Project.module.css";

const NeilSmithFYI: NextPage = () => {
  const categories = [{
    id: 1,
    name: 'Next.js'
  }, {
    id: 2,
    name: 'TypeScript'
  }];

  return <ProjectLayout>
    <Row>
      <Col>
        <div className={styles.featuredImage}>
          <Image src="/kysek-home-877.png" width={877} height={718} />
        </div>
      </Col>
      <Col>
        <Heading>neilsmith.fyi</Heading>
        <PillBox items={categories} />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <a className="button button-primary" href="https://github.com/neilhsmith/neilsmith.fyi">View Code</a>
      </Col>
    </Row>
  </ProjectLayout>;
};

export default NeilSmithFYI;