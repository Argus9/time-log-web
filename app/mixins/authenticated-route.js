import Mixin from '@ember/object/mixin';
import { inject as service } from "@ember/service";

export default Mixin.create({
  session: service(),

  beforeModel(transition) {
    if (!this.session.isAuthenticated) {
      transition.abort();
      this.session.set('attemptedTransition', transition);
      this.transitionTo('login');
    }
  }
});
