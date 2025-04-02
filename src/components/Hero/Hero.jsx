import Button from '../Button/Button';
import s from './Hero.module.css';

const Hero = () => {
  return (
    <div className={s.hero}>
      <div className={s.wrapper}>
        <h1 className={s.heroTitle}>Find your perfect rental car</h1>
        <p className={s.heroText}>Reliable and budget-friendly rentals for any journey</p>
        <Button to="/catalog" label="View Catalog" />
      </div>
    </div>
  );
};

export default Hero;
