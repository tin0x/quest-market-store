export const orderingType = {
  topRated: {
    where: 'cover != null & rating_count > 500',
    sort: 'rating desc',
  },

  popular: {
    where: 'cover != null',
    sort: 'popularity desc',
  },

  mostReviewed: {
    where: 'cover != null',
    sort: 'rating_count desc',
  },

  newest: {
    where: 'cover != null',
    sort: 'first_release_date desc',
  },

  anticipated: {
    where: 'cover != null & hypes > 0',
    sort: 'hypes desc',
  },

  trending: {
    where: 'cover != null & follows > 100',
    sort: 'follows desc',
  },

  classics: {
    where: 'cover != null & rating > 90 & rating_count > 2000',
    sort: 'rating desc',
  },
};
