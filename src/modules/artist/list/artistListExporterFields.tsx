import { i18n } from '../../../i18n';
import exporterRenders from '../../../modules/shared/exporter/exporterRenders';

export default [
  {
    name: 'id',
    label: i18n('entities.artist.fields.id'),
  },
  {
    name: 'name',
    label: i18n('entities.artist.fields.name'),
  },
  {
    name: 'bio',
    label: i18n('entities.artist.fields.bio'),
  },
  {
    name: 'photo',
    label: i18n('entities.artist.fields.photo'),
    render: exporterRenders.filesOrImages(),
  },
  {
    name: 'createdAt',
    label: i18n('entities.artist.fields.createdAt'),
    render: exporterRenders.datetime(),
  },
  {
    name: 'updatedAt',
    label: i18n('entities.artist.fields.updatedAt'),
    render: exporterRenders.datetime(),
  },
];
