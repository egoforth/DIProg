import Ember from 'ember';

export default Ember.Controller.extend({
	name: 'My Store',
	items: [1,2,3,4],
	products: [
    {
        "name": "Product 1",
        "desc": "Desc 1",
        "cost": 10000.95,
        "maxQty": 7,
        "qty": 2
    },
    {
        "name": "Product 2",
        "desc": "Desc 2",
        "cost": 2.95,
        "maxQty": 6,
        "qty": 1
    },
    {
        "name": "Product 3",
        "desc": "Desc 3",
        "cost": 3.95,
        "maxQty": 4,
        "qty": 3
    },
    {
        "name": "Product 4",
        "desc": "Desc 4",
        "cost": 4.95,
        "maxQty": 3,
        "qty": 1
    },
]
});
