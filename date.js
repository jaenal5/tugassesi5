function getCurrentDate() {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

function getDayOfWeek() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const today = new Date();
  return days[today.getDay()];
}

module.exports = {
  getCurrentDate,
  getDayOfWeek
};