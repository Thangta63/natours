/* eslint-disable*/
/* eslint-disable no-undef */
import axios from 'axios';

const stripe = Stripe(
  'pk_test_51OKFUJBSncZuccI3nnKHmx4RrukH88A1tqpEBRZW5KM9SKTl0l7QFRqu7TtDLXi5ccRqjVofUUMZeDdXHacF9u4j00jqGdVaT6'
);

export const bookTour = async tourId => {
  try {
    //1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // console.log(session);
    //2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.log(err);
  }
};
