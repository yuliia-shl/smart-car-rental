import clsx from 'clsx';
import s from './Button.module.css';
import { Link } from 'react-router-dom';

const Button = ({ to, label, onClick, size = 'large', color = 'primary' }) => {
  const buttonClass = clsx(s.button, s[size], s[color]);

  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {label}
      </Link>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
