import Ember from 'ember';
import layout from '../templates/components/modal-tile';

export default Ember.Component.extend({
    actions: {
        toggleModal: function() {
            this.toggleProperty('enabled');
            // Joel wuz here!
        }
    },
    layout: layout
});
