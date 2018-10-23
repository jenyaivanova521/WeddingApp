import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { take, filter } from 'rxjs/operators';

import { State } from './state';
//import { Profile } from '../common-models';
