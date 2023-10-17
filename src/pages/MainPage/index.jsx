import { useCallback, useEffect, useState } from 'react';

import { Button } from '../../components/Button';
import { Currency } from '../../components/Currency';

import styles from './styles.css';

export const MainPage = () => {
  const [mode, setMode] = useState('light');

  console.log('rerender main page');

  const onClick = useCallback((value) => {
    console.log('value', value);
  }, []); // если нужно сделать дочерний компонент независимым от родителя (в связке с React.memo)

  const onChangeMode = useCallback((value) => {
    setMode(value);
  }, []); // если нужно сделать дочерний компонент независимым от родителя (в связке с React.memo)

  const listner = useCallback(() => {
    console.log('click');
  }, []); // сохраняем данную ссылку, чтоб ее же и удалить(т.к. при каждом ререндере ссылка обновляется); - пример, если листнер внести в useEffect, тогда коллбек не нужен

  //useEffect, при любом количестве зависимостей в массиве зависимостей, рендерит 1 раз ВСЕГДА! А потом уже, при последующих рендерах смотрит в массив зависимостей, если поменялось что-то рендерит повторно. Если, допустим, 3 useEffect - в компоненте с разными зависимостями, все выполнятся 1 раз при первом рендере (зависимости игнорируются)
  // ставить проверки в useEffect
  useEffect(() => {
    const div = document.querySelector('#wraper');
    div.addEventListener('click', listner);

    return () => {
      div.removeEventListener('click', listner); // удаляем первый листнер(ссылку)
    };
  }, []);

  return (
    <div styles={styles.wrapper}>
      <p>Theme</p>
      <Button onClick={onChangeMode}>Light</Button>
      <Button onClick={onChangeMode}>Dark</Button>
      <Button onClick={onClick}>TEST</Button>

      <div className={styles.currWrapper}>
        <Currency mode={mode} />
      </div>
    </div>
  );
};
