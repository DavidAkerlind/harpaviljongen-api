export const getSwedishFormattedDate = () => {
	const now = new Date();
	// Set to Swedish timezone
	const swedishDate = new Date(
		now.toLocaleString('en-US', { timeZone: 'Europe/Stockholm' })
	);

	const year = swedishDate.getFullYear();
	const month = String(swedishDate.getMonth() + 1).padStart(2, '0');
	const day = String(swedishDate.getDate()).padStart(2, '0');
	const hours = String(swedishDate.getHours()).padStart(2, '0');
	const minutes = String(swedishDate.getMinutes()).padStart(2, '0');
	const seconds = String(swedishDate.getSeconds()).padStart(2, '0');

	return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};
