import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//custom components
import { Navbar } from './components/Navbar';
import Login from './components/Login';
import { Footer } from './components/Footer';

import ProtectedRoutes from "./services/ProtectedRoutes";

const Home = () => {
  return (
    <>
      <section className="hero-section">
        <h1>Home Page</h1>
      </section>
    </>
  );
};

const Dashboard = () => {
  const staticUsersString = sessionStorage.getItem('staticUsers');
  let staticUsers = [];
        if(staticUsersString !== null) {
          staticUsers = JSON.parse(staticUsersString);
        }
  return (
    <>
      <section className="hero-section">
        <h1>Welcome to dashboard</h1>
      </section>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <div>
        <Router>
          <Routes>
            <Route path="/" element={[<Navbar page='home-page'/> , <Home/>]} />

            <Route path = '/login' element={<ProtectedRoutes authenticatedUser="YES"/>}>
              <Route path="/login" element={[<Navbar page="login-page"/>, <Login/>]}/>
            </Route>

            {/* Protected Routes */}
            <Route path = '/dashboard' element={<ProtectedRoutes />} >
              <Route path="/dashboard" element={[<Navbar page="dashboard-page"/>, <Dashboard />]}/>
            </Route>

          </Routes>
        </Router>
      </div>
      
      <Footer />
      
    </div>
  );
}
export default App;
