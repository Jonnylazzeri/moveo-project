import React from 'react';
import { useFetch } from './useFetch';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import UserPage from './components/userPage';
import Spinner from './components/spinner';
import Footer from './components/footer';
import DenseAppBar from './components/denseAppBar';
import './App.css';
import ScrollToTop from './scrollToTop';

function App() {
  const { loading, data } = useFetch();
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="App">
        <DenseAppBar />
        <ScrollToTop>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route
              path="/users/:username"
              element={<UserPage users={data} />}
            />
          </Routes>
        </ScrollToTop>
        <Footer />
      </div>
    );
  }
}

export default App;
