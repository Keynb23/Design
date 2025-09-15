import "./MainFeed.css";
import { Post } from "./Post/Post";
import { Jobs } from "./Jobs/Jobs";
import { Groups } from "./Groups/Groups";
import { Network } from "./Network/Network";
import { News } from "./news/News";
export const MainFeed = () => {
  return (
    <section className="main-feed">
      <h2 className="feed-title">Main Feed</h2>
      <Post />
      <div className="feed-columns">
        <div className="feed-center">
          <div className="feed-posts">
            <div className="post-card">
              <div className="post-header">
                <span className="post-author">Jane Doe</span>
                <span className="post-time">2h ago</span>
              </div>
              <p className="post-content">
                Excited to start a new position at IndieGames! 🚀
              </p>
            </div>

            {/* Article Post */}
            <div className="post-card">
              <div className="post-header">
                <span className="post-author">John Smith</span>
                <span className="post-time">5h ago</span>
              </div>
              <p className="post-content">
                I just published an article on the importance of soft skills in
                engineering leadership. Check it out and share your thoughts!
              </p>
              <a
                href="https://www.linkedin.com/articles/soft-skills-in-engineering"
                className="post-article-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the full article
              </a>
            </div>

            {/* Picture Post */}
            <div className="post-card">
              <div className="post-header">
                <span className="post-author">Alex Lee</span>
                <span className="post-time">1d ago</span>
              </div>
              <p className="post-content">
                Networking is key! Happy to connect with new professionals.
              </p>
              <img
                src="/assets/PrettyWhiskey.png"
                alt="Networking Event"
                className="post-image"
              />
            </div>

            {/* Video Post */}
            <div className="post-card">
              <div className="post-header">
                <span className="post-author">Samantha Green</span>
                <span className="post-time">3d ago</span>
              </div>
              <p className="post-content">
                Just wrapped up my first product demo! Here’s a quick look at
                how our platform is shaping the future of remote teams.
              </p>
              <video controls className="post-video">
                <source src="/assets/whiskeyFail.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <aside className="feed-side">
          <News />
          <Jobs />
          <Groups />
          <Network />
        </aside>
      </div>
    </section>
  );
};
