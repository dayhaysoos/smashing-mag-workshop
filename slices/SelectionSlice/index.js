import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Flex, Box } from 'theme-ui';
import { formatCurrencyString } from 'use-shopping-cart';
import Container from '../../components/container';

const SelectionSlice = ({ slice }) => {
  return (
    <Container>
      <RichText render={slice.primary.selection_header} />
      <RichText render={slice.primary.selection_copy} />
      <Flex>
        {slice?.items?.map((item, i) => {
          return (
            <Box key={item + i}>
              <Box sx={{ padding: '2px' }}>
                <img
                  width='100%'
                  src={item.selection_products.image}
                  alt={item.selection_products.title}
                  key={`img-${i}`}
                  style={{ marginBottom: '4px' }}
                />
              </Box>
              <Box>
                <strong>{item.selection_products.title}</strong>
                <p style={{ marginTop: '4px' }} key={`item.price-${i}`}>
                  {formatCurrencyString({
                    value: item.selection_products.price,
                    currency: 'USD',
                  })}
                </p>
              </Box>
            </Box>
          );
        })}
      </Flex>
    </Container>
  );
};

export default SelectionSlice;
