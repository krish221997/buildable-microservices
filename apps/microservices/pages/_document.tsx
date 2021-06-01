import { ColorModeScript } from '@chakra-ui/color-mode';
import { Box } from '@chakra-ui/layout';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="Description" content="Website builder" />
        </Head>
        <Box as="body">
          <ColorModeScript />
          <Main />
          <NextScript />
        </Box>
      </Html>
    );
  }
}
