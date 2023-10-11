import { useLoaderData } from "react-router-dom";

import { getOrder } from "../../services/apiRestaurant";
import {
    calculateMinutesLeft,
    formatCurrency,
    formatDate,
} from "../../utils/helpers";

export default function Order() {
    const order = useLoaderData();
    const { status, priority, priorityPrice, orderPrice, estimatedDelivery } =
        order;
    const deliveryIn = calculateMinutesLeft(estimatedDelivery);

    return (
        <div>
            <div>
                <h2>Status</h2>

                <div>
                    {priority && <span>Priority </span>}
                    <span>{status} order</span>
                </div>
            </div>

            <div>
                <p>
                    {deliveryIn >= 0
                        ? `Only ${calculateMinutesLeft(
                              estimatedDelivery
                          )} minutes left 😃`
                        : "Order should have arrived"}
                </p>
                <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
            </div>

            <div>
                <p>Price pizza: {formatCurrency(orderPrice)}</p>
                {priority && (
                    <p>Price priority: {formatCurrency(priorityPrice)}</p>
                )}
                <p>
                    To pay on delivery:{" "}
                    {formatCurrency(orderPrice + priorityPrice)}
                </p>
            </div>
        </div>
    );
}

export async function loader({ params }) {
    const order = await getOrder(params.orderId);
    return order;
}
