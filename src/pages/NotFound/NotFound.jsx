import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import s from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={s.wrapper}>
      <Link to="/">
        <Button label="Home Page" size="small" color="secondary" />
      </Link>
    </div>
  );
};

export default NotFound;
