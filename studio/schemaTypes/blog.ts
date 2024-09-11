import { Rule } from "@sanity/types"

const blog = {
	name: 'blog',
	title: 'Blog',
	type: 'document',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string',
			validation: (Rule: Rule) => Rule.required().max(100).warning('Shorter titles are usually better')
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			validation: (Rule: Rule) => Rule.required(),
			options: {
				source: 'title',
			}
		},
		{
			name: 'tags',
			title: 'Tags',
			type: 'array',
			of: [{type: 'reference', to: [{type: 'tags'}]}],
			validation: (Rule: Rule) => Rule.required().min(1).error('At least one tag is required.')
		},
		{
			name: 'readTime',
			title: 'Read Time (in minutes)',
			type: 'number',
			validation: (Rule: Rule) => Rule.required().min(1).max(60).error('Read time must be between 1 and 60')
		},
		{
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true
			},
			validation: (Rule: Rule) => Rule.required().error('An image is required')
		},
		{
			name: 'smallDescription',
			title: 'Small Description',
			type: 'string',
			validation: (Rule: Rule) => Rule.required().max(200).warning('Shorter descriptions are usually better')
		},
		{
			name: 'content',
			title: 'Content',
			type: 'array',
			of: [{type: 'block'}],
			validation: (Rule: Rule) => Rule.required().min(1).error('Content is required')
		}
	]
}

export default blog