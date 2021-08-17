import React from 'react';
import Layout from '../../components/layout';
import Head from 'next/head';
import { RichText } from 'prismic-reactjs';
import ProductCatalog from '../../components/product-catalog';

import { queryRepeatableDocuments, queryDocsByType } from '../../queries';
import { Heading } from '@theme-ui/components';

export async function getStaticProps() {
  const allProducts = await queryDocsByType('product');

  return {
    props: {
      products: allProducts.results,
    },
  };
}

function Products({ products }) {
  console.log('products', products);
  return (
    <Layout>
      <Heading as='h1' sx={{ textAlign: 'center' }}>
        Products
      </Heading>
      <ProductCatalog products={products} />
    </Layout>
  );
}

export default Products;
