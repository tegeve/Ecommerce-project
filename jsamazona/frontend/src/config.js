export const apiURL = document.location.href.startsWith('http://localhost')
  ? 'http://localhost:5000'
  : '';