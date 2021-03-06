module.exports = {
	siteMetadata: {
		title: `Rise Up Unleashing Ideas`,
		description: `Rise up website riseup unleasing ideas employment enterprenuership startups .`,
		myWebUrl: `riseup-et.com`,
	},
	plugins: [
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
				],
			},
		},
		{
			// keep as first gatsby-source-filesystem plugin for gatsby image support
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/static/images`,
				name: "uploads",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				path: `${__dirname}/src/pages`,
				name: "pages",
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/images`,
				name: `images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/`,
				name: `content`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},

		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `ADD YOUR TRACKING ID HERE`,
			},
		},
		// `gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Riseup unleashing ideas`,
				short_name: `Riseup`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#d8681d`,
				display: `minimal-ui`,
				icon: `content/assets/logo.png`,
			},
		},
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				// Setting a color is optional.
				color: `#ece913`,
				// Disable the loading spinner.
				showSpinner: false,
			},
		},
		{
			resolve: "gatsby-plugin-page-progress",
			options: {
				includePaths: ["/", { regex: "^/projects" }],
				excludePaths: ["/projects/beep-beep-lettuce"],
				height: 3,
				prependToBody: false,
				color: `#d8681d`,
			},
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`,
			},
		}, // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
		`gatsby-plugin-offline`,
		{
			resolve: "gatsby-plugin-netlify-cms",
			options: {
				modulePath: `${__dirname}/src/cms/cms.js`,
			},
		},
		"gatsby-plugin-netlify", // make sure to keep it last in the array
	],
};
