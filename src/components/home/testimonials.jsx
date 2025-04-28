const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="section-header">
        <h2>What Our Users Say</h2>
        <p>Join thousands of satisfied students who have transformed their learning experience</p>
      </div>
      <div className="testimonials-container">
        <div className="testimonial-card">
          <div className="testimonial-content">
            <p>
              "StudyGroup has completely changed how I prepare for exams. The group chat feature makes it so easy to ask
              questions and get immediate help."
            </p>
          </div>
          <div className="testimonial-author">
            <div className="author-image">
              <img src="/placeholder.svg?height=60&width=60" alt="Sarah J." />
            </div>
            <div className="author-info">
              <h4>Sarah J.</h4>
              <p>Computer Science Student</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-content">
            <p>
              "I was struggling with my online classes until I found StudyGroup. Now I have a community of peers who
              help me stay motivated and on track."
            </p>
          </div>
          <div className="testimonial-author">
            <div className="author-image">
              <img src="/placeholder.svg?height=60&width=60" alt="Michael T." />
            </div>
            <div className="author-info">
              <h4>Michael T.</h4>
              <p>Business Administration Student</p>
            </div>
          </div>
        </div>
        <div className="testimonial-card">
          <div className="testimonial-content">
            <p>
              "The document sharing feature is a game-changer. We can collaborate on notes in real-time, which has
              improved our study efficiency tremendously."
            </p>
          </div>
          <div className="testimonial-author">
            <div className="author-image">
              <img src="/placeholder.svg?height=60&width=60" alt="Priya K." />
            </div>
            <div className="author-info">
              <h4>Priya K.</h4>
              <p>Medical Student</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
