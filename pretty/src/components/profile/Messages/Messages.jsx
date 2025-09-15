import React from "react";
import "./Messages.css";

const Messages = () => {
  return (
    <div className="messages-container">
      <h3 className="Message-Dash">Messages</h3>
      <div className="messages-chat-preview">
        <h4 className="Mess-Name">John Doe</h4>
        <p className="mess">Hey, are you free to chat?</p>
        <span className="Message-Time">2 hours ago</span>
      </div>
      <div className="messages-chat-preview">
        <h4 className="Mess-Name">Jane Smith</h4>
        <p className="mess">Just checking in on the project.</p>
        <span className="Message-Time">12 hours ago</span>
      </div>
      <div className="messages-chat-preview">
        <h4 className="Mess-Name">John Doe</h4>
        <p className="mess">Hey, are you free to chat?</p>
        <span className="Message-Time">1 day ago</span>
      </div>
      <div className="messages-chat-preview">
        <h4 className="Mess-Name">Jane Smith</h4>
        <p className="mess">Just checking in on the project.</p>
        <span className="Message-Time">3 days ago</span>
      </div>
    </div>
  );
};

export default Messages;
