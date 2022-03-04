import {format, sub} from 'date-fns';

export const getDateFrom = (): string =>
  format(sub(new Date(), {days: 3}), 'Y-MM-dd');

export const getDateTo = (): string => format(new Date(), 'Y-MM-dd');
