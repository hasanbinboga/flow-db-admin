Package.describe({
  name: 'sach:flow-db-admin',
  version: '0.9.0',
  // Brief, one-line summary of the package.
  summary: 'Port of yogiben:admin to use meteorhacks:flow-router instead of iron:router ',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  both = ['client','server']

  api.use(
    [
    'coffeescript',
    'underscore',
    'reactive-var',
    'meteorhacks:unblock@1.1.0',
    'meteorhacks:flow-router@1.18.0',
    'meteorhacks:flow-layout@1.4.2',
    'zimme:active-route@2.2.0',
    'reywood:publish-composite@1.3.6',
    'aldeed:collection2@2.3.3',
    'aldeed:autoform@5.3.0',
    'aldeed:template-extension@3.4.3',
    'alanning:roles@1.2.13',
    'raix:handlebar-helpers@0.2.4',
    'momentjs:moment@2.10.3',
    'aldeed:tabular@1.2.0',
    'mfactory:admin-lte@0.0.2'
    ],
    both);

  api.use(['less','session','jquery','templating'],'client')

  api.use(['email'],'server')

  api.add_files([
    'lib/both/AdminDashboard.coffee',
    'lib/both/routes.js',
    'lib/both/utils.coffee',
    'lib/both/startup.coffee',
    'lib/both/collections.coffee'
    ], both);

  api.add_files([
    'lib/client/html/admin_templates.html',
    'lib/client/html/admin_widgets.html',
    'lib/client/html/fadmin_layouts.html',
    'lib/client/html/admin_sidebar.html',
    'lib/client/html/admin_header.html',
    'lib/client/css/admin-custom.less',
    'lib/client/js/admin_layout.js',
    'lib/client/js/helpers.coffee',
    'lib/client/js/templates.coffee',
    'lib/client/js/events.coffee',
    'lib/client/js/slim_scroll.js',
    'lib/client/js/autoForm.coffee'
    ], 'client');

  api.add_files([
    'lib/server/publish.coffee',
    'lib/server/methods.coffee'
    ], 'server');

  api.export('AdminDashboard',both)

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('sach:flow-db-admin');
  api.addFiles('flow-db-admin-tests.js');
});
