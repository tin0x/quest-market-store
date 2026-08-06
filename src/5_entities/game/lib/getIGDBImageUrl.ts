const getIGDBImageUrl = (url: string | null, size = 't_1080p') => {
  if (!url) return '';

  const normalizedUrl = url.startsWith('//') ? `https:${url}` : url;

  return normalizedUrl.replace('t_thumb', size);
};

export default getIGDBImageUrl;
