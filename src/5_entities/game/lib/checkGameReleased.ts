const checkGameReleased = (value: string | null) => {
  if (!value) return false;

  const releaseDate = new Date(value).getTime();
  const now = Date.now();

  return now >= releaseDate;
};

export default checkGameReleased;
