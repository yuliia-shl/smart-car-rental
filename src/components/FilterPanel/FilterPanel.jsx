import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import clsx from 'clsx';
import sprite from '../../assets/sprite.svg';
import Button from '../Button/Button';
import s from './FilterPanel.module.css';
import { selectBrands } from '../../redux/cars/selectors';
import { fetchBrands, fetchCars } from '../../redux/cars/operations';
import { clearCars } from '../../redux/cars/slice';
import { selectFilters } from '../../redux/filters/selectors';
import {
  changeBrand,
  changeMaxMileage,
  changeMinMileage,
  changeRentalPrice,
  clearFilter,
} from '../../redux/filters/slice';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const { filterBrand, rentalPrice, minMileage, maxMileage } = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  useEffect(() => {
    const brand = searchParams.get('brand') || '';
    const price = searchParams.get('price') || '';
    const min = searchParams.get('min') || '';
    const max = searchParams.get('max') || '';

    dispatch(changeBrand(brand));
    dispatch(changeRentalPrice(price));
    dispatch(changeMinMileage(min));
    dispatch(changeMaxMileage(max));
  }, [dispatch, searchParams]);

  const handleBrandChange = e => {
    const selectedBrand = e.target.value;
    dispatch(changeBrand(selectedBrand));
    setIsBrandOpen(false);
  };

  const handleBrandBlur = () => {
    setTimeout(() => {
      setIsBrandOpen(false);
    }, 100);
  };

  const handleBrandMouseDown = () => {
    setIsBrandOpen(true);
  };

  const handlePriceChange = e => {
    dispatch(changeRentalPrice(Number(e.target.value)));
    setIsPriceOpen(false);
  };

  const handlePriceBlur = () => {
    setTimeout(() => {
      setIsPriceOpen(false);
    }, 100);
  };

  const handlePriceMouseDown = () => {
    setIsPriceOpen(true);
  };

  const handleMinMileageChange = e => dispatch(changeMinMileage(e.target.value));
  const handleMaxMileageChange = e => dispatch(changeMaxMileage(e.target.value));

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(clearCars());
    dispatch(clearFilter());

    const params = {};

    if (filterBrand) params.brand = filterBrand;
    if (rentalPrice) params.price = rentalPrice;
    if (minMileage) params.min = minMileage;
    if (maxMileage) params.max = maxMileage;

    setSearchParams(params);

    dispatch(
      fetchCars({
        filterBrand,
        rentalPrice,
        minMileage,
        maxMileage,
      })
    );
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.labelWrap}>
        <label htmlFor="brand" className={s.label}>
          Car brand
        </label>
        <div className={s.selectWrapper}>
          <select
            id="brand"
            name="brand"
            className={s.select}
            onChange={handleBrandChange}
            value={filterBrand}
            onBlur={handleBrandBlur}
            onMouseDown={handleBrandMouseDown}
          >
            <option value="">Choose a brand</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
          {isBrandOpen ? (
            <svg className={s.iconSelect}>
              <use xlinkHref={`${sprite}#icon-up`} />
            </svg>
          ) : (
            <svg className={s.iconSelect}>
              <use xlinkHref={`${sprite}#icon-down`} />
            </svg>
          )}
        </div>
      </div>

      <div className={s.labelWrap}>
        <label htmlFor="price" className={s.label}>
          Price/ 1 hour
        </label>
        <div className={s.selectWrapper}>
          <select
            id="price"
            name="price"
            className={s.select}
            onChange={handlePriceChange}
            value={rentalPrice}
            onBlur={handlePriceBlur}
            onMouseDown={handlePriceMouseDown}
          >
            <option value="">Choose a price</option>
            {[...Array(18)].map((_, i) => {
              const price = 30 + i * 10;
              return (
                <option key={price} value={price}>
                  {price}
                </option>
              );
            })}
          </select>
          {isPriceOpen ? (
            <svg className={s.iconSelect}>
              <use xlinkHref={`${sprite}#icon-up`} />
            </svg>
          ) : (
            <svg className={s.iconSelect}>
              <use xlinkHref={`${sprite}#icon-down`} />
            </svg>
          )}
        </div>
      </div>

      <div className={s.labelWrap}>
        <label htmlFor="mileageFrom" className={s.label}>
          Car mileage / km
        </label>
        <div className={s.inputWrap}>
          <input
            id="mileageFrom"
            name="mileageFrom"
            type="text"
            placeholder="From"
            className={clsx(s.input, s.left)}
            onChange={handleMinMileageChange}
            value={minMileage}
          />
          <input
            id="mileageTo"
            name="mileageTo"
            type="text"
            placeholder="To"
            className={clsx(s.input, s.right)}
            onChange={handleMaxMileageChange}
            value={maxMileage}
          />
        </div>
      </div>

      <Button label="Search" size="small" type="submit" />
    </form>
  );
};

export default FilterPanel;
