import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'span',
	className: ['play'],

	actions: {
		pause: function(){
			this.sendAction('pause');
		},

		play: function(){
			this.sendAction('play');
		}
	}
});