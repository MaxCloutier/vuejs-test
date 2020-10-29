export const formatAddress = (address) => {
  if (!address) {
    return "";
  }
  const { city, country, state, street, zipCode } = address;

  return [city, country, state, street, zipCode].filter(Boolean).join(", ");
};

export const getMainContact = (contacts) => {
  if (!contacts) {
    return {};
  }

  return contacts.main;
};

export const formatContact = (contact) => {
  if (!contact) {
    return "";
  }
  const { firstName, lastName } = contact;

  return [firstName, lastName].filter(Boolean).join(" ");
};
