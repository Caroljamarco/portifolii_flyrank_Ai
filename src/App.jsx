import { Analytics } from "@vercel/analytics/react";
import Hero from './components/Hero'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Hero />
      <Work />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
}

export default App