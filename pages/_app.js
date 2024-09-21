import '../styles/globals.css';
import Footer from '../components/navigaton/Footer';
import Header from '../components/navigaton/Header';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
