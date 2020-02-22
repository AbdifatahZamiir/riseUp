import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Head = ({ title }) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					description
					myWebUrl
				}
			}
		}
	`);

	return (
		<Helmet title={`${title} | ${data.site.siteMetadata.title}`}>
			{title && (
				<meta property="og:title" content={data.site.siteMetadata.title} />
			)}{" "}
			<meta name="description" content={data.site.siteMetadata.description} />
			{/* <meta name="image" content={data.site.siteMetadata.image} /> */}
			<meta property="og:url" content={data.site.siteMetadata.myWebUrl} />
		</Helmet>
	);
};

export default Head;
