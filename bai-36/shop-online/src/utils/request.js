const API_DOMAIN = "http://localhost:3002/";

export const get = async (url) => {
  const response = await fetch(API_DOMAIN + url);
  const result = await response.json();
  return result;
}

export const post = async (url, data) => {
  const response = await fetch(API_DOMAIN + url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  const result = await response.json();
  return result;
}

export const del = async (url) => {
  const response = await fetch(API_DOMAIN + url, {
    method: 'DELETE',
  });

  const result = await response.json();
  return result;
}

export const patch = async (url, data) => {
  const response = await fetch(API_DOMAIN + url, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  const result = await response.json();
  return result;
}
