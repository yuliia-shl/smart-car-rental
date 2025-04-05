export const parsedAddress = address => {
  if (!address) return { city: '', country: '' };
  const addressParts = address.split(', ');
  const city = addressParts[1];
  const country = addressParts[2];
  return { city, country };
};

export const parsedId = imgUrl => {
  if (!imgUrl) return '';
  const id = imgUrl.split('/').pop()?.split('-');
  return id ? id[0] : '';
};
