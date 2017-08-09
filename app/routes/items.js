import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return [
		{id: "1", name: "Item 1", description: "Desc 1"},
		{id: "2", name: "Item 2", description: "Desc 2"},
		{id: "3", name: "Item 3", description: "Desc 3"}
		]
	}
});
