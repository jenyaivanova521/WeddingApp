import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

import { DATE_FORMAT } from '~/shared/configs';

@Pipe({name: 'fullDate'})
export class FullDatePipe implements PipeTransform {
	transform(item): any {
		if (item) {
			return moment(item).format(DATE_FORMAT);
		} else {
			return '';
		}
	}
}
