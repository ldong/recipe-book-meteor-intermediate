/**
 * Created by ldong on 5/14/16.
 */

Meteor.publish('recipes', function(){
    return Recipes.find({author: this.userId});
});