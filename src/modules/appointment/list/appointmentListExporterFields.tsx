import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.appointment.fields.id'),
  },
  {
    name: 'customer',
    label: i18n('entities.appointment.fields.customer'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'serviceId',
    label: i18n('entities.appointment.fields.serviceId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'timeslotId',
    label: i18n('entities.appointment.fields.timeslotId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'appointmentDate',
    label: i18n('entities.appointment.fields.appointmentDate'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'appointmentStatus',
    label: i18n('entities.appointment.fields.appointmentStatus'),
  },
  {
    name: 'paymentStatus',
    label: i18n('entities.appointment.fields.paymentStatus'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.appointment.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.appointment.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
