const genders = [
	{ id: 1, name: "Female" },
	{ id: 2, name: "Male" }
];

const ages = [
	{ id: 1, name: "18-20" },
	{ id: 2, name: "20-25" },
	{ id: 3, name: "25-30" }
];

const educationLevel = [
	{ id: 1, name: "Secondary" },
	{ id: 2, name: "Batchelor degree" },
	{ id: 3, name: "Master degree" },
	{ id: 4, name: "Vocational Skills" },
	{ id: 5, name: "Other" }
];

const stages = [
	{ id: 1, name: "Yes" },
	{ id: 1, name: "No" }
];

const sectors = [
	{ id: 1, name: "Technology" },
	{ id: 2, name: "Agriculture" },
	{ id: 3, name: "Fishery" },
	{ id: 4, name: "Service" },
	{ id: 5, name: "Education" },
	{ id: 6, name: "Energy" },
	{ id: 7, name: "Other" }
];

export function getGender() {
	return genders;
}

export function getAges() {
	return ages;
}

export function getEducationLevel() {
	return educationLevel;
}

export function getStages() {
	return stages;
}

export function getSectors() {
	return sectors;
}
