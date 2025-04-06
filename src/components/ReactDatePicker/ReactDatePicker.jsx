import { useState } from 'react';
import DatePicker from 'react-datepicker';
import s from './ReactDatePicker.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import { enGB } from 'date-fns/locale';
import { format } from 'date-fns';

const ReactDatePicker = () => {
  const [startDate, setStartDate] = useState(null);
  const customDay = date => {
    return format(date, 'EEE', { locale: enGB }); // 'EEE' дає трилітерні дні
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        placeholderText="Booking date"
        dateFormat="yyyy/MM/dd"
        className={s.datepickerInput}
        wrapperClassName={s.datepickerWrapper}
        locale={enGB}
        dayClassName={date => customDay(date)}
      />
    </div>
  );
};

export default ReactDatePicker;
