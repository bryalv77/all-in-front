import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.like.fields.id'),
  },
  {
    name: 'userId',
    label: i18n('entities.like.fields.userId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'postId',
    label: i18n('entities.like.fields.postId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.like.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.like.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
