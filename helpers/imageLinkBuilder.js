export const ImageLinkBuilder = (id) => {
  if (Boolean(id)) {
    return `https://image.tmdb.org/t/p/w400${id}`;
  }
};
