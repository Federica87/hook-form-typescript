import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { SignIn, SignUp } from './pages';

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
