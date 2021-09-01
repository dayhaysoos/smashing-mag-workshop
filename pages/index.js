import Head from 'next/head';
import { Client } from '../prismic-config';
import Layout from '../components/layout';
import { SliceZone } from '../components/slice-zone';
import Contact from '../components/contact';
import { Box, Heading } from 'theme-ui';

export async function getStaticProps() {
  const home = await Client().getByUID('page', 'home');

  return {
    props: {
      home,
    },
  };
}

export default function Home(props) {
  return (
    <Layout>
      <section>
        <Box
          sx={{
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
            margin: 'auto',
          }}>
          <Heading
            as='h1'
            sx={{
              fontSize: ['4em', '8em', '10em'],
              position: 'relative',
              top: ['0', '100px'],
              right: ['0', '4%', '8%'],
            }}>
            Rainbow{' '}
            <Box
              as='span'
              sx={{
                color: 'background',
                fontStyle: 'italic',
                textShadow:
                  '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000',
              }}>
              Store
            </Box>
          </Heading>
        </Box>
        <SliceZone slices={props.home.data.body} />
        <Contact />
      </section>
    </Layout>
  );
}
