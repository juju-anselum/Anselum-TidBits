import { Rule } from "@sanity/types"

const tags = {
	name: 'tags',
	title: 'Tags',
	type: 'document',
	fields: [
		{
      name: 'title',
      type: 'string',
      title: 'Tag Title',
      validation: (Rule: Rule) => Rule.required().max(30).error('Tag title must be 30 characters or less'),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
	]
}

export default tags