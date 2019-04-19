import Route from '@ember/routing/route';
import AuthenticatedRoute from "time-log-web/mixins/authenticated-route";

export default Route.extend(AuthenticatedRoute, {
  async model() {
    const logs = await this.store.findAll("log");
    return logs.sortBy("date");
  }
});
