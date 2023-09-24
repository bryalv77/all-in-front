import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.hashtag.fields.id'),
  },
  {
    name: 'hashtagText',
    label: i18n('entities.hashtag.fields.hashtagText'),
  },
  {
    name: 'usageCount',
    label: i18n('entities.hashtag.fields.usageCount'),
  },
  {
    name: 'createdAt',
    label: i18n('entities.hashtag.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.hashtag.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
