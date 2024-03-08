import { defineDocumentType, makeSource } from 'contentlayer/source-files';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    url: {
        type: 'string',
        resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
    },
};

export const Blog = defineDocumentType(() => ({
    name: 'Blog',
    filePathPattern: `**/**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
        },
        image: {
            type: 'string',
            required: true,
        },
        publishedAt: {
            type: 'date',
            required: true,
        },
        updatedAt: {
            type: 'date',
        },
        isPublished: {
            type: 'boolean',
            required: true,
        },
        tags: {
            type: 'list',
            of: {type: 'string'},
        },
    },
    computedFields,
}));

export default makeSource({
    contentDirPath: './content',
    documentTypes: [Blog],
});
