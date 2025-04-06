import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import clsx from 'clsx';
import Button from '../Button/Button';
import s from './FilterPanel.module.css';
import { selectBrands } from '../../redux/cars/selectors';
import { fetchBrands, fetchCars } from '../../redux/cars/operations';
import { clearCars } from '../../redux/cars/slice';
import { selectFilters } from '../../redux/filters/selectors';
import Select from 'react-select';
import {
  changeBrand,
  changeMaxMileage,
  changeMinMileage,
  changeRentalPrice,
  clearFilter,
} from '../../redux/filters/slice';
import { customStyles } from '../../utils/customStyles';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const brands = useSelector(selectBrands);
  const [searchParams, setSearchParams] = useSearchParams();
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

  const handleBrandChange = selectedOption => {
    dispatch(changeBrand(selectedOption.value));
  };

  const handlePriceChange = selectedOption => {
    dispatch(changeRentalPrice(selectedOption.value));
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

  const brandOptions = brands.map(brand => ({
    value: brand,
    label: brand,
  }));

  const priceOptions = [...Array(18)].map((_, i) => ({
    value: 30 + i * 10,
    label: `${30 + i * 10} $`,
  }));

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.labelWrap}>
        <label htmlFor="brand" className={s.label}>
          Car brand
        </label>
        <div className={s.selectWrapper}>
          <Select
            id="brand"
            name="brand"
            className={clsx(s.select)}
            options={brandOptions}
            value={brandOptions.find(option => option.value === filterBrand)}
            onChange={handleBrandChange}
            placeholder="Choose a brand"
            styles={customStyles}
          />
        </div>
      </div>

      <div className={s.labelWrap}>
        <label htmlFor="price" className={s.label}>
          Price/ 1 hour
        </label>
        <div className={s.selectWrapper}>
          <Select
            id="price"
            name="price"
            className={clsx(s.select)}
            options={priceOptions}
            value={priceOptions.find(option => option.value === rentalPrice)}
            onChange={handlePriceChange}
            placeholder="Choose a price"
            styles={customStyles} // Apply custom styles
          />
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
