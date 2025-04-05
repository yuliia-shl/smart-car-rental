import sprite from '../../assets/sprite.svg';
import s from './CarInfo.module.css';
import { parsedAddress, parsedId } from '../../utils/formatters';

const CarInfo = ({ carById }) => {
  const {
    accessories = [],
    brand,
    description,
    engineSize,
    fuelConsumption,
    functionalities = [],
    mileage,
    model,
    rentalConditions = [],
    rentalPrice,
    type,
    year,
  } = carById;

  const formattedMileage = mileage ? mileage.toLocaleString('uk-UA') : '';
  const { city, country } = parsedAddress(carById?.address);
  const idShown = parsedId(carById?.img);
  const combinedItems = [...accessories, ...functionalities];

  return (
    <>
      <div className={s.carInfoWrap}>
        <div className={s.detailsContainer}>
          <div className={s.titleWrap}>
            <h2 className={s.title}>
              {brand} {model}, {year}
            </h2>
            <span className={s.id}>id: {idShown}</span>
          </div>
          <div className={s.locationWrap}>
            <svg className={s.icon}>
              <use xlinkHref={`${sprite}#icon-location`} />
            </svg>
            <p className={s.address}>
              {city},{country}
            </p>
            <p>Mileage: {formattedMileage} km</p>
          </div>
          <p className={s.price}>${rentalPrice}</p>
          <p className={s.description}>{description}</p>
        </div>
        <div className={s.infoContainer}>
          <div>
            <h3 className={s.infoTitle}>Rental Conditions:</h3>
            {rentalConditions && rentalConditions.length > 0 && (
              <ul className={s.infoList}>
                {rentalConditions.map((condition, index) => (
                  <li key={index} className={s.infoItem}>
                    <svg className={s.icon}>
                      <use xlinkHref={`${sprite}#icon-check-circle`} />
                    </svg>
                    <p>{condition}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div>
            <h3 className={s.infoTitle}>Car Specifications:</h3>
            <ul className={s.infoList}>
              <li className={s.infoItem}>
                <svg className={s.icon}>
                  <use xlinkHref={`${sprite}#icon-year`} />
                </svg>
                <p>Year: {year}</p>
              </li>
              <li className={s.infoItem}>
                <svg className={s.icon}>
                  <use xlinkHref={`${sprite}#icon-brand`} />
                </svg>
                <p>Type: {type}</p>
              </li>
              <li className={s.infoItem}>
                <svg className={s.icon}>
                  <use xlinkHref={`${sprite}#icon-fuel-pump`} />
                </svg>
                <p>Fuel Consumption: {fuelConsumption}</p>
              </li>
              <li className={s.infoItem}>
                <svg className={s.icon}>
                  <use xlinkHref={`${sprite}#icon-engine`} />
                </svg>
                <p>Engine Size: {engineSize}</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={s.infoTitle}>Accessories and functionalities:</h3>
            {combinedItems && combinedItems.length > 0 && (
              <ul className={s.infoList}>
                {combinedItems.map((item, index) => (
                  <li key={index} className={s.infoItem}>
                    <svg className={s.icon}>
                      <use xlinkHref={`${sprite}#icon-check-circle`} />
                    </svg>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CarInfo;
