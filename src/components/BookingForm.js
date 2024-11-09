import { useState } from 'react';

const BookingForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const [availableTimes, setAvailableTimes] = useState(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
  const [occasions, setOccassions] = useState(['Birthday', 'Anniversary']);
  const [reservationDate, setReservationDate] = useState();
  const [reservationTime, setReservationTime] = useState();
  const [reservationGuests, setReservationGuests] = useState();
  const [reservationOccasion, setReservationOccasion] = useState();

  const changeResDate = (e) => {
    setReservationDate(e.target.value);
  }

  const changeResTime = (e) => {
    setReservationTime(e.target.value);
  }

  const changeResGuests = (e) => {
    setReservationGuests(e.target.value);
  }

  const changeResOccasion = (e) => {
    setReservationOccasion(e.target.value);
  }

  return (
    <>
      <form>
        <div>
          <label htmlFor="res-date">Choose Date: </label>
          <input type="date" id="res-date" onChange={changeResDate} />
        </div>
        <div>
          <label htmlFor="res-time">Choose Time: </label>
          <select id="res-time" onChange={changeResTime}>
            <option>-- Select --</option>
            {
              availableTimes.map((time, index) => 
                <option key={index} value={time}>{ time }</option>
              )
            }
          </select>
        </div>
        <div>
          <label htmlFor="res-guests">Number of Guests: </label>
          <input type="number" id="res-guests" placeholder="1" min="1" max="10" onChange={changeResGuests} />
        </div>
        <div>
          <label htmlFor="res-occasion">Occasion: </label>
          <select id="res-occasion" onChange={changeResOccasion}>
            <option>-- Select --</option>
            {
              occasions.map((occasion, index) => 
                <option key={index} value={occasion}>{ occasion }</option>
              )
            }
          </select>
        </div>
        <div>
          <button type="submit" className="little-lemon-btn" onClick={handleSubmit}>Make your reservation</button>&nbsp;&nbsp;
          <button type="reset" className="little-lemon-btn-reset">Reset</button>
        </div>
      </form>
    </>
  )

}

export default BookingForm;