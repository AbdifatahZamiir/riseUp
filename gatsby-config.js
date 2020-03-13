module.exports = {
	siteMetadata: {
		title: `Rise Up Unleashing Ideas`,
		description: `Rise up website .`,
		myWebUrl: `riseup.com`
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
							maxWidth: 590
						}
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`
						}
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`
				]
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/`,
				name: `content`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`
			}
		},

		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: `ADD YOUR TRACKING ID HERE`
			}
		},
		// `gatsby-plugin-feed`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Gatsby Starter Blog`,
				short_name: `GatsbyJS`,
				start_url: `/`,
				background_color: `#ffffff`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `content/assets/logo.png`
			}
		},
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				// Setting a color is optional.
				color: `#ece913`,
				// Disable the loading spinner.
				showSpinner: false
			}
		},
		{
			resolve: "gatsby-plugin-page-progress",
			options: {
				includePaths: ["/", { regex: "^/events" }],
				excludePaths: ["/events/beep-beep-lettuce"],
				height: 3,
				prependToBody: false,
				color: `#d8681d`
			}
		},
		`gatsby-plugin-react-helmet`,
		`gatsby-theme-elements`,
		{
			resolve: `gatsby-plugin-typography`,
			options: {
				pathToConfigModule: `src/utils/typography`
			}
		}, // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
		`gatsby-plugin-offline`
	]
};
