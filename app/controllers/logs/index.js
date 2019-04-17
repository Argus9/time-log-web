import Controller from '@ember/controller';
import { computed } from "@ember/object";
import moment from "moment";

export default Controller.extend({
  queryParams: ["date"],
  date: null,

  filteredLogs: computed("model", "date", function() {
    const date = this.date;
    const logs = this.model;

    if (date) {
      return logs.filter(function(log) {
        return moment(log.date).format("YYYY-MM-DD") == date;
      });
    } else {
      return logs;
    }
  })
});
