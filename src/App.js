import '../src/assets/Fonts/Montserrat-SemiBold.ttf';
import { Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar.js';
import { HomePage } from './pages/HomePage/HomePage';
import { Suspense, lazy } from 'react';
import Spinner from './components/Spinner/Spinner';

const Page404 = lazy(() => import('./pages/404'));
const TweetsPage = lazy(() => import('./pages/TweetsPage/TweetsPage'));

function App() {
  return (
    <div className="App">
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
