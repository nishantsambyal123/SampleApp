export default function request(URL, method, headers = {}, body, formData) {
  return fetch(URL, {
    method,
    headers,
    body: body ? JSON.stringify(body) : formData,
  });
}
