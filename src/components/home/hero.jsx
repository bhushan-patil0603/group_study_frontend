const Hero = () => {
  return (
    <section className="hero">
      <div className="video-container">
        <video autoPlay loop muted className="bg-video">
          <source src="/placeholder.svg?height=720&width=1280" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="hero-content">
        <h1>Study Together, Succeed Together</h1>
        <p>
          Join thousands of students who are transforming the way they learn through collaborative study sessions and
          real-time group chats.
        </p>
        <div className="hero-buttons">
          <a href="/dashboard" className="btn btn-primary">
            Get Started Free
          </a>
          <a href="#learn-more" className="btn btn-outline">
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
