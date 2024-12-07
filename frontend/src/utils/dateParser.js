export const getStatistic = habitStatistics => {
	const date = [];
	habitStatistics.map(statistic => date.push(statistic.dueDate));
	return date;
};

export const dueDate = (date, countExecutions, dueDate) => {
	const yyyyMMdd = date.$d.toISOString().split('T')[0].split('-');

	let [yearCalendar, monthCalendar, dayCalendar] = yyyyMMdd;
	monthCalendar = Number(monthCalendar) + 1;

	const obj = {};

	const all = [];
	const notAll = [];

	dueDate.forEach(date => {
		let [year, month, day] = date.split('-');

		if (monthCalendar === Number(month) && yearCalendar === year) {
			day = Number(day);

			if (!obj.hasOwnProperty(day)) {
				obj[day] = day;
				obj[day] = { count: 0, countExecutions: countExecutions };
			}

			obj[day].count = obj[day].count + 1;
		}
	});

	dueDate.map(date => {
		let [year, month, day] = date.split('-');
		if (monthCalendar === Number(month) && yearCalendar === year) {
			day = Number(day);

			obj[day].count < countExecutions ? notAll.push(day) : all.push(day);
		}
	});

	return [[...new Set(notAll)], [...new Set(all)]];
};
