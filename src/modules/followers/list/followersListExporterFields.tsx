import { i18n } from 'src/i18n';
import exporterRenders from 'src/modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.followers.fields.id'),
  },
  {
    name: 'userId',
    label: i18n('entities.followers.fields.userId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'followerId',
    label: i18n('entities.followers.fields.followerId'),
    render: exporterRenders.relationToOne(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.followers.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.followers.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
