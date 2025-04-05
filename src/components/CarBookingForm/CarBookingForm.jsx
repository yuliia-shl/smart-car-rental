import Button from '../Button/Button';
import s from './CarBookingForm.module.css';

const CarBookingForm = () => {
  return (
    <div className={s.container}>
      <h3 className={s.subheading}>Book your car now</h3>
      <p className={s.bookInfo}>Stay connected! We are always ready to help you.</p>
      <form action="" className={s.form}>
        <div className={s.formWrap}>
          <label>
            <input type="text" className={s.input} placeholder="Name*" />
          </label>
          <label>
            <input type="text" className={s.input} placeholder="Email*" />
          </label>
          <label>
            <input type="text" className={s.input} placeholder="Booking date" />
          </label>

          <textarea name="" id="" placeholder="Comment" className={s.textarea}></textarea>
        </div>
        <Button label="Send" size="small" type="submit" />
      </form>
    </div>
  );
};

export default CarBookingForm;
