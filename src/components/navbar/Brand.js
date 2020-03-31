import React from "react";
import { Link } from "gatsby";
import Logo from "../../images/logo.png";

const Brand = () => {
	return <Link style={{ boxShadow: `none`, height: `90%`, margin: `auto 0` }} to="/">
                <img style={{ height: `70%`, margin: `auto 0` }} src={Logo} alt="riseup Logo" />
           </Link>;
};

export default Brand;


