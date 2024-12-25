const url = 'http://localhost:8090';

export const userLoginPath = url + '/login';

export const userRegPath = url + '/api/user/reg';
export const getUserPath = url + '/api/user/principal';
export const getUsersPath = url + '/api/user/all';

export const createHabitPath = url + '/api/habit/create';
export const redactionHabitPath = url + '/api/habit/change';
export const allHabitsPath = url + '/api/habit/all';
export const habitOnTheDayPath = url + '/api/habit/onTheDay';
export const habitOnTheWeekPath = url + '/api/habit/onTheWeak';
export const habitDuePath = id => url + `/api/habit/due/${id}`;
