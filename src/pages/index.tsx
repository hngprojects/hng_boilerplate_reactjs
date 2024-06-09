import { useState } from 'react';
import reactLogo from '../assets/react.svg';
import classes from './index.module.css';

export default function Page() {
  const [ count, setCount ] = useState(0);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
          <img src='/vite.svg' className={classes.logo} alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer'>
          <img src={reactLogo} className={`${classes.logo} ${classes.react}`} alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={classes.card}>
        <button onClick={() => setCount((count) => count + 1)}>
            count is
          {' '}
          {count}
        </button>
        <p>
            Edit
          {' '}
          <code>src/pages/index.tsx</code>
          {' '}
            and save to test HMR
        </p>
      </div>
      <p className={classes['read-the-docs']}>
          Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
