import { getServicesDetails } from "@/app/service/[id]/page";
import Checkout from "@/components/checkoutpage/Checkout";
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
        const res = await fetch(`http://localhost:3000/api/bookings/${id}`);
        const bookingDetails = await res.json();
        return bookingDetails;
      } catch (error) {
        console.error(error);
      }
    };
    const booking = await getBookingsDetails(params.id[1]);
    console.log(booking);
    return <h1>Hi</h1>;
  }
}
