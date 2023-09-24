import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'title',
    label: i18n('entities.lesson.fields.title'),
    schema: schemas.string(
      i18n('entities.lesson.fields.title'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.lesson.fields.description'),
    schema: schemas.string(
      i18n('entities.lesson.fields.description'),
      {},
    ),
  },
  {
    name: 'externalUrl',
    label: i18n('entities.lesson.fields.externalUrl'),
    schema: schemas.string(
      i18n('entities.lesson.fields.externalUrl'),
      {},
    ),
  },
  {
    name: 'media',
    label: i18n('entities.lesson.fields.media'),
    schema: schemas.files(
      i18n('entities.lesson.fields.media'),
      {},
    ),
  },
  {
    name: 'hoursDuration',
    label: i18n('entities.lesson.fields.hoursDuration'),
    schema: schemas.decimal(
      i18n('entities.lesson.fields.hoursDuration'),
      {},
    ),
  },
  {
    name: 'courseId',
    label: i18n('entities.lesson.fields.courseId'),
    schema: schemas.relationToOne(
      i18n('entities.lesson.fields.courseId'),
      {},
    ),
  },
  {
    name: 'active',
    label: i18n('entities.lesson.fields.active'),
    schema: schemas.boolean(
      i18n('entities.lesson.fields.active'),
      {},
    ),
  },
];