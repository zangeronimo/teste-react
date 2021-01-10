import React from 'react';
import Hooks from './hooks';
import Dashboard from './pages/dashboard';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <Hooks>
      <Dashboard />
    </Hooks>
  );
};

export default App;
