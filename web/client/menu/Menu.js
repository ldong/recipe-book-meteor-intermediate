/**
 * Created by ldong on 5/14/16.
 */

Template.Menu.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('recipes');
  })
});


Template.Menu.helpers({
  recipes: () => {
    return Recipes.find({inMenu: true});
  }
});