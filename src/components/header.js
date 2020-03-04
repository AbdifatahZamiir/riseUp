import React, { Component, Fragment } from "react";
import Navbar from "./navbar/Navbar";

import GlobalStyle from "../styles/Global";

class Header extends Component {
	state = {
		navbarOpen: false
	};

	handleNavbar = () => {
		this.setState({ navbarOpen: !this.state.navbarOpen });
	};

	render() {
		return (
			<Fragment className="container">
				<Navbar
					navbarState={this.state.navbarOpen}
					handleNavbar={this.handleNavbar}
				/>
				<GlobalStyle />
			</Fragment>
		);
	}
}

export default Header;
