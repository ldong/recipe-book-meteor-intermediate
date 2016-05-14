/**
 * Created by ldong on 5/14/16.
 */
FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/test', {
  name: 'test',
  action() {
    BlazeLayout.render('MainLayout', {
      main: 'Test'
    });
  }
});