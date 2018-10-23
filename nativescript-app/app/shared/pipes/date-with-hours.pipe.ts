import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

import { DATETIME_FORMAT } from '~/shared/configs';

@Pipe({name: 'dateWithHours'})
export class DateWithHoursPipe implements PipeTransform {
	transform(item): any {
		if (item) {
			return moment(item).format(DATETIME_FORMAT);
		} else {
			return '';
		}
	}
}
