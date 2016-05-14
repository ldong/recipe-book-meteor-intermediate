/**
 * Created by ldong on 5/14/16.
 */
Template.ShoppingList.onCreated(function(){
  var self = this;
  self.autorun(function(){
    self.subscribe('recipes');
  });
});

Template.ShoppingList.helpers({
  shoppingList: () => {
    return Recipes.find({inMenu: true});
  }
});