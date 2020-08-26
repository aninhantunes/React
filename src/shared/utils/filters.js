import _ from 'lodash';

import { checkStringContainsLetter } from './validation';

export function filterByText(parameters, baseDate, value) {
  if (value) {
    const baseDateFiltered = [];
    baseDate.forEach((item) => {
      const verified = parameters.map((parameter) =>
        checkStringContainsLetter(item[parameter], value)
      );
      const priorityItem = verified.findIndex((item) => item);
      if (priorityItem >= 0) {
        baseDateFiltered.push({ ...item, priority: priorityItem });
      }
    });
    return _.orderBy(baseDateFiltered, ['priority'], ['asc']);
  } else {
    return baseDate ? baseDate : [];
  }
}
