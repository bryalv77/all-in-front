import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.bank.fields.id'),
  },
  {
    name: 'fintonicId',
    label: i18n('entities.bank.fields.fintonicId'),
  },
  {
    name: 'name',
    label: i18n('entities.bank.fields.name'),
  },
  {
    name: 'logo',
    label: i18n('entities.bank.fields.logo'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.bank.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.bank.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
