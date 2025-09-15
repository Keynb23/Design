import './App.css';
import Navbar from './components/nav/Navbar';
import { MainFeed } from './components/main/MainFeed';
import Profile from './components/profile/Profile';

const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <div className="Profile-Section">
                <Profile />
            </div>
            <main className="main-content">
                <MainFeed />
            </main>
        </div>
    );
}

export default App;