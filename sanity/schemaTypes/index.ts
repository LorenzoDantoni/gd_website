import { type SchemaTypeDefinition } from 'sanity'
import {blockContentType} from './blockContentType'
import {postType} from './postType'
import { documentType } from "./documentType";


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, postType, documentType],
}
