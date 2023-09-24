import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.availabilityTimeslot.fields.id'),
  },
  {
    name: 'businessId',
    label: i18n('entities.availabilityTimeslot.fields.businessId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'dayOfTheWeek',
    label: i18n('entities.availabilityTimeslot.fields.dayOfTheWeek'),
  },
  {
    name: 'startTime',
    label: i18n('entities.availabilityTimeslot.fields.startTime'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'endTime',
    label: i18n('entities.availabilityTimeslot.fields.endTime'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'capacity',
    label: i18n('entities.availabilityTimeslot.fields.capacity'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.availabilityTimeslot.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.availabilityTimeslot.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
