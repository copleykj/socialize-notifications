Package.describe({
  name: 'socialize:notifications',
  version: '1.0.0',
  summary: 'Social network style notifications for your Meteor app.',
  git: 'https://github.com/copleykj/socialize-notifications.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.10.2');
  api.use('ecmascript');
  api.mainModule('notifications.js');
});
