import Button from '../Button/Button';
import s from './CarItem.module.css';
import sprite from '../../assets/sprite.svg';

const CarItem = () => {
  return (
    <div className={s.carItem}>
      <img
        alt="car"
        src="https://ac.goit.global/car-rental-task/9582-ai.jpg"
        width="276"
        height="268"
        className={s.img}
      />
      <div className={s.brandWrap}>
        <p>
          Buick <span className={s.blue}>Enclave,</span> 2008
        </p>
        <span>$40</span>
      </div>

      <div className={s.infoWrap}>
        <p>
          Kiev
          <svg className={s.svg}>
            <use xlinkHref={`${sprite}#icon-separator`} />
          </svg>
          Ukraine
          <svg className={s.svg}>
            <use xlinkHref={`${sprite}#icon-separator`} />
          </svg>
          Luxury Car Rentals
        </p>
        <p>
          suv
          <svg className={s.svg}>
            <use xlinkHref={`${sprite}#icon-separator`} />
          </svg>
          5082 km
        </p>
      </div>
      <Button label="Read more" />
    </div>
  );
};

export default CarItem;
