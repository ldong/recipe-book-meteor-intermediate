/**
 * Created by ldong on 5/14/16.
 */
Template.Recipe.events({
  'click .toggle-menu': function(){
    console.log('clicked');
    Meteor.call('toggleMenuItem', this._id, this.inMenu);
  }
});


Template.Recipe.helpers({
  updateRecipeId: function() {
    return this._id;
  }
});