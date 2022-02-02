# Eleventy Plugin - Google Static Maps

This simple plugin adds an Eleventy shortcode for [Google Static Maps](https://developers.google.com/maps/documentation/maps-static/overview). This 
service lets you add simple Google Maps images to your site without needing a JavaScript client in order to render it. 

The maps are static (hence the name) but perfect for adding simple maps to your site. 

## Installation:

First, install the plugin:

```
npm i eleventy-plugin-googlestaticmaps
```

Then add it to your `.eleventy.js`:

```js
const mapPlugin = require('eleventy-plugin-googlestaticmap');
```

Then to use it, get your key from Google's console and pass it to the plugin:

```js
const GOOGLE_MAPS_KEY = process.env.GOOGLE_MAPS_KEY;

module.exports = function(eleventyConfig) {

	eleventyConfig.addPlugin(mapPlugin, {
		key:GOOGLE_MAPS_KEY
	});

};
```

## Usage

The shortcode `staticmap` is now available in your templates. The arguments are:

| Argument | Required | Default |
| -------- | -------- | ------- |
| address | true | |
| width | false | 500 |
| height | false | 500 |
| zoom | false | 13 | 
| maptype | false | "roadmap" |


Examples:

```liquid
<img src="{% staticmap "lafayette, la" %}">

<p>
<img src="{% staticmap "bellingham, wa" 900 900 %}" width="900" height="900">
</p>

<p>
<img src="{% staticmap "moscow" 400 400 13 "satellite" %}">
</p>
```
