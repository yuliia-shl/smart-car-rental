import s from './Logo.module.css';
import sprite from '../../assets/sprite.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <svg className={s.logo}>
        <use xlinkHref={`${sprite}#icon-logo`} />
      </svg>
    </Link>
  );
};

export default Logo;
