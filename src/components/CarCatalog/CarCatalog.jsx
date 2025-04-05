import { useSelector, useDispatch } from 'react-redux';
import CarItem from '../CarItem/CarItem';
import s from './CarCatalog.module.css';
import {
  selectCars,
  selectError,
  selectLoading,
  selectPage,
  selectTotalPages,
} from '../../redux/cars/selectors';
import { useEffect, useRef } from 'react';
import { fetchCars } from '../../redux/cars/operations';
import { useSearchParams } from 'react-router-dom';
import Button from '../Button/Button';
import { setPage } from '../../redux/cars/slice';

const CarCatalog = () => {
  const cars = useSelector(selectCars);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  let currentPage = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const firstNewCar = useRef(null);
  const prevCarsLength = useRef(0);

  useEffect(() => {
    if (currentPage > 1 && cars.length > prevCarsLength.current && firstNewCar.current) {
      firstNewCar.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    prevCarsLength.current = cars.length;
  }, [cars, currentPage]);

  useEffect(() => {
    const brand = searchParams.get('brand') || '';
    const rentalPrice = searchParams.get('price') || '';
    const minMileage = searchParams.get('min') || '';
    const maxMileage = searchParams.get('max') || '';
    const noFilters = !brand && !rentalPrice && !minMileage && !maxMileage;

    if (noFilters) {
      dispatch(fetchCars({}));
    } else {
      dispatch(
        fetchCars({
          filters: { filterBrand: brand, rentalPrice, minMileage, maxMileage },
          page: currentPage,
        })
      );
    }
  }, [currentPage, dispatch, searchParams]);

  const handleLoadMore = () => {
    const newPage = currentPage + 1;
    dispatch(setPage(newPage));
  };

  return (
    <>
      {error && <b>{error}</b>}

      {!loading && cars.length > 0 && (
        <ul className={s.catalog}>
          {cars.map((car, index) => {
            const isFirstNew = currentPage > 1 && index === prevCarsLength.current;
            return (
              <li key={car.id} className={s.carItem} ref={isFirstNew ? firstNewCar : null}>
                <CarItem car={car} />
              </li>
            );
          })}
        </ul>
      )}
      {cars.length === 0 && !loading && !error && <b>No cars available.</b>}
      {totalPages > currentPage && (
        <Button label="Load more" size="small" color="secondary" onClick={handleLoadMore} />
      )}
    </>
  );
};

export default CarCatalog;
