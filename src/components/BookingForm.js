import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const BookingForm = () => {

  const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  const [occasions, setOccassions] = useState(['Birthday', 'Anniversary']);
  const [reservationDate, setReservationDate] = useState();
  const [reservationTime, setReservationTime] = useState();
  const [reservationGuests, setReservationGuests] = useState();
  const [reservationOccasion, setReservationOccasion] = useState();

  const formik = useFormik({
    initialValues: {
      date: (new Date()).toLocaleDateString('en-US'),
      time: 'default',
      guests: 1,
      occasion: 'default'
    },
    onSubmit: (values) => {
      const response = true //submitAPI(values);
      if (response) {
        // action
      };
    },
    validationSchema: Yup.object({
      date: Yup.date().required('Date is required.'),
      time: Yup.string().oneOf(availableTimes).required('Time is required.'),
      guests: Yup.number().min(1, 'Must be at least 1.').max(10, 'No more than 10 guests.').required('Number of guests is required.'),
      occasion: Yup.string().oneOf(occasions).required('Occasion is required.'),
    }),
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="res-date">Choose Date: </label>
          <input type="date" id="res-date" {...formik.getFieldProps('date')} />
          <div className={'error-msg'}>
            {formik.touched.date && formik.errors.date}
          </div>
        </div>
        <div>
          <label htmlFor="res-time">Choose Time: </label>
          <select id="res-time" {...formik.getFieldProps('time')}>
            <option value={'default'}>-- Select --</option>
            {
              availableTimes.map((time, index) => 
                <option key={index} value={time}>{ time }</option>
              )
            }
          </select>
          <div className={'error-msg'}>
            {formik.touched.time && formik.errors.time}
          </div>
        </div>
        <div>
          <label htmlFor="res-guests">Number of Guests: </label>
          <input type="number" id="res-guests" placeholder="1" min="1" max="10" {...formik.getFieldProps('guests')} />
          <div className={'error-msg'}>
            {formik.touched.guests && formik.errors.guests}
          </div>
        </div>
        <div>
          <label htmlFor="res-occasion">Occasion: </label>
          <select id="res-occasion" {...formik.getFieldProps('occasion')}>
            <option value={'default'}>-- Select --</option>
            {
              occasions.map((occasion, index) => 
                <option key={index} value={occasion}>{ occasion }</option>
              )
            }
          </select>
          <div className={'error-msg'}>
            {formik.touched.occasion && formik.errors.occasion}
          </div>
        </div>
        <div>
          <button type="submit" className="little-lemon-btn">Make your reservation</button>&nbsp;&nbsp;
          <button type="reset" className="little-lemon-btn-reset">Reset</button>
        </div>
      </form>
    </>
  )

}

export default BookingForm;