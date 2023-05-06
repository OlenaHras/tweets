import { Provider } from 'react-redux';
import '../src/assets/Fonts/Montserrat-SemiBold.ttf';
import AppBar from './components/AppBar/AppBar.js';
import TweetPage from './pages/TweetsPage/TweetsPage';
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppBar />
        <TweetPage />
      </Provider>
    </div>
  );
}

export default App;
