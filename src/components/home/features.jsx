const Features = () => {
  return (
    <section className="features" id="features">
      <div className="section-header">
        <h2>Why Choose StudyGroup?</h2>
        <p>Our platform is designed to make group studying effective and enjoyable</p>
      </div>
      <div className="features-container">
        <div className="feature-card">
          <div className="feature-icon">
            <i className="icon-group"></i>
          </div>
          <h3>Group Study Sessions</h3>
          <p>
            Create or join study groups based on subjects, courses, or interests. Schedule sessions that work for
            everyone.
          </p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <i className="icon-chat"></i>
          </div>
          <h3>Real-time Group Chat</h3>
          <p>Communicate effectively with group members through text, voice, and video chat options.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <i className="icon-document"></i>
          </div>
          <h3>Real Time Whiteboard</h3>
          <p>Teach and also learn from your friends with collaborative whiteboard.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">
            <i className="icon-calendar"></i>
          </div>
          <h3>Document Editor</h3>
          <p>Create notes with your friends using collaborative .</p>
        </div>
      </div>
    </section>
  )
}

export default Features
