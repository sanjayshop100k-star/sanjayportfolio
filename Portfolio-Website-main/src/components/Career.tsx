import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Freelance Video Editor & Digital Creator</h4>
                <h5>Independent</h5>
              </div>
              <h3>March 2023 – Present</h3>
            </div>
            <p>
              Managing a high-growth Instagram profile, writing original screenplays for short videos, utilizing CapCut and Premiere Pro for complex edits, directing and shooting promotional content for local businesses.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Project Video Editor</h4>
                <h5>Independent Projects</h5>
              </div>
              <h3>2022 - 2023</h3>
            </div>
            <p>
              Collaborated with local retail brands to create professional video advertisements. Handled the end-to-end production process from script to post-production. Improved client social media reach by 40% through trend-based editing techniques.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Editor</h4>
                <h5>VNSGU, Surat</h5>
              </div>
              <h3>Academic Projects</h3>
            </div>
            <p>
              Lead editor for college event documentaries and promotional clips. Directed and edited a series of educational videos for student awareness campaigns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
