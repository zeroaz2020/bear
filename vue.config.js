const path = require('path');

module.exports = {
	configureWebpack: {
		resolve: {
			// ��� ��Ī
			alias: {
				'~': path.join(__dirname, 'src/'),
				assets: path.resolve(__dirname, 'src/assets'),
			},
		},
	},
	css: {
		sourceMap: true,
		loaderOptions: {
			sass: {
				additionalData: `
          @import "@/assets/scss/bearlearn.scss";
        `,
			},
		},
	},
	devServer: {
		overlay: false,
	},
};