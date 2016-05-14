/**
 * Created by ldong on 5/14/16.
 */

Meteor.subscribe('recipes');


Template.Recipes.helpers({
  recipes: () => {
    return Recipes.find({});
  }
});