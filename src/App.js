// import './App.css';
import '../src/assets/Fonts/Montserrat-SemiBold.ttf';
import AppBar from './components/AppBar/AppBar.js';
import TweetPage from './pages/TweetsPage/TweetsPage';

function App() {
  return (
    <div className="App">
      <AppBar />
      <TweetPage />
    </div>
  );
}

export default App;
