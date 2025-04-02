import { useDispatch, useSelector } from 'react-redux';
import CarItem from '../CarItem/CarItem';
import s from './CarCatalog.module.css';
import { selectCars, selectError, selectLoading } from '../../redux/cars/selectors';
import { useEffect } from 'react';
import { fetchCars } from '../../redux/cars/operations';

const CarCatalog = () => {
  const cars = useSelector(selectCars);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      {error && <b>{error}</b>}

      {!loading && cars.length > 0 && (
        <ul className={s.catalog}>
          {cars.map(car => (
            <li key={car.id} className={s.carItem}>
              <CarItem car={car} />
            </li>
          ))}
        </ul>
      )}
      {cars.length === 0 && !loading && !error && <b>No cars available.</b>}
    </>
  );
};

export default CarCatalog;
