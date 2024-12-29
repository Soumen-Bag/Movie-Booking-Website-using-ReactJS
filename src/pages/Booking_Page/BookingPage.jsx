import React, { useState } from "react";
import "../Booking_Page/BookingPage.css";
import Button from "../../Components/Button/Button";
import { useLocation, useParams } from "react-router";
import ReactModal from "react-modal";
import { bookMovie } from "../../api";
import { toast } from "react-toastify";
import ProtectedRouting from "../../layout/ProtectedRouting";
const time = ["12:15 PM", "03:15 PM", "06:15 PM", "09:15 PM"];
const BookingPage = () => {
  const [quantity, setQuantity] = useState(1);
  const ticketPrice = 130;
  const location = useLocation();
  const movieDetails = location.state;
  // const totalPrice
  const getNextFiveDates = () => {
    const today = new Date();
    const dates = [];
    for (let i = 0; i < 5; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      dates.push({
        dd: nextDay.getDate(),
        mm: nextDay.getMonth(),
        yyyy: nextDay.getFullYear(),
      });
    }
    return dates;
  };

  const dates = getNextFiveDates();
  const [selectDate, SetSelectdate] = useState({});
  const [selectTime, SetSelectTime] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    window.location.href = "/profile#bookings";
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      
    },
  };

  const onMovieBookingPress = async () => {
    if (
      movieDetails != null &&
      selectDate?.dd != undefined &&
      selectTime != ""
    ) {
      const movie = {
        id: `ORD_${Date.now()}`,
        movie: movieDetails,
        bookedDate: `${selectDate.yyyy}-${selectDate.mm}-${selectDate.dd}`,
        ticketQuantity: quantity,
        totalPrice: ticketPrice * quantity,
        time: selectTime,
      };
      await bookMovie(movie);
      openModal();
    } else {
      toast.error("Select Date & Time");
    }
  };
  return (
    <ProtectedRouting>
      <div className="booking-page-main-div">
      <h1>{movieDetails?.title}</h1>
      <h4>Date</h4>
      {/* date */}
      <div className="booking-page-dates">
        {dates.map((item) => {
          const isSelected = selectDate.dd == item.dd;
          return (
            <Button
              className="date-button"
              label={item.dd}
              active={isSelected}
              onClick={() => SetSelectdate(item)}
            />
          );
        })}
      </div>
      <div className="booking-page-underline"></div>
      <h4>Time</h4>
      <div className="booking-page-dates">
        {time.map((item) => {
          let isSelected = selectTime === item;
          return (
            <Button
              className="time-button"
              label={item}
              active={isSelected}
              onClick={() => SetSelectTime(item)}
            />
          );
        })}
      </div>
      <div className="booking-page-ticket">
        <div className="booking-page-ticket-price">
          <p>
            Ticket Price: <span className="span-ticket-price">{ticketPrice} rs</span>
          </p>
          <p>
            Total Price: <span className="span-ticket-price">{ticketPrice * quantity} rs</span>
          </p>
        </div>
        <div className="booking-page-ticket-seat">
          <p>Total number of seat: </p>
          <div className="icrement-decrement-button-div">
            <Button
              className="icrement-decrement-button"
              label="–"
              onClick={() =>
                quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
              }
            />
            <span>{quantity}</span>
            <Button
              className="icrement-decrement-button"
              label="+"
              onClick={() =>
                quantity < 10 ? setQuantity(quantity + 1) : setQuantity(10)
              }
            />
          </div>
          <p className="icrement-decrement-button-div-max">
            *maximun 10 number ticket allow
          </p>
        </div>
      </div>

      <Button
        className="confirm-button"
        label="Confirm Booking"
        onClick={onMovieBookingPress}
      />

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <div class="modal__content">
          <h3>CONGRATULATIONS!</h3>

          <p>
            Your’ve bought {quantity} tickets. Please, save it on your device
            and show before the entering to the theatre
          </p>

          <Button
            className="modal-button"
            label="Save Ticket"
            onClick={closeModal}
          />
          <button
            type="button"
            onClick={closeModal}
            href="#"
            class="modal__close"
          >
            &times;
          </button>
        </div>
      </ReactModal>
    </div>
    </ProtectedRouting>
  );
};

export default BookingPage;
