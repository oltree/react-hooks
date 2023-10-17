import { useState } from 'react';

import styles from './styles.css';
import { useCurrency } from './useCurrency';

export const Currency = () => {
  const [value, setValue] = useState(0);
  const { dollars, euros, rubles, uyan } = useCurrency(value);

  console.log('rerender currnecy');

  return (
    <div className={styles.wrapper}>
      <input
        placeholder='enter value'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <ul>
        <li>{dollars} dollars</li>
        <li>{euros} ueros</li>
        <li>{rubles} rubles</li>
        <li>{uyan} uyan</li>
      </ul>
    </div>
  );
};
