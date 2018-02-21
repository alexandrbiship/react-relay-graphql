export default (texts) => {
  const prevStorage = JSON.parse(window.localStorage.getItem('recents')) || [];
  const newStorage = [];
  let found;
  prevStorage.forEach(storedItem => {
    if (storedItem.title === texts.title) {
      found = storedItem;
    } else {
      newStorage.push(storedItem);
    }
  });
  newStorage.unshift(found || texts);
  if (newStorage.length > 3) newStorage.pop();
  window.localStorage.setItem('recents', JSON.stringify(newStorage));
};
