import { module, test } from "qunit";
import { setupTest } from "ember-qunit";

module("Unit | Model | log", function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test("it exists", function(assert) {
    let store = this.owner.lookup("service:store");
    let model = store.createRecord("log", {});
    assert.ok(model);
  });

  test("formattedMinutesSpent handles null values", function(assert) {
    let store = this.owner.lookup("service:store");
    let model = store.createRecord("log", {});
    assert.equal(model.get("formattedMinutesSpent"), "0h 0m");
  });

  test("formattedMinutesSpent successfully converts minutes to an hours and minutes format", function(assert) {
    let store = this.owner.lookup("service:store");
    let model = store.createRecord("log", { minutesSpent: 0 });
    assert.equal(model.get("formattedMinutesSpent"), "0h 0m");

    model.set("minutesSpent", 59);
    assert.equal(model.get("formattedMinutesSpent"), "0h 59m");

    model.set("minutesSpent", 60);
    assert.equal(model.get("formattedMinutesSpent"), "1h 0m");

    model.set("minutesSpent", 61);
    assert.equal(model.get("formattedMinutesSpent"), "1h 1m");

    model.set("minutesSpent", 9999999999);
    assert.equal(model.get("formattedMinutesSpent"), "166666666h 39m");
  });
});
