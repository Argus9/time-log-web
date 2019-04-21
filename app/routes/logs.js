import Route from '@ember/routing/route';
import AuthenticatedRouteMixin from "ember-simple-auth/mixins/authenticated-route-mixin";

export default Route.extend(AuthenticatedRouteMixin, {
  async model() {
    const logs = await this.store.findAll("log");
    return logs.sortBy("date");
  }
});
