import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'businessId',
    label: i18n('entities.availabilityTimeslot.fields.businessId'),
    schema: schemas.relationToOne(
      i18n('entities.availabilityTimeslot.fields.businessId'),
      {},
    ),
  },
  {
    name: 'dayOfTheWeek',
    label: i18n('entities.availabilityTimeslot.fields.dayOfTheWeek'),
    schema: schemas.string(
      i18n('entities.availabilityTimeslot.fields.dayOfTheWeek'),
      {},
    ),
  },
  {
    name: 'startTime',
    label: i18n('entities.availabilityTimeslot.fields.startTime'),
    schema: schemas.datetime(
      i18n('entities.availabilityTimeslot.fields.startTime'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'endTime',
    label: i18n('entities.availabilityTimeslot.fields.endTime'),
    schema: schemas.datetime(
      i18n('entities.availabilityTimeslot.fields.endTime'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'capacity',
    label: i18n('entities.availabilityTimeslot.fields.capacity'),
    schema: schemas.integer(
      i18n('entities.availabilityTimeslot.fields.capacity'),
      {},
    ),
  },
];