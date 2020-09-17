import Collapsible from './../components/Collapsible.vue'

export default {
	title: 'Collapsible/Simple',
	component: Collapsible,
};

const Template = ( args, { argTypes } ) => ( { 
	props: Object.keys( argTypes ),
	components: { Collapsible },
	template: `<Collapsible v-bind="$props">
		<h1>Hello World</h1>
		<p>Eaque earum id in quis voluptatem omnis et. Sit facere minus omnis qui nemo. Eligendi nesciunt iure totam adipisci minima. Modi reiciendis nihil facere et id commodi. Et illum est non reprehenderit earum dolor eveniet. Eum est voluptas consectetur error.</p>
		<p>Voluptas numquam animi quisquam est officiis rem. Cumque et sapiente voluptatibus delectus fuga incidunt quas. Odit enim exercitationem aut a iure adipisci quidem. Tempora pariatur et maxime temporibus. Voluptatem hic voluptatem reiciendis fuga voluptates est doloremque facilis. Blanditiis facere ut architecto aut.</p>
	</Collapsible>`
} );

export const Simple = Template.bind({});

export const Expanded = Template.bind({})
Expanded.args = {
	open: true,
}

export const Slow = Template.bind({})
Slow.args = {
	open: true,
	duration: 1000
}