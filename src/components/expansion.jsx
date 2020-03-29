import React from "react";
import { Accordion, Card } from "react-bootstrap";

const ExpansionPanel = ({ title }) => {
	if (title !== "STARTUP ACCELERATOR PROGRAM") return null;
	return (
		<Accordion>
			<Card>
				<Card.Header style={{fontSize: `1rem`}}>
						Fill The Form Below
				</Card.Header>
					<Card.Body>
						<iframe
							title="STARTUP ACCELERATOR PROGRAM"
							src="https://docs.google.com/forms/d/e/1FAIpQLSdKP4Y6fVo9N9pcQWJ1hWKqimOrSV5-5ne9UjdJS_GK883bYA/viewform?embedded=true"
							width="700"
							height="520"
							frameborder="0"
							marginheight="0"
							marginwidth="0"
						>
							Loading…
						</iframe>
					</Card.Body>

			</Card>
		</Accordion>
	);
};

export default ExpansionPanel;
