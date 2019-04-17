import DS from 'ember-data';
import { computed } from "@ember/object";

const { Model, attr } = DS;

export default Model.extend({
  date: attr("date"),
  minutesSpent: attr("number"),
  workDescription: attr("string"),

  formattedMinutesSpent: computed("minutesSpent", function() {
    if (this.minutesSpent) {
      return Math.floor(this.minutesSpent / 60) + "h " + (this.minutesSpent % 60) + "m";
    } else {
      return "0h 0m";
    }
  })
});
