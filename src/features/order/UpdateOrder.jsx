/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";

function UpdateOrder({ order }) {
  const navigate = useNavigate();

  const handleMakePriority = async () => {
    const data = { priority: true };
    await updateOrder(order.id, data);
    navigate(`/order/${order.id}`);
  };

  return (
    <div className="text-right">
      <Button type="primary" onClick={handleMakePriority}>
        Make priority
      </Button>
    </div>
  );
}

export default UpdateOrder;
// eslint-disable-next-line no-unused-vars
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}
