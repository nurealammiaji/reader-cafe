import './App.css';
import ExtraBlog from './components/ExtraBlog/ExtraBlog';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <>
      <Header></Header>
      <hr />
      <Layout></Layout>
      <br /> <br /> <br />
      <ExtraBlog></ExtraBlog>
    </>
  )
}

export default App;
