import '@buildo/bento-design-system/index.css';       // core styles
import '@buildo/bento-design-system/defaultTheme.css'; // default theme
import { BentoProvider } from '@buildo/bento-design-system';
import { defaultMessages } from 'lib/defaultmessages';

export default function MyApp({ Component, pageProps }) {
  return (
      <BentoProvider defaultMessages={defaultMessages}>
        <Component {...pageProps} />
      </BentoProvider>
  );
}