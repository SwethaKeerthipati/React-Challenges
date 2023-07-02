import GlobalStyle from "../styles";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  const [isOn, setIsOn] = useState(false);

  function handleToggle() {
    setIsOn((isOn) => !isOn);
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
