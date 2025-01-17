import { Base } from '..';
import { QuotaSchema } from './types';

export class QuotaApi extends Base {
  get() {
    this.request(QuotaSchema, '/quota');
  }
}
