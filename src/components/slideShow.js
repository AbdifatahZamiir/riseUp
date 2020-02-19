import React from "react";
import Concept21 from "../images/concept/concept21.png";
const SlideShow = () => {
	return (
		<div className="wrapper bg-opacity-default">
			<div className="rev_slider_wrapper fullwidth-container dark-spinner dark-nav">
				<div
					id="slider11"
					className="rev_slider fullwidthbanner row"
					data-version="5.4.7"
				>
					<div className="col-lg-6">
						{/* Crafting effective and project specific solutions with expertise. */}
					</div>
					<div className="col-lg-6">
						<img src={Concept21} alt="" style={{ width: `550px` }} />
					</div>

					<div className="tp-bannertimer tp-bottom"></div>
				</div>
			</div>
		</div>
	);
};

export default SlideShow;
