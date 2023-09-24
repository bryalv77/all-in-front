import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.operation.fields.id'),
  },
  {
    name: 'fintonicId',
    label: i18n('entities.operation.fields.fintonicId'),
  },
  {
    name: 'description',
    label: i18n('entities.operation.fields.description'),
  },
  {
    name: 'reference',
    label: i18n('entities.operation.fields.reference'),
  },
  {
    name: 'note',
    label: i18n('entities.operation.fields.note'),
  },
  {
    name: 'userDescription',
    label: i18n('entities.operation.fields.userDescription'),
  },
  {
    name: 'quantity',
    label: i18n('entities.operation.fields.quantity'),
    render: exporterRenders.decimal(),
  },
  {
    name: 'valueDate',
    label: i18n('entities.operation.fields.valueDate'),
  },
  {
    name: 'operationDate',
    label: i18n('entities.operation.fields.operationDate'),
  },
  {
    name: 'cleanNote',
    label: i18n('entities.operation.fields.cleanNote'),
  },
  {
    name: 'cleanUserDescription',
    label: i18n('entities.operation.fields.cleanUserDescription'),
  },
  {
    name: 'primaryDisplay',
    label: i18n('entities.operation.fields.primaryDisplay'),
  },
  {
    name: 'secondaryDisplay',
    label: i18n('entities.operation.fields.secondaryDisplay'),
  },
  {
    name: 'categoryId',
    label: i18n('entities.operation.fields.categoryId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'bankId',
    label: i18n('entities.operation.fields.bankId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'receipt',
    label: i18n('entities.operation.fields.receipt'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'userId',
    label: i18n('entities.operation.fields.userId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.operation.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.operation.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
