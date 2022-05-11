import Layout from '../components/Layout';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import Project from '../components/Projects';
import About from '../components/About';
import Footer from '../components/Footer';
const Index = () => {
  return (
    <Layout pageTitle="Landing Page Nextjs">
      <Header />
      <Hero />
      <Feature />
      <Project />
      <About />
      <Footer />
    </Layout>
  );
};
export default Index;
