import './Profile.css';
import Messages from './Messages/Messages';
import Favs from './Favs/Favs';

const Profile = () => {
    return (
        <div className="profile-container">
            <div className="profile-content">
                <div className="profile-card">
                    <div className="profile-header">
                        <h1>Jane Doe</h1>
                        <p>Web Developer at Tech Solutions</p>
                    </div>
                    <div className="profile-details">
                        <div className="profile-section">
                            <h2>Contact Info</h2>
                            <p><strong>Email:</strong> jane.doe@example.com</p>
                            <p><strong>Phone:</strong> (123) 456-7890</p>
                        </div>
                    </div>
                </div>
                {/* Adding Messages and Favs below the main profile card */}
                <div className="additional-sections">
                    <Favs />
                    <Messages />
                </div>
            </div>
        </div>
    );
};

export default Profile;