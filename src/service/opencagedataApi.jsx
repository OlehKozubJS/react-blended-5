import axios from 'axios';

const apiKey = 'd4683b09d0c94ec0aebf0b2e043decbf';

export const getUserInfo = async ({ latitude, longitude }) => {
  const urlPosition = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${apiKey}&language=en`;
  const response = await axios.get(urlPosition);
  console.log(response);
};
