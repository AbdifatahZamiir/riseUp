import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Logo from "../../images/logo.png";

const Brand = () => {
	return <Link to="/"><Image src={Logo} alt="riseup Logo" /></Link>;
};

export default Brand;

const Image = styled.img`
	height: 70%;
	margin: auto 0;
`;
