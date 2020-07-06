<template>
	<div class="container">
		<el-button @click="send">asf</el-button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			socket: null,
		};
	},
	mounted() {
		this.$nextTick(this.init);
	},
	methods: {
		init() {
			this.socket = new WebSocket('ws://localhost:8080');
			this.socket.onopen = this.onopen;
			this.socket.onmessage = this.onmessage;
		},
		onopen() {},
		onmessage(e) {
			console.log('onmessage', e);
		},
		send() {
			this.socket.send(
				JSON.stringify({
					event: 'events',
					data: {
						a: 1,
						b: 2,
						c: 3,
					},
				}),
			);
		},
	},
};
</script>

<style>
.container {
	margin: 0 auto;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
}
</style>
