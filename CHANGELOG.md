# Changelog

### 2.2.8-df
- compatibility with "last" Firefox 57 (https://github.com/stylish-userstyles/stylish/pull/319)
- update version number
- update compatibility

### 2.2.8
- support SeaMonkey 2.53.* (thanks UCyborg)
- add Slovenian translation (thanks UCyborg)

### 2.2.7-df
- restore SeaMonkey support

### 2.2.7
- support Pale Moon 30
- minor internal cleanup

### 2.2.6
- change first run URL to be the repository's wiki
- revert disabler change from 2.2.5
- adjust supported applications
- minor CSS cleanup

### 2.2.5
- make the Stylish disabler work better across XUL applications (thanks vanowm)
- fix installing userstyles from userstyles.org (though customizable styles will use their default settings)
- add Borealis Navigator support
- adjust for Interlink support
- remove Thunderbird/Postbox/Fennec support

### 2.2.4
- fix uninstalling styles by context menu
- fix applying userstyles on SeaMonkey

### 2.2.3
- improve `cs` locale (thanks janekptacijarabaci/GMForker)
- fix uninstall undo button spacing

### 2.2.2
- fix devtools deprecation warning
- align Tagalog locale with Pale Moon style (thanks FranklinDM)
- make sure Stylish is disabled if Stylem is enabled (thanks JustOff)
- remove style reporter
- rename internal add-ons manager-related code to prevent future interop issues

### 2.2.1
- add Tagalog locale (by FranklinDM)
- fix memory leak when closing window
- fix editor position when in windowed mode and minimized
- enable editor warnings when CSS error reporting is turned off
- load editor correctly in Pale Moon 28
- find the devtools correctly in Pale Moon 27

### 2.2.0
- initial fork from Stylish-master (~v2.0.7)
- fix install button on `userstyles.org` styles
- fix editing userstyles in e10s-enabled applications when about:home is open
