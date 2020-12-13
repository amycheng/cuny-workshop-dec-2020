export default function fetchData() {
  return fetch('/fake-api.json')
  .then(response => response.json())
}
