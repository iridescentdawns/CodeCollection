// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import React from 'react';
import { Sidebar } from './components/Sidebar/sidebar';
import { Router } from './router';

export function App() {
  return (
    <div>
      <Sidebar />
      <Router />
    </div>
  );
}

export default App;
