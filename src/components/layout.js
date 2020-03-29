import React from "react";
import Header from "./header";
import Footer from "./footer";
import { ToastContainer} from "react-toastify";


const Layout = ({ children }) => {
	return (
		<main>
			<Header />
    		<ToastContainer />
			{children}
			<Footer />
		</main>
	);
};

export default Layout;
