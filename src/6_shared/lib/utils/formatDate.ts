const formatDate = (date: string) => {
  const currentDate = new Date(date);

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  }).format(currentDate);
};

export default formatDate;
