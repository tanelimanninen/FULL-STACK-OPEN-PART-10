export const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
};

export const ratingNumber = (value) => {
    return (value / 10);
}

export const formatNumber = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(1)}k`;
    }
    return value.toString();
};