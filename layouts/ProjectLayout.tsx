import { ReactNode } from 'react';
import { useRouter } from "next/router";
import Head from 'next/head'

import { Navbar } from "components/Navbar";
import { Container } from "components/Container";
import { Section } from 'components/Section';

import styles from "styles/Project.module.css";

interface ProjectLayoutProps {
  children: ReactNode;
};

export const ProjectLayout = ({ children }: ProjectLayoutProps) => {
  const router = useRouter();
  const { pid } = router.query;

  // todo: redirect to 404 if pid isn't valid?

  return <>
    <Head>
      <title>Neil Smith - Project {pid}</title>
    </Head>
    <Navbar />
    <main role="main" className={styles.project}>
      <Container>
        <Section>
          {children}
        </Section>
      </Container>
    </main>
  </>;
}