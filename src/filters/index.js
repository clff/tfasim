import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import he from 'dayjs/locale/he';

dayjs.extend(relativeTime);
dayjs.locale(he);

const filters = {
  date (value, format = 'en-GB') {
    if (!(value instanceof Date)) {
      if (isNaN(Date.parse(value))) {
        return value;
      }
    }
    return new Date(value).toLocaleDateString(format);
  },

  dateTime (value, format = 'en-GB') {
    if (!(value instanceof Date)) {
      if (isNaN(Date.parse(value))) {
        return value;
      }
      value = new Date(value);
    }
    return `${value.toLocaleDateString(format)} ${value.toLocaleTimeString(format, { hour: '2-digit', minute: '2-digit' })}`;
  },

  timeAgo (date, noFuture) {
    if (!date) { return ''; }

    if (noFuture && dayjs(date).isAfter()) {
      return 'עכשיו';
    }
    return dayjs(date).fromNow();
  },

  currency (value, currency = 'ils') {
    currency ||= 'ils';
    currency = currency.toLowerCase();
    if (currency === 'nis') {
      currency = 'ils';
    }
    let result;
    try {
      result = new Intl.NumberFormat('he-IL', {
        style: 'currency',
        currency
      }).format(value);
    } catch {
      result = value.toLocaleString('he-IL', { minimumFractionDigits: 2 });
    }
    return result.includes('NaN') ? '' : result;
  },

  number (value, decimals = 0) {
    const float = parseFloat(value);
    return Number.isNaN(float) ? value : float.toLocaleString('he-IL', { minimumFractionDigits: decimals });
  }

};

export default {
  install (app) {
    app.config.globalProperties.$filters = filters;
  }
};
