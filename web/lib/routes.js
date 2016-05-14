/**
 * Created by ldong on 5/14/16.
 */
FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
    BlazeLayout.render('MainLayout', {
      main: 'Recipes'
    });
  }
});