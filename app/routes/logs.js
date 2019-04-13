import Route from '@ember/routing/route';

export default Route.extend({
  async model() {
    const logs = await this.store.findAll("log");
    return logs.sortBy("date");
  }
});
