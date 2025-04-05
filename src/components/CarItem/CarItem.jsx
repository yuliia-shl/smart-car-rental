import Button from '../Button/Button';
import s from './CarItem.module.css';
import sprite from '../../assets/sprite.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/favorites/selectors';
import { toggleFavorite } from '../../redux/favorites/slice';
import clsx from 'clsx';

const CarItem = ({ car }) => {
  const { address, brand, img, id, mileage, model, rentalCompany, rentalPrice, type, year } = car;
  const formattedMileage = mileage.toLocaleString('uk-UA');
  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.find(favorite => favorite.id === car.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(car));
  };

  return (
    <>
      <div className={s.imgWrap}>
        <img
          alt={`${brand} ${model} picture`}
          src={img}
          width="276"
          height="268"
          className={s.img}
        />
        <div onClick={handleFavoriteClick}>
          {isFavorite ? (
            // Favorite's car icon
            <svg className={clsx(s.iconHeart, s.iconHeartActive)}>
              <use xlinkHref={`${sprite}#icon-heart-active`} />
            </svg>
          ) : (
            <svg className={s.iconHeart}>
              <use xlinkHref={`${sprite}#icon-heart`} />
            </svg>
          )}
        </div>
      </div>
      <div className={s.brandWrap}>
        <h4>
          {brand} <span className={s.blue}>{model},</span> {year}
        </h4>
        <span>${rentalPrice}</span>
      </div>

      <div className={s.infoWrap}>
        <p>
          {city}
          <svg className={s.svg}>
            <use xlinkHref={`${sprite}#icon-separator`} />
          </svg>
          {country}
          <svg className={s.svg}>
            <use xlinkHref={`${sprite}#icon-separator`} />
          </svg>
          {rentalCompany}
        </p>
        <p>
          {type}
          <svg className={s.svg}>
            <use xlinkHref={`${sprite}#icon-separator`} />
          </svg>
          {formattedMileage} km
        </p>
      </div>
      <Link to={`/catalog/${id.toString()}`}>
        <Button label="Read more" />
      </Link>
    </>
  );
};

export default CarItem;
