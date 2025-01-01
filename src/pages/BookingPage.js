import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from "../components/Bookings/BookingForm";
import { fetchAPI, submitAPI } from '../assets/api/api';

const updateTimes = (availableTimes, date) => {
  const fetchResponse = fetchAPI(new Date(date));
  return fetchResponse.length > 0 ? fetchResponse : availableTimes;
}

const initTimes = initAvailableTimes => [...initAvailableTimes, ...fetchAPI(new Date())];

const BookingPage = () => {

  const navigate = useNavigate();

  const [
    availableTimes,
    dispatchDateChange
  ] = useReducer(updateTimes, [], initTimes);

  const submitDataToAPI = (formData) => {
    const submitResponse = submitAPI(formData);
    if (submitResponse) {
      navigate('/confirmedBooking');
    }
  }

  return (
    <>
      <main>
        <div className="section-top">&nbsp;</div>
        <div className={'content-container'}>
          <h1 className={'standard'}>Reserve a Table</h1>
          <BookingForm 
            availableTimes={availableTimes} 
            dispatchDateChange={dispatchDateChange}
            submitDataToAPI={submitDataToAPI}
          />
        </div>
      </main>
    </>
  )
}

export default BookingPage;