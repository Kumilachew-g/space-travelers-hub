const getAPI = async (URL) => {
  const request = await fetch(URL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const response = await request.json();
  return response;
};

export default getAPI;
