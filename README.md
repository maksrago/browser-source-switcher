# browser-source-switcher
A simple script that allows people to transition between various browser sources at a specified interval. This is a feature that is yet to be implemented into OBS-Studio, and I found this to be an important aspect of my stream.
  
## Configuring browser-source-switcher
  * Enter the `/js` directory and open the `functions.js` file, in the `URLs` array you can specify various URLs for the script to switch between, you can use various StreamLabs/StreamElements pre-existing sources such as a Donation Goal, Follower Goal, and a Subscriber Goal.
  
  * Furthermore, you can customize the duration that each source is displayed by modifying the `setTimeout` function at the bottom of `functions.js` (Please note: this is in milliseconds).
  
  * Additional configuration you may want to consider is the height and width of the scenes that are being transitioned, the `global.css` file in `/css` contains a `height: X` and `width: X` attribute that can be customized as well as an `animation: X` interval that can be changed for both fading in and out of the various sources.
  
  ### Using browser-source-switcher in OBS
  * You can now open OBS, and add a Browser Source with the local file option checked, from there specify the `source-transition.html` page.

## Author
* **Maks Rago** - twitch.tv/im663/

## License
This project is licensed under the GPL V3 License - see the [LICENSE](license.txt) for details
