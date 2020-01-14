import profiles from '../mocks/profiles.json';

const promiseResponse = data =>
	new Promise(resolve => {
		setTimeout(() => {
			resolve(data);
		}, 500);
	});

export const getProfiles = () => promiseResponse(profiles);
