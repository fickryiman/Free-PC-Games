import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/storages';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/details/:gameId" element={<Game />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/references" element={<References />} />
          <Route path="/*" element={<NoMatch />} /> */}
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
