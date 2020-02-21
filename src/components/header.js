import React, { Component } from "react";
import { Link } from "gatsby";
import "../styles/bootstrap.min.css";
import UpArrow from "../images/up.png";
import DownArrow from "../images/down.png";
import Logo from "../images/logo.png";
class Header extends Component {
	constructor(props) {
		super(props);
		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true
		};
	}
	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}
	render() {
		const collapsed = this.state.collapsed;
		const classOne = collapsed
			? "collapse navbar-collapse"
			: "collapse navbar-collapse show";
		const classTwo = collapsed
			? "navbar-toggler navbar-toggler-right collapsed "
			: "navbar-toggler navbar-toggler-right ";
		return (
			<header className="main-header">
				<nav className="navbar navbar-expand-lg navbar-light nav-color">
					<div className="container border-style">
						<div className="logo">
							<Link
								to="/"
								className="navbar-brand"
								style={{
									boxShadow: `none`,
									textDecoration: `none`,
									width: `70px`,
									height: `40px`
								}}
							>
								<img
									src={Logo}
									alt="logo"
									style={{
										height: `50px`,
										marginBottom: `40px`
									}}
								/>
							</Link>
						</div>

						<button
							onClick={this.toggleNavbar}
							id="navbar-toggler ml-auto"
							className={`${classTwo}`}
							type="button"
							data-toggle="collapse"
							data-target="#navbarResponsive"
							aria-controls="navbarResponsive"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							{this.state.collapsed ? (
								<img
									className="m-0"
									src={UpArrow}
									alt=""
									style={{
										width: `25px`,
										height: `25px`
									}}
								/>
							) : (
								<img
									className="m-0"
									src={DownArrow}
									alt=""
									style={{
										width: `25px`,
										height: `25px`
									}}
								/>
							)}
						</button>
						<div className={`${classOne}`} id="navbarResponsive">
							<ul className="navbar-nav ml-auto navigation mt-4">
								<li className="nav-item active">
									<Link
										className="nav-link"
										style={{
											boxShadow: `none`,
											textDecoration: `none`,
											fontFamily: `Jost, sans-serif`,
											fontSize: `.9em`,
											fontWeight: `500`,
											letterSpacing: `0.5px`,
											lineHeight: `20px`,
											opacity: `1`,
											padding: `0px 20px`,
											marginTop: `15px`
										}}
										to="/"
									>
										Home
									</Link>
								</li>
								<li className="nav-item ">
									<Link
										className="nav-link"
										style={{
											boxShadow: `none`,
											textDecoration: `none`,
											fontFamily: `Jost, sans-serif`,
											fontSize: `.9em`,
											fontWeight: `500`,
											letterSpacing: `0.5px`,
											lineHeight: `20px`,
											opacity: `1`,
											padding: `0px 20px`,
											marginTop: `15px`
										}}
										to="/about"
									>
										About
									</Link>
								</li>

								<li className="nav-item ">
									<Link
										className="nav-link"
										style={{
											boxShadow: `none`,
											textDecoration: `none`,
											fontFamily: `Jost, sans-serif`,
											fontSize: `.9em`,
											fontWeight: `500`,
											letterSpacing: `0.5px`,
											lineHeight: `20px`,
											opacity: `1`,
											padding: `0px 20px`,
											marginTop: `15px`
										}}
										to="/events"
									>
										Events
									</Link>
								</li>
								<li className="nav-item" style={{}}>
									<Link className="nav-link btn btn-default" to="/contact">
										Contact Us
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			</header>
		);
	}
}

export default Header;
