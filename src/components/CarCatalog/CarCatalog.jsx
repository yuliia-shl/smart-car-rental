import CarItem from '../CarItem/CarItem';
import s from './CarCatalog.module.css';

const CarCatalog = () => {
  return (
    <div className={s.catalog}>
      <CarItem />
      <CarItem />
      <CarItem />
      <CarItem />
    </div>
  );
};

export default CarCatalog;
