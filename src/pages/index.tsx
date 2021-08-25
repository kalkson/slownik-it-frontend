import useTransformed from 'hooks/useTransformed';
import { FC, useEffect } from 'react';
import styles from '../styles/Home.module.css';

const Home: FC = () => {
  const [, setTransformed] = useTransformed();

  useEffect(() => {
    setTransformed(false);

    return () => {
      setTransformed(true);
    };
  }, [setTransformed]);

  return <div className={styles.container} />;
};

export default Home;
