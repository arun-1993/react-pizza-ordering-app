export function formatCurrency(value) {
    return new Intl.NumberFormat("en", {
        style: "currency",
        currency: "EUR",
    }).format(value);
}

export function formatDate(dateString) {
    return new Intl.DateTimeFormat("en", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
        minute: "2-digit",
    }).format(new Date(dateString));
}

export function calculateMinutesLeft(dateString) {
    const time1 = new Date().getTime();
    const time2 = new Date(dateString).getTime();
    return Math.round((time2 - time1) / 60000);
}
