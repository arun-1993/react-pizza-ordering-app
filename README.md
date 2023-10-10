# Fast React Pizza

## Project Requirements

-   A very simple react app where users can order one or more pizzas from a menu.
-   Requires no user accounts and no login. Users just input their name before using the app.
-   The pizza menu can change. So it needs to be loaded from an API.
-   Users can add multiple pizzas to a cart before ordering.
-   Ordering required just the user's name, phone number and address.
-   If possible, a GPS location should also be provided to make delivery easier.
-   Users can mark their order as priority for an additional 20% of the cart price.
-   Orders are made by sending a POST request with the order data (user's data + selected pizzas) to the API.
-   Payments are made on delivery. So no payment is necessary in the app.
-   Each order will get a unique ID that should be displayed so that the user can look up their order later based on the ID.
-   Users should be able to mark their order as priority even after is has been placed.

## Tech Stack Used

-   **Vite** used for the initial project setup.
-   **React Router** used for routing and remote state management.
-   **Tailwind CSS** used for styling.
-   **Redux** used for UI state management.
