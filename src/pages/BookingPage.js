import BookingForm from "../components/BookingForm";

const BookingPage = () => {

  return (
    <>
      <main>
        <div className="section-top">&nbsp;</div>
        <div className={'content-container'}>
          <h1 className={'standard'}>Reserve a Table</h1>
          <BookingForm />
        </div>
      </main>
    </>
  )
}

export default BookingPage;