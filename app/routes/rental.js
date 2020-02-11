import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';


export default class RentaleRoute extends Route {
	@service store;
  async model(params) {
   	
   	return this.store.find('rental',params.rental_id);
   }
}