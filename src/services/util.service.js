export const utilService = {
  makeId,
  saveToStorage,
  loadFromStorage,
  getTimePassed,
};

function makeId(length = 5) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function saveToStorage(key, value) {
  localStorage[key] = JSON.stringify(value);
}

function loadFromStorage(key, defaultValue = null) {
  var value = localStorage[key] || defaultValue;
  return JSON.parse(value);
}

function getTimePassed(timestamp) {
  const now = new Date();
  const diff = now - timestamp; // Time difference in milliseconds

  // Convert milliseconds to minutes, hours, days, and weeks
  const minutesPassed = Math.floor(diff / (1000 * 60));
  const hoursPassed = Math.floor(diff / (1000 * 60 * 60));
  const daysPassed = Math.floor(diff / (1000 * 60 * 60 * 24));
  const weeksPassed = Math.floor(diff / (1000 * 60 * 60 * 24 * 7));

  // Return appropriate time passed based on the duration
  if (weeksPassed > 0) {
    return weeksPassed + "w";
  } else if (daysPassed > 0) {
    return daysPassed + "d";
  } else if (hoursPassed > 0) {
    return hoursPassed + "h";
  } else {
    return minutesPassed + "m";
  }
}
