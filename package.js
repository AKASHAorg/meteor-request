const version = '2.67.0';

Package.describe({
  name: 'akasha:request',
  version: version,
  // Brief, one-line summary of the package.
  summary: 'request package wrapped for meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/AkashaProject/meteor-request',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'request':  version
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('ecmascript');
  api.addFiles('request.js', 'server');
  api.export('Request', 'server');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('akasha:request');
  api.addFiles('request-tests.js');
});
