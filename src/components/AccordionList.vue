<template>
	<div class="accordion-list">
		<slot 
			:handleClick='handleClick' 
			:animation='animation' 
			:background-color='backgroundColor'>
		</slot>
	</div>
</template>

<script>
export default {
	props: {
		startOpen: {
			type: Boolean,
			default: false
		},
		backgroundColor: {
			type: String,
			default: 'none',
		},
		animation: {
			type: String,
			default: 'rotate'
		},
	},
	mounted(){
		if( this.startOpen ){
			this.$children.forEach( ( child, i ) => {
				if( i === 0 ){
					child.toggleFromOutside( true );
				}
			})
		}
	},
	methods: {
		handleClick( evt ){
			this.$children.forEach( child => {
				if( child !== evt ) {
					child.toggleFromOutside( false )					
				} 
			})
		}
	}
}
</script>

<style>

</style>