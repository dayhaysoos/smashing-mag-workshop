import React from 'react';
import { Box, Flex, Image, Heading } from 'theme-ui';
import { RichText } from 'prismic-reactjs';
import { Link } from 'prismic-reactjs';

function OffsetHero({ slice }) {
  return (
    <>
      <Flex>
        <Heading>{}</Heading>
        <Box>
          <Image src={slice.primary.image_1.url} />
        </Box>
        <Box>
          <Image src={slice.primary.image_2.url} />
        </Box>
      </Flex>
    </>
  );
}

export default OffsetHero;
