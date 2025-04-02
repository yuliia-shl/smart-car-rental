import clsx from 'clsx';
import Button from '../Button/Button';
import s from './FilterPanel.module.css';

const FilterPanel = () => {
  return (
    <form className={s.form}>
      <div className={s.labelWrap}>
        <label htmlFor="brand" className={s.label}>
          Car brand
        </label>
        <select id="brand" name="brand" className={s.select}>
          <option value="Choose a brand">Choose a brand</option>
          <option value="orange">Audi</option>
        </select>
      </div>
      <div className={s.labelWrap}>
        <label htmlFor="price" className={s.label}>
          Price/ 1 hour{' '}
        </label>
        <select id="price" name="price" className={s.select}>
          <option value="">Choose a price</option>
          <option value="orange">Orange</option>
        </select>
      </div>
      <div className={s.labelWrap}>
        <label htmlFor="mileageFrom" className={s.label}>
          Car mileage / km{' '}
        </label>
        <div className={s.inputWrap}>
          <input
            id="mileageFrom"
            name="mileageFrom"
            type="text"
            placeholder="From"
            className={clsx(s.input, s.left)}
          />
          <input
            id="mileageTo"
            name="mileageTo"
            type="text"
            placeholder="To"
            className={clsx(s.input, s.right)}
          />
        </div>
      </div>
      <Button label="Search" size="small" />
    </form>
  );
};

export default FilterPanel;
