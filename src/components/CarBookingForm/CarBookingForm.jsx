import { toast } from 'react-hot-toast';
import Button from '../Button/Button';
import s from './CarBookingForm.module.css';
import ReactDatePicker from '../ReactDatePicker/ReactDatePicker';

const CarBookingForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    toast.success('Booking successful!');
  };

  return (
    <div className={s.container}>
      <h3 className={s.subheading}>Book your car now</h3>
      <p className={s.bookInfo}>Stay connected! We are always ready to help you.</p>
      <form onSubmit={handleSubmit} className={s.form}>
        <div className={s.formWrap}>
          <label>
            <input type="text" className={s.input} placeholder="Name*" required />
          </label>
          <label>
            <input type="email" className={s.input} placeholder="Email*" required />
          </label>

          <label>
            <ReactDatePicker />
          </label>

          <textarea
            name="comment"
            id="comment"
            placeholder="Comment"
            className={s.textarea}
          ></textarea>
        </div>
        <Button label="Send" size="small" type="submit" />
      </form>
    </div>
  );
};

export default CarBookingForm;
