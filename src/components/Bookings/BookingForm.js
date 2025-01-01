import { useState } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import dayjs from 'dayjs';

const BookingForm = ({
  availableTimes,
  dispatchDateChange,
  submitDataToAPI
}) => {

  const occasions = ['Birthday', 'Anniversary'];

  const validationSchema = Yup.object().shape({
    res_date: Yup.date().required('Date is required.'),
    res_time: Yup.string().oneOf(availableTimes).required('Time is required.'),
    res_guests: Yup.number().min(1, 'Must be at least one guest.').max(10, 'No more than 10 guests.').required('Number of guests is required.'),
    res_occasion: Yup.string().oneOf(occasions).required('Occasion is required.'),
  });

  const initialValues = {
    res_date: dayjs().format('YYYY-MM-DD'),
    res_time: 'default',
    res_guests: 1,
    res_occasion: 'default'
  }

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name === 'res_date') {
      dispatchDateChange(value);
    }
  }

  const handleSubmit = (values) => {
    submitDataToAPI(values);
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit} onChange={handleOnChange}>
            <label htmlFor='res_date'>Choose Date: </label>
            <Field type='date' id='res_date' name='res_date' />
            <ErrorMessage name='res_date' component={'div'} className={'error'} />
            
            <label htmlFor='res_time'>Choose Time: </label>
            <Field as='select' id='res_time' name='res_time'>
              <option value={'default'}>-- Select --</option>
              {
                availableTimes.map((time, index) => 
                  <option key={index} value={time}>{ time }</option>
                )
              }
            </Field>
            <ErrorMessage name='res_time' component={'div'} className={'error'} />
            
            <label htmlFor='res_guests'>Number of Guests: </label>
            <Field type='number' id='res_guests' name='res_guests' />
            <ErrorMessage name='res_guests' component={'div'} className={'error'} />

            <label htmlFor='res_occasion'>Occasion: </label>
            <Field as='select' id='res_occasion' name='res_occasion'>
              <option value={'default'}>-- Select --</option>
              {
                occasions.map((occasion, index) => 
                  <option key={index} value={occasion}>{ occasion }</option>
                )
              }
            </Field>
            <ErrorMessage name='res_occasion' component={'div'} className={'error'} />
            
            <div className={'little-lemon-btn-group'}>
              <button type="submit" className="little-lemon-btn">Make your reservation</button>&nbsp;&nbsp;
              <button type="reset" className="little-lemon-btn-reset">Reset</button>
            </div>
          </form>
        )}
      </Formik>
    </>
  )

}

export default BookingForm;