import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import ApplyForm from "./applyForm";

const ExpansionPanel = ({ title }) => {
	if (title !== "STARTUP ACCELERATOR PROGRAM") return null;
	return (
		<Accordion>
			<Card>
				<Card.Header>
					<Accordion.Toggle
						style={{ textDecoration: `none` }}
						as={Button}
						variant="link"
						eventKey="0"
					>
						Fill The Form Now
					</Accordion.Toggle>
				</Card.Header>
				<Accordion.Collapse eventKey="0">
					<Card.Body>
						<ApplyForm />
					</Card.Body>
				</Accordion.Collapse>
			</Card>
		</Accordion>
	);
};

export default ExpansionPanel;
