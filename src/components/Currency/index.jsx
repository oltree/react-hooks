import { useMemo, useState } from 'react';

import styles from './styles.css';
import { useCurrency } from './useCurrency';

export const Currency = ({ mode }) => {
  const [value, setValue] = useState(0);
  const { dollars, euros, rubles, uyan } = useCurrency(value);

  console.log(mode, 'rerender currency');

  const Counter = useMemo(
    () => (
      <div>
        <div>
          <>чтобы при каждом рендере компонент не создавался заново</>
        </div>
      </div>
    ),
    []
  );

  const columns = useMemo(
    () => ['массив с данными 100+'].map((item) => ({ ...item, value })),
    [value]
  ); // при работе с большими данными

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
