/** Declaration file generated by dts-gen */

import { Observable } from 'rxjs';

export class Model {
    constructor(attributes: { [key: string]: any });

    get(key: string): any;

    get$(key: string): Observable<any>;

    set(key: string, value: any);

    toJS(): Object;

}

export function createModel<T extends Model>(opts: {[name: string]: any}): Class<T>;
