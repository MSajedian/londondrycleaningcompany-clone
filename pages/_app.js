import SSRProvider from 'react-bootstrap/SSRProvider';
import Layout from '../components/Layout';
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import '../styles/test.css'

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider >
  )
}

export default MyApp