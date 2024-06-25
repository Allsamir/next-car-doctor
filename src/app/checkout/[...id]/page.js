import { getServicesDetails } from "@/app/service/[id]/page";
import Checkout from "@/components/checkoutpage/Checkout";
import axios from "axios";
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
        const res = await axios.get(`http://localhost:3000/api/bookings/${id}`);
        return res.data;
      } catch (error) {
        console.error(error);
      }
    };
    const booking = await getBookingsDetails(params.id[1]);
    metadata.title = booking?.service_name;
    metadata.description = booking?.email;
    return <h1>Hi</h1>;
  }
}
