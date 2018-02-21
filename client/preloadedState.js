const preloadedState = [];

if (typeof window !== 'undefined') {
  const geolocation = JSON.parse(window.localStorage.getItem('geolocation'));

  if (geolocation) {
    preloadedState.push({ geolocation });
  }
}

export default Object.assign({}, ...preloadedState);
