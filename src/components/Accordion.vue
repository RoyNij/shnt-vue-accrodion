<template>
	<div class="shnt-accordion" ref="root">
		<div class='shnt-accordion__header' @click='toggle'>
			<p class='shnt-accordion__title'>
				{{ title }}
			</p>
			<CloseButton :toggled='open' :animation='animation'/>
		</div>
		<Collapsible :open='open'>
			<slot name='content'></slot>
		</Collapsible>
	</div>
</template>

<script>
import Collapsible from './Collapsible.vue';
import CloseButton from './CloseButton.vue';

export default {
	components: {
		Collapsible,
		CloseButton
	},
	data: function(){
		return {
			open: this.initiallyOpen || false
		}
	},
	props: {
		initiallyOpen: {
			type: Boolean,
			default: false
		},
		animation: {
			type: String,
			default: 'rotate'
		},
		handleClick: {
			type: Function,
			default: () => {return}
		},
		title: {
			type: String,
			default: ''
		}
	},
	methods: {
		toggle(){
			this.open = !this.open
			this.handleClick( this )
		},
		toggleFromOutside( value ){
			this.open = value
		}
	}
}
</script>

<style lang='scss'>
.shnt-accordion{
	.shnt-accordion__header{
		cursor: pointer;
		position: relative;
		overflow: hidden;
		min-height: 30px;
	}
	.shnt-collapsible{
		.shnt-collapsible__content{
			padding: 5px;
		}
	}
}
</style>