/**
 * Created by ldong on 5/14/16.
 */

// Meteor.subscribe('recipes');

Template.RecipeSingle.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('recipes');
  });
});

Template.RecipeSingle.helpers({
  recipe: () => {
    var id = FlowRouter.getParam('id');
    return Recipes.findOne({_id: id});
  }
});