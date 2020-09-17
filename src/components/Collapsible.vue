<template>
	<div :class="[ 'shnt-collapsible', { open } ]" :style='containerStyle' ref='root'>
		<div class="shnt-collapsible__content" ref='content' :style='contentStyle'>
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	data: function(){
		return {
			height: 0,
			m_duration: 0
		}
	},
	props: {
		open: {
			type: Boolean,
			default: false
		},
		duration: {
			type: Number,
			default: 400
		},
		horizontal: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		containerTransition(){
			if( this.open ){
				return `height ${this.m_duration}ms`
			}
			return `height ${this.m_duration}ms ${this.m_duration}ms`
		},
		contentTransition(){
			if( this.open ){
				return `opacity ${this.m_duration}ms ${this.m_duration}ms`
			}
			return `opacity ${this.m_duration}ms`
		},
		containerStyle(){
			return {
				'height': this.height,
				'overflow': !this.open ? 'hidden' : 'visible',
				'transition': this.containerTransition,
			}
		},
		contentStyle(){
			return {
				'opacity': !this.open ? 0 : 1,
				'transition': this.contentTransition,
			}
		},
	},
	methods: {
		setHeight( init ){
			if( !init ){
				this.m_duration = this.duration
			}
			if( !this.open ){
				this.height = 0;
				return
			} else {
				this.height = this.$refs.content.clientHeight + 'px'
			}
		},
		setDuration(){
			if( this.open ){
				this.m_duration = 0;
			} else {
				this.m_duration = this.duration
			}
		},
	},
	created(){
		this.setDuration();
	},
	mounted(){
		this.setHeight( true );
		window.addEventListener( 'resize', this.setHeight.bind( this ) );
	},
	destroyed(){
		window.removeEventListener( 'resize', this.setHeight.bind( this ) );
	},
	watch: {
		open: {
			handler: 'setHeight'
		}
	}
}
</script>

<style lang='scss' scoped>
</style>