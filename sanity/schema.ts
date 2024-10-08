import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './schemaTypes/blockContentType';
import { categoryType } from './schemaTypes/categoryType';
import { postType } from './schemaTypes/postType';
import { authorType } from './schemaTypes/authorType';
import comment from './schemaTypes/comment';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, postType, authorType, comment],
};
