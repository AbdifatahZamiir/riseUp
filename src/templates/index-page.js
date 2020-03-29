import React, { Fragment } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SlideShow from "../components/slideShow";
import Service from "../components/services";
import ContactCom from "../components/contactCom";
import Slider from "../components/slider";
import About from "../components/about";
import Head from "../components/Head";
import LatestProject from "../components/latestProjects";

import { ToastContainer } from "react-toastify";

export const IndexPageTemplate = ({
	mainTitle,
	subTitle,
	serviceTitle,
	contactTitle,
	partnerTitle
}) => (
	<Fragment>
		<ToastContainer />
		<Head title="Rise Up" />
		<SlideShow mainTitle={mainTitle} subTitle={subTitle} />
		<About />
		<Service serviceTitle={serviceTitle} />
		<LatestProject />
		<ContactCom contactTitle={contactTitle} />
		<Slider partnerTitle={partnerTitle} />
	</Fragment>
);

const IndexPost = ({ data }) => {
	const { frontmatter } = data.markdownRemark;
	return (
		<Layout>
			<Head title={frontmatter.mainTitle} />
			<IndexPageTemplate
				mainTitle={frontmatter.mainTitle}
				subTitle={frontmatter.subTitle}
				serviceTitle={frontmatter.serviceTitle}
				contactTitle={frontmatter.contactTitle}
				partnerTitle={frontmatter.partnerTitle}
			/>
		</Layout>
	);
};

export default IndexPost;
export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				mainTitle
				subTitle
				serviceTitle
				contactTitle
				partnerTitle
			}
		}
	}
`;
