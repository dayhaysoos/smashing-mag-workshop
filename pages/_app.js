import '../styles/globals.css';
import { CartProvider } from 'use-shopping-cart';

import { ThemeProvider } from 'theme-ui';
import theme from '../theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CartProvider
        mode='payment'
        cartMode='checkout-session'
        stripe={process.env.NEXT_PUBLIC_STRIPE_API_KEY}
        billingAddressCollection={false}
        successUrl='https://stripe.com'
        cancelUrl='https://twitter.com/dayhaysoos'
        allowedCountries={['US']}
        currency='USD'>
        <Component {...pageProps} />
      </CartProvider>
    </ThemeProvider>
  );
}

export default MyApp;
