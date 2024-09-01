import { type SchemaTypeDefinition } from 'sanity'

import {blockContentType} from './blockContentType'
import {courseType} from './courseType'
import {lessonType} from './lessonType'
import {authorType} from './authorType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, courseType, lessonType, authorType],
}
