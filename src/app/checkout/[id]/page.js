import { getServicesDetails } from "@/app/service/[id]/page";
import Checkout from "@/components/checkoutpage/Checkout";
export let metadata = {
  title: "",
  description: "",
};
export default async function CheckoutPage({ params }) {
  const service = await getServicesDetails(params.id);
  metadata.title = service?.title;
  metadata.description = service?.description;
  return (
    <>
      <Checkout id={params.id} service={service} />
    </>
  );
}
