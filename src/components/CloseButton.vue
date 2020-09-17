<template>
	<div :class='["shnt-close-button", animation, position, {toggled}]' :style='containerStyle'>
		<span class='shnt-close-button__line' id='line-1' :style='lineStyle'></span>
		<span class='shnt-close-button__line' id='line-2' :style='lineStyle'></span>
	</div>
</template>

<script>
export default {
	props: {
		size: {
			type: Number,
			default: 20,
		},
		lineWidth: {
			type: Number,
			default: 3,
		},
		toggled: {
			type: Boolean,
			default: false
		},
		animation: {
			type: String,
			default: 'none'
		},
		position: {
			type: String,
			default: 'top-right'
		},
	},
	computed: {
		containerStyle(){
			return {
				width: this.size + 'px',
				height: this.size + 'px',
			}
		},
		lineStyle(){
			return {
				position: 'absolute',
				width: this.size + 'px',
				height: this.lineWidth + 'px',
				left: 0,
				top:  Math.round( 0.5 * ( this.size - Math.round( this.lineWidth ) ) ) + 'px',
				borderRadius: Math.round( this.lineWidth / 2 ) + 'px / 50%',
			}
		},
	},
}
</script>

<style lang='scss' scoped>
.shnt-close-button{
	position: relative;

	.shnt-close-button__line{
		background-color: #404040;
	}

	&.relative{
		position: relative;
	}

	&.top-right{
		position: absolute;
		right: 0;
		top: 0;
	}

	&.top-left{
		position: absolute;
		left: 0;
		top: 0;
	}

	#line-1{
		transform: rotate( -45deg )
	}
	#line-2{
		transform: rotate( 45deg )
	}

	&.none{
		#line-1{
		transform: rotate( -45deg )
		}
		#line-2{
			transform: rotate( 45deg )
		}
	}
	&.rotate{
		.shnt-close-button__line{
			transition: transform 0.4s;
		}
		
		#line-1{
			transform: rotate( 0deg )
		}

		#line-2{
			transform: rotate( 90deg )
		}

		&.toggled{
			#line-1{
				transform: rotate( 135deg )
			}

			#line-2{
				transform: rotate( 225deg )
			}
		}
	}
	&.hide{
		.shnt-close-button__line{
			opacity: 0;
			transition: transform 0.4s, opacity 0.4s 0.4s;
		}

		#line-1{
			transform: rotate( 0deg )
		}

		#line-2{
			transform: rotate( 0deg )
		}

		&.toggled{
			.shnt-close-button__line{
				opacity: 1;
				transition: opacity 0.4s, transform 0.4s 0.4s;

			}

			#line-1{
			transform: rotate( -45deg )
			}

			#line-2{
				transform: rotate( 45deg )
			}
		}
	}
}
</style>