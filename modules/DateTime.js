import { DateTime } from '../node_modules/luxon/src/luxon.js';

const showCurrentTime = document.querySelector('.current-time');

export const showDateTime = () => {
  const dt = DateTime.now();
  showCurrentTime.textContent = dt
    .toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)
    .slice(0, -5);
};

export default {
  showDateTime,
};
