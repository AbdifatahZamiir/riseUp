import React from "react";
import styled from "styled-components";

import Logo from "../../images/logo.png";

const Brand = () => {
	return <Image src={Logo} alt="riseup Logo" />;
};

export default Brand;

const Image = styled.img`
	height: 70%;
	margin: auto 0;
`;
