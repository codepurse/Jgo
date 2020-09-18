# Jgo [![Build Status](https://i.ibb.co/tqgywhd/Build-Development-lightgrey.png)](https://travis-ci.org/joemccann/dillinger)
[![Next Js](https://i.ibb.co/CKgz0J3/output-onlinepngtools.png)](https://nextjs.org)

This repository is for the developer of Jgo web app. This is not **publishable** .


### Plugins
You might want to install the below plugins to completely run the web app.

`npm install --save react-google-maps` - **For the map** \
`npm install --save react-google-places-autocomplete`  - **For the autosearch places** \
`npm install --save react-geocode`  - **To get the address based on lat and lng**

### Autoplace search
The places are restricted only in the **PH**.
```javascript
 autocompletionRequest={{
    	componentRestrictions: {
    		country: ["ph"],
    	},
    }}
```
The boundaries between places are not yet implemented. \
If the address is not available in the autosearch the the user can click the map icon beside of the search bar.
