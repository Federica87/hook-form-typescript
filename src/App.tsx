import './App.css';
import { Routes, Route } from 'react-router-dom';
import { SignIn } from './components/pages/SignIn';
import { SignUp } from './components/pages/SignUp';
import { Layout } from './components/Layout/Layout';

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
