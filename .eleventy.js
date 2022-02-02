module.exports = (eleventyConfig, options) => {

	if(!options || !options.key) {
//		console.error('The key option was not passed to the PDFEmbed plugin and embeds will not work!');
		throw new Error('The Google Static Maps key must be passed.');
	}

	eleventyConfig.addShortcode("staticmap", function(address, width=500, height=500, zoom=13, maptype="roadmap") {
		return `https://maps.googleapis.com/maps/api/staticmap?center=${encodeURIComponent(address)}&zoom=${zoom}&size=${width}x${height}&maptype=${maptype}&key=${options.key}"`;
	});

}