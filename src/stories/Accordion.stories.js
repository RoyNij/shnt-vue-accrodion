import Accordion from './../components/Accordion.vue';
import AccordionList from './../components/AccordionList.vue';
import './../sass/stories/general.scss';
import './../sass/stories/_accordion.scss';

export default {
	title: 'Collapsible/Accordion',
	component: Accordion,
	argTypes: {
		animation: { control: { type: 'select', options: ['none', 'rotate', 'hide'] } },
	}
};

const Template = ( args, { argTypes } ) => ( { 
	props: Object.keys( argTypes ),
	components: { Accordion },
	template: `
	<Accordion v-bind="$props">
		<template>
			<p>Eaque earum id in quis voluptatem omnis et. Sit facere minus omnis qui nemo. Eligendi nesciunt iure totam adipisci minima. Modi reiciendis nihil facere et id commodi. Et illum est non reprehenderit earum dolor eveniet. Eum est voluptas consectetur error.</p>
			<p>Voluptas numquam animi quisquam est officiis rem. Cumque et sapiente voluptatibus delectus fuga incidunt quas. Odit enim exercitationem aut a iure adipisci quidem. Tempora pariatur et maxime temporibus. Voluptatem hic voluptatem reiciendis fuga voluptates est doloremque facilis. Blanditiis facere ut architecto aut.</p>
		</template>
	</Accordion>`
} );

const Multiple = ( args, { argTypes } ) => ( 	{
	props: Object.keys( argTypes ),
	components: { AccordionList, Accordion },
	template: `
	<AccordionList v-bind="$props">
		<template v-slot='slotProps'>
			<Accordion v-bind="slotProps" title="Accordion 1">
				<template>
					<p>Eaque earum id in quis voluptatem omnis et. Sit facere minus omnis qui nemo. Eligendi nesciunt iure totam adipisci minima. Modi reiciendis nihil facere et id commodi. Et illum est non reprehenderit earum dolor eveniet. Eum est voluptas consectetur error.</p>
					<p>Voluptas numquam animi quisquam est officiis rem. Cumque et sapiente voluptatibus delectus fuga incidunt quas. Odit enim exercitationem aut a iure adipisci quidem. Tempora pariatur et maxime temporibus. Voluptatem hic voluptatem reiciendis fuga voluptates est doloremque facilis. Blanditiis facere ut architecto aut.</p>
				</template>
			</Accordion>
			<Accordion v-bind="slotProps" title="Accordion 2">
				<template>
					<p>Eaque earum id in quis voluptatem omnis et. Sit facere minus omnis qui nemo. Eligendi nesciunt iure totam adipisci minima. Modi reiciendis nihil facere et id commodi. Et illum est non reprehenderit earum dolor eveniet. Eum est voluptas consectetur error.</p>
					<p>Voluptas numquam animi quisquam est officiis rem. Cumque et sapiente voluptatibus delectus fuga incidunt quas. Odit enim exercitationem aut a iure adipisci quidem. Tempora pariatur et maxime temporibus. Voluptatem hic voluptatem reiciendis fuga voluptates est doloremque facilis. Blanditiis facere ut architecto aut.</p>
				</template>
			</Accordion>
			<Accordion v-bind="slotProps" title="Accordion 3">
				<template>
					<p>Eaque earum id in quis voluptatem omnis et. Sit facere minus omnis qui nemo. Eligendi nesciunt iure totam adipisci minima. Modi reiciendis nihil facere et id commodi. Et illum est non reprehenderit earum dolor eveniet. Eum est voluptas consectetur error.</p>
					<p>Voluptas numquam animi quisquam est officiis rem. Cumque et sapiente voluptatibus delectus fuga incidunt quas. Odit enim exercitationem aut a iure adipisci quidem. Tempora pariatur et maxime temporibus. Voluptatem hic voluptatem reiciendis fuga voluptates est doloremque facilis. Blanditiis facere ut architecto aut.</p>
				</template>
			</Accordion>
		</template>
	</AccordionList>`
})

export const Simple = Template.bind({});
Simple.args = {
	backgroundColor: '#EFEFEF',
	title: 'Hello World'
}

export const Opened = Template.bind({});
Opened.args = {
	title: 'Hello World',
	initiallyOpen: true
}

export const Hiding = Template.bind({});
Hiding.args = {
	title: 'Hello World',
	animation: "hide"
}

export const List = Multiple.bind({});
List.args = {}