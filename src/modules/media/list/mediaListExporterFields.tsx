import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.media.fields.id'),
  },
  {
    name: 'file',
    label: i18n('entities.media.fields.file'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'metadata',
    label: i18n('entities.media.fields.metadata'),
  },
  {
    name: 'userId',
    label: i18n('entities.media.fields.userId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'show',
    label: i18n('entities.media.fields.show'),
    render: exporterRenders.boolean(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.media.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.media.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
