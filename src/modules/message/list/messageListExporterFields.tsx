import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.message.fields.id'),
  },
  {
    name: 'senderId',
    label: i18n('entities.message.fields.senderId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'recipientId',
    label: i18n('entities.message.fields.recipientId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'content',
    label: i18n('entities.message.fields.content'),
  },
  {
    name: 'media',
    label: i18n('entities.message.fields.media'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'conversationId',
    label: i18n('entities.message.fields.conversationId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'status',
    label: i18n('entities.message.fields.status'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.message.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.message.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
