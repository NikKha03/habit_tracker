// const url = 'http://localhost:8080';
const url = 'http://109.196.102.221:8080';

export const userLoginPath = url + '/login';
export const userLogoutPath = url + '/logout';

export const userRegPath = url + '/api/user/reg';
export const getUserPath = url + '/api/user/principal';
export const getUsersPath = url + '/api/user/all';
export const deleteUserPath = userId => url + `/api/user/delete/${userId}`;

export const createHabitPath = url + '/api/habit/create';
export const redactionHabitPath = url + '/api/habit/change';
export const allHabitsPath = url + '/api/habit/all';
export const habitOnTheDayPath = url + '/api/habit/onTheDay';
export const habitOnTheWeekPath = url + '/api/habit/onTheWeak';
export const habitDuePath = id => url + `/api/habit/due/${id}`;
