import React from 'react';
import { Flex, Box, Heading, Image, Paragraph, Button } from 'theme-ui';
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart';
import { RichText } from 'prismic-reactjs';
import { htmlSerializer } from '../prismic';

function Product({ product }) {
  const { description, title, features, callout, brand, linked_product } =
    product.data;

  const { image_url, currency, price } = linked_product;

  const { addItem } = useShoppingCart();

  return (
    <>
      <Flex
        sx={{
          justifyContent: 'space-between',
          flexDirection: ['column', 'column', 'row'],
        }}>
        <Flex
          sx={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 4,
          }}>
          <Image src={image_url} />
        </Flex>
        <Flex
          sx={{ flexDirection: 'column', justifyContent: 'center', flex: 2 }}>
          <RichText render={brand} />
          <RichText render={title} />
          <Box as='p' sx={{ fontSize: '24px', marginBottom: '24px' }}>
            {formatCurrencyString({ value: price, currency })}
          </Box>

          <Button onClick={() => addItem(linked_product)}>Add to Cart</Button>
          <Box>
            <RichText render={callout} htmlSerializer={htmlSerializer} />
          </Box>
        </Flex>
      </Flex>
      <Flex
        sx={{
          justifyContent: 'space-between',
          alignItems: ['start', 'start', 'center'],
          flexDirection: ['column', 'column', 'row'],
        }}>
        <Box sx={{ flex: 4 }}>
          <Heading as='h2'>Description</Heading>
          <RichText render={description} />
        </Box>
        <Box sx={{ flex: 2 }}>
          <RichText render={features} htmlSerializer={htmlSerializer} />
        </Box>
      </Flex>
    </>
  );
}

export default Product;
