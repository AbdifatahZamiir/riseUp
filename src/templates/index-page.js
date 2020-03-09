import React, { Fragment } from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SlideShow from "../components/slideShow";
import Service from "../components/services";
import ContactCom from "../components/contactCom";
import Slider from "../components/slider";
import About from "../components/about";
import Head from "../components/Head";
import LatestEvent from "../components/latestEvent";

export const IndexPageTemplate = ({
	mainTitle,
	subTitle,
	serviceTitle,
	contactTitle,
	partnerTitle,
	imageOne,
	imageTwo,
	imageThree,
	imageFour,
	imageFive,
	imageSix,
	imageSeven,
	imageEight
}) => (
	<Fragment>
		<Head title="Rise Up" />
		<SlideShow mainTitle={mainTitle} subTitle={subTitle} />
		<About />
		<Service serviceTitle={serviceTitle} />
		<ContactCom contactTitle={contactTitle} />
		<LatestEvent />
		<Slider
			partnerTitle={partnerTitle}
			imageOne={imageOne}
			imageTwo={imageTwo}
			imageThree={imageThree}
			imageFour={imageFour}
			imageFive={imageFive}
			imageSix={imageSix}
			imageSeven={imageSeven}
			imageEight={imageEight}
		/>
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
				imageOne={frontmatter.imageOne}
				imageTwo={frontmatter.imageTwo}
				imageThree={frontmatter.imageThree}
				imageFour={frontmatter.imageFour}
				imageFive={frontmatter.imageFive}
				imageSix={frontmatter.imageSix}
				imageSeven={frontmatter.imageSeven}
				imageEight={frontmatter.imageEight}
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
				imageOne {
					childImageSharp {
						fluid(maxWidth: 100) {
							...GatsbyImageSharpFluid
						}
					}
					publicURL
				}
				imageTwo {
					childImageSharp {
						fluid(maxWidth: 100) {
							...GatsbyImageSharpFluid
						}
					}
					publicURL
				}
				imageThree {
					childImageSharp {
						fluid(maxWidth: 100) {
							...GatsbyImageSharpFluid
						}
					}
					publicURL
				}
				imageFour {
					childImageSharp {
						fluid(maxWidth: 100) {
							...GatsbyImageSharpFluid
						}
					}
					publicURL
				}
				imageFive {
					childImageSharp {
						fluid(maxWidth: 100) {
							...GatsbyImageSharpFluid
						}
					}
					publicURL
				}
				imageSix {
					childImageSharp {
						fluid(maxWidth: 100) {
							...GatsbyImageSharpFluid
						}
					}
					publicURL
				}
				imageSeven {
					childImageSharp {
						fluid(maxWidth: 100) {
							...GatsbyImageSharpFluid
						}
					}
					publicURL
				}
				imageEight {
					childImageSharp {
						fluid(maxWidth: 100) {
							...GatsbyImageSharpFluid
						}
					}
					publicURL
				}
			}
		}
	}
`;
