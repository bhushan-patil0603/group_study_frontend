import Header from "./header"
import Hero from "./hero"
import Features from "./features"
import Testimonials from "./testimonials"
import Footer from "./footer"
import "./styles.css"

function HomePage() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default HomePage
