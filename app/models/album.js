inport DS from 'ember-data';
var attr = DS.attr,
hasMany = DS.hasMany;

export default DS.Model.extend({
	artwork: attr('string'),
	name: attr('string'),
	artist: attr('string'),
	isExplicit: attr('boolean'),
	songs: hasMany('song')
});