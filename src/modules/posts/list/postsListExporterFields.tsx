import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.posts.fields.id'),
  },
  {
    name: 'content',
    label: i18n('entities.posts.fields.content'),
  },
  {
    name: 'postDate',
    label: i18n('entities.posts.fields.postDate'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'media',
    label: i18n('entities.posts.fields.media'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'userId',
    label: i18n('entities.posts.fields.userId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.posts.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.posts.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
