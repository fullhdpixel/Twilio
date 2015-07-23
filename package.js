Package.describe({
    name: 'fullhdpixel:twilio',
    version: '0.0.1',
    summary: 'Twilio Bindings for Meteor',
    documentation: 'README.md',
    git: 'https://github.com/fullhdpixel/Twilio.git'

});

Npm.depends({
    "twilio": "2.1.0"
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.2');
    if (api.export) {
        api.export('Twilio', 'server');
    }
    api.addFiles('twilio.js', 'server');
});
