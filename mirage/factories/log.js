import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  date() { return faker.date.recent(); },
  minutesSpent() { return faker.random.number(480); },
  workDescription() { return "Did some meaningful work"; }
});
