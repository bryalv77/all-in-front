import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.postHashtag.fields.id'),
  },
  {
    name: 'postId',
    label: i18n('entities.postHashtag.fields.postId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'hashtagId',
    label: i18n('entities.postHashtag.fields.hashtagId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.postHashtag.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.postHashtag.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
