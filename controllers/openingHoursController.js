import { data } from '../data/data.js';
import { constructResObj } from '../utils/constructResObj.js';
import { isValidTimeFormat } from '../utils/isValidTimeFormat.js';
import { isValidHours } from '../utils/isValidHours.js';
import { getSwedishFormattedDate } from '../utils/getSwedishFormattedDate.js';

// This is for get request like "/api/opening-hours"

export const openingHoursController = (req, res) => {
	let filteredData = data.openingHours;
	res.json(
		constructResObj(
			200,
			'Request for openingHours successful',
			true,
			filteredData
		)
	);
};

export const updateOpeningHoursByDay = (req, res) => {
	const day = req.params.day?.toLowerCase();
	if (req.body) {
		const { from, to } = req.body;

		if (!isValidHours({ from, to })) {
			return res
				.status(400)
				.json(
					constructResObj(
						400,
						'Both from and to must be provided in HH:MM format, or both must be empty for closed days',
						false
					)
				);
		}

		if (isValidTimeFormat(from) && isValidTimeFormat(to)) {
			const dayToUpdate = data.openingHours.find(
				(d) => d.day.toLowerCase() === day
			);
			if (dayToUpdate) {
				if (from !== undefined) dayToUpdate.hours.from = from;
				if (to !== undefined) dayToUpdate.hours.to = to;
				dayToUpdate.updatedAt = getSwedishFormattedDate();
				res.status(201).json(
					constructResObj(
						201,
						`Opening hours for day:${dayToUpdate.day} updated successfully`,
						true,
						dayToUpdate
					)
				);
			} else {
				res.status(400);
				res.json(constructResObj(400, `Day:'${day}' not found`, false));
			}
		} else {
			res.status(400);
			res.json(
				constructResObj(
					400,
					'Invalid time format. Use HH:MM format (ex: 09:00)',
					false
				)
			);
		}
	} else {
		res.status(400);
		res.json(
			constructResObj(
				400,
				'Body with { from: new value, to: new value } required',
				false
			)
		);
	}
};

export const updateOpeningHoursAll = (req, res) => {
	if (!req.body || !Array.isArray(req.body)) {
		return res
			.status(400)
			.json(
				constructResObj(
					400,
					'Body must be an array of opening hours',
					false
				)
			);
	}

	const newOpeningHours = req.body;

	// Validate array length
	if (newOpeningHours.length !== 7) {
		return res
			.status(400)
			.json(
				constructResObj(
					400,
					'Must provide exactly 7 days of opening hours',
					false
				)
			);
	}

	// Validate each day's data structure and time format
	const isValid = newOpeningHours.every((day) => {
		const hasValidStructure =
			day.day && day.hours && 'from' in day.hours && 'to' in day.hours;

		return hasValidStructure && isValidHours(day.hours);
	});

	if (!isValid) {
		return res
			.status(400)
			.json(
				constructResObj(
					400,
					'Invalid data structure or time format. Each day must have day and hours.{from,to} in HH:MM format, or both must be empty for closed days',
					false
				)
			);
	}

	// Update all days
	data.openingHours = newOpeningHours.map((day) => ({
		...day,
		day: day.day.charAt(0).toUpperCase() + day.day.slice(1).toLowerCase(),
		updatedAt: getSwedishFormattedDate(),
	}));

	return res.json(
		constructResObj(
			200,
			'All opening hours updated successfully',
			true,
			data.openingHours
		)
	);
};
