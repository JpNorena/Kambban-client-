import { URL } from 'constants/ActionTypes';


async function request(url, method, data) {
  const response = await fetch(`${URL}${url}`, {
    method,
    headers: {
      "Accept": "applicaction/json",
      "Content-Type": "application/json"
    },
    body: data ? JSON.stringify(data) : undefined
  });
  const jsonResponse = await response.json();

  return jsonResponse.data;
}

export function create(data) {
  return request('/create', "POST", data);
}

export function read() {
  return request('/users', "GET");
  console.log(read)
}

export function update(data) {
  return request('/update', "POST", data);
}

export function remove(data) {
  return request('/delete', "DELETE", data);
}
