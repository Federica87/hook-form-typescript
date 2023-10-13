import { useLocation, useNavigate } from 'react-router-dom';

export const Layout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      {location.pathname === '/' ? (
        <h2>ACCEDI</h2>
      ) : (
        <h3 onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
          ACCEDI
        </h3>
      )}
      {location.pathname === '/signUp' ? (
        <h2>REGISTRATI</h2>
      ) : (
        <h3 onClick={() => navigate('/signUp')} style={{ cursor: 'pointer' }}>
          REGISTRATI
        </h3>
      )}
    </div>
  );
};
