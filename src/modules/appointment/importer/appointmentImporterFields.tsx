import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import appointmentEnumerators from 'src/modules/appointment/appointmentEnumerators';
import moment from 'moment';

export default [
  {
    name: 'customer',
    label: i18n('entities.appointment.fields.customer'),
    schema: schemas.relationToOne(
      i18n('entities.appointment.fields.customer'),
      {},
    ),
  },
  {
    name: 'serviceId',
    label: i18n('entities.appointment.fields.serviceId'),
    schema: schemas.relationToOne(
      i18n('entities.appointment.fields.serviceId'),
      {},
    ),
  },
  {
    name: 'timeslotId',
    label: i18n('entities.appointment.fields.timeslotId'),
    schema: schemas.relationToOne(
      i18n('entities.appointment.fields.timeslotId'),
      {},
    ),
  },
  {
    name: 'appointmentDate',
    label: i18n('entities.appointment.fields.appointmentDate'),
    schema: schemas.datetime(
      i18n('entities.appointment.fields.appointmentDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD HH:mm') : value,
  },
  {
    name: 'appointmentStatus',
    label: i18n('entities.appointment.fields.appointmentStatus'),
    schema: schemas.enumerator(
      i18n('entities.appointment.fields.appointmentStatus'),
      {
        "options": appointmentEnumerators.appointmentStatus
      },
    ),
  },
  {
    name: 'paymentStatus',
    label: i18n('entities.appointment.fields.paymentStatus'),
    schema: schemas.enumerator(
      i18n('entities.appointment.fields.paymentStatus'),
      {
        "options": appointmentEnumerators.paymentStatus
      },
    ),
  },
];