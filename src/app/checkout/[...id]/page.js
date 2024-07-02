import { getServicesDetails } from "@/app/service/[id]/page";
import Checkout from "@/components/checkoutpage/Checkout";
import axios from "axios";
import UpdateBooking from "@/components/updateBookings/UpdateBooking";
export let metadata = {
  title: "",
  description: "",
};
export default async function CheckoutPage({ params }) {
  if (params.id.length < 2) {
    const service = await getServicesDetails(params.id[0]);
    metadata.title = service?.title;
    metadata.description = service?.description;
    console.log(params);
    return (
      <>
        <Checkout id={params.id[0]} service={service} />
      </>
    );
  } else {
    const getBookingsDetails = async (id) => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/bookings/${id}`,
        );
        return res.data;
      } catch (error) {
        console.error(error);
      }
    };
    const booking = await getBookingsDetails(params.id[1]);
    metadata.title = booking?.service_name;
    metadata.description = booking?.email;
    return (
      <>
        <UpdateBooking booking={booking} />
      </>
    );
  }
}
