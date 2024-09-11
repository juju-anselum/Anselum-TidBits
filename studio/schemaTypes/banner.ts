import { Rule } from "@sanity/types";

const banner = {
	name: 'banner',
	title: 'Banner',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
		},
		{
			name: 'blog',
			type: 'reference',
			to: { type: 'blog' },
			title: 'Featured Blog Post',
			validation: (Rule: Rule) => Rule.required().error('A blog must be selected for the banner'),
			options: {
				filter: '_type == "blog"',
			},
		},
	],
	initialValue: {
		 title: 'Banner'
	}
};

export default banner;