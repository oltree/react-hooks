import { useState } from 'react';

import { Button } from '../../components/Button';
import { Currency } from '../../components/Currency';

import styles from './styles.css';

export const MainPage = () => {
  const [mode, setMode] = useState('light');

  console.log('rerender main page');

  return (
    <div styles={styles.wrapper}>
      <p>Theme</p>
      <Button onClick={() => setMode('light')}>Light</Button>
      <Button onClick={() => setMode('dark')}>Dark</Button>
      <div className={styles.currWrapper}>
        <Currency mode={mode} />
      </div>
    </div>
  );
};
