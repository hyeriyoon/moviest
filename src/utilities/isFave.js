function isFave(array, path, id) {
  if (path === "/faves") {
    return true;
  }

  if (array.length === 0) {
    return false;
  }

  return array.some((obj) => obj.id === id);
}

export default isFave;
