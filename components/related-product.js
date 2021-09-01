import React from 'react';
import { Box, Flex } from 'theme-ui';
import { RichText } from 'prismic-reactjs';

function RelatedProducts({ products }) {
  return (
    <>
      <h1> Related products</h1>
      <Flex>
        {products.map((product) => {
          const { slug } = product.related_product;
          return <Box key={slug}>{slug}</Box>;
        })}
      </Flex>
    </>
  );
}

export default RelatedProducts;
