import Head from 'next/head';
import { Client } from '../prismic';
import Layout from '../components/layout';
import { SliceZone } from '../components/slice-zone';

export async function getStaticProps() {
  const home = await Client().getByUID('page', 'home');

  return {
    props: {
      home,
    },
  };
}

export default function Home(props) {
  console.log('props', props);
  return (
    <Layout>
      <section style={{ width: '100%', height: '100%' }}>
        <SliceZone slices={props.home.data.body} />
      </section>
    </Layout>
  );
}
