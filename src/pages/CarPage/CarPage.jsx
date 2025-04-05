import CarBookingForm from '../../components/CarBookingForm/CarBookingForm';
import CarInfo from '../../components/CarInfo/CarInfo';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarById, selectError, selectLoading } from '../../redux/cars/selectors';
import { fetchCarById } from '../../redux/cars/operations';
import s from './CarPage.module.css';
import clsx from 'clsx';

const CarPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const carById = useSelector(selectCarById);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const { brand, model, img } = carById;

  useEffect(() => {
    if (!id) return;
    dispatch(fetchCarById(id));
  }, [dispatch, id]);

  if (isLoading || !carById) {
    return <p>Loading...</p>;
  }

  return (
    <div className={clsx('container', s.carPage)}>
      {error && <b>{error}</b>}
      <div className={s.leftWrap}>
        <img
          alt={`${brand} ${model} picture`}
          src={img}
          width={640}
          height={512}
          className={s.img}
        />
        <CarBookingForm />
      </div>
      {!isLoading && carById && <CarInfo carById={carById} />}
    </div>
  );
};

export default CarPage;
