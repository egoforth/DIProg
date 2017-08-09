import Ember from 'ember';

export function prod(params/*, hash*/) {
  var n = params[0] * params[1]
  return "$"+n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
}

export default Ember.Helper.helper(prod);
