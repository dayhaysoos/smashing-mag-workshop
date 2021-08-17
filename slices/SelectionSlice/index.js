import React from 'react';
import { RichText } from 'prismic-reactjs';
import { Flex, Box } from 'theme-ui';
import { formatCurrencyString } from 'use-shopping-cart';

const SelectionSlice = ({ slice }) => {
  return (
    <section>
      <RichText render={slice.primary.title} />
      <Flex>
        {slice?.items?.map((item, i) => {
          return (
            <Box key={item + i}>
              <Box sx={{ padding: '2px' }}>
                <img
                  width='100%'
                  src={item.selected_product.image}
                  alt={item.selected_product.title}
                  key={`img-${i}`}
                  style={{ marginBottom: '16px' }}
                />
              </Box>
              <Box>
                <p>
                  <strong>{item.selected_product.title}</strong>
                </p>
                <p key={`item.price-${i}`}>
                  {formatCurrencyString({
                    value: item.selected_product.price,
                    currency: 'USD',
                  })}
                </p>
              </Box>
            </Box>
          );
        })}
      </Flex>
    </section>
  );
};

export default SelectionSlice;
