# Changelog

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