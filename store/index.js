import { types } from '~/utils/constan';

const scope = 'USER';

const model = {
	user: '',
	users: {},
};

const state = () => model;

const getters = {
	getUser: state => userId =>
		userId in state.users ? state.users[userId] : '',
};

const actions = {
	async userAction({ commit }, form) {
		const data = await this.$axios.post('/getUser', form);
		commit(types(`${scope}_GET`), data);
		return data;
	},
	async usersAction({ dispatch }, form) {
		const data = await this.$axios.post('/getUser', form);
		commit(types(`${scope}_GETS`), data);
		return data;
	},
};

const mutations = {
	[types(`${scope}_GET`)](state, user) {
		state.user = user;
	},
	[types(`${scope}_GETS`)](state, user) {
		state.users[user.userId] = user;
	},
};

export default {
	state,
	getters,
	actions,
	mutations,
};
