import React, { useEffect } from 'react';
import { useAuth } from '../../../hooks/useAuth';
import { useStore } from '../../../store/Store';
import { useNavigate } from 'react-router-dom';
const Login: React.FC = () => {
  const { login, getUser, logout } = useAuth();
  const user = useStore(state => state.currentUser); 
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      getUser.refetch(); // Fetch user data only if user exists
    }
  }, [user, getUser]);

  const handleLogin = async () => {
    await login(); // Wait for login to complete
    if (user) {
      navigate('/'); // Navigate to home page if user exists
    }
  };

  const handleLogout = () => {
    logout.mutate();
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Microsoft</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Login
