import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.conversation.fields.id'),
  },
  {
    name: 'type',
    label: i18n('entities.conversation.fields.type'),
  },
  {
    name: 'name',
    label: i18n('entities.conversation.fields.name'),
  },
  {
    name: 'avatar',
    label: i18n('entities.conversation.fields.avatar'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.conversation.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.conversation.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
