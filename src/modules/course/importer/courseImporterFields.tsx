import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'teacherId',
    label: i18n('entities.course.fields.teacherId'),
    schema: schemas.relationToOne(
      i18n('entities.course.fields.teacherId'),
      {},
    ),
  },
  {
    name: 'title',
    label: i18n('entities.course.fields.title'),
    schema: schemas.string(
      i18n('entities.course.fields.title'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.course.fields.description'),
    schema: schemas.string(
      i18n('entities.course.fields.description'),
      {},
    ),
  },
  {
    name: 'price',
    label: i18n('entities.course.fields.price'),
    schema: schemas.decimal(
      i18n('entities.course.fields.price'),
      {},
    ),
  },
  {
    name: 'hoursDuration',
    label: i18n('entities.course.fields.hoursDuration'),
    schema: schemas.decimal(
      i18n('entities.course.fields.hoursDuration'),
      {},
    ),
  },
  {
    name: 'startDate',
    label: i18n('entities.course.fields.startDate'),
    schema: schemas.date(
      i18n('entities.course.fields.startDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'endDate',
    label: i18n('entities.course.fields.endDate'),
    schema: schemas.date(
      i18n('entities.course.fields.endDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'level',
    label: i18n('entities.course.fields.level'),
    schema: schemas.string(
      i18n('entities.course.fields.level'),
      {},
    ),
  },
  {
    name: 'additionalInfo',
    label: i18n('entities.course.fields.additionalInfo'),
    schema: schemas.string(
      i18n('entities.course.fields.additionalInfo'),
      {},
    ),
  },
  {
    name: 'active',
    label: i18n('entities.course.fields.active'),
    schema: schemas.boolean(
      i18n('entities.course.fields.active'),
      {},
    ),
  },
];