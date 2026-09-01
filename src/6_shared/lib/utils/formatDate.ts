const formatDate = (date: string | number, isHour?: boolean, isMinute?: boolean) => {
  const currentDate = new Date(date);

  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: isHour ? 'numeric' : undefined,
    minute: isMinute ? 'numeric' : undefined,
  }).format(currentDate);
};

export default formatDate;
