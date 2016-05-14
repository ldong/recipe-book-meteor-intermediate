/**
 * Created by ldong on 5/14/16.
 */
Template.Recipe.onCreated(function(){
  this.editMode = new ReactiveVar(false);

  // this.editMode = new ReactiveVar();
  // this.editModel.set(false)


});

Template.Recipe.events({
  'click .toggle-menu': function(){
    console.log('clicked');
    Meteor.call('toggleMenuItem', this._id, this.inMenu);
  },
  'click .fa-trash': function(){
    console.log('this', this);
    Meteor.call('deleteRecipe', this._id);
  },
  'click .fa-pencil': function(event, template){
    // console.log('this', this);
    // Session.set('editMode', !Session.get('editMode'));
    template.editMode.set(!template.editMode.get());
  }
});


Template.Recipe.helpers({
  updateRecipeId: function() {
    return this._id;
  },

  editMode: function(){
    return Template.instance().editMode.get();
  }
});