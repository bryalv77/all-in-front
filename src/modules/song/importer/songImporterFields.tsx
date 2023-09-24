import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';

export default [
  {
    name: 'title',
    label: i18n('entities.song.fields.title'),
    schema: schemas.string(
      i18n('entities.song.fields.title'),
      {},
    ),
  },
  {
    name: 'artistId',
    label: i18n('entities.song.fields.artistId'),
    schema: schemas.relationToOne(
      i18n('entities.song.fields.artistId'),
      {},
    ),
  },
  {
    name: 'albumId',
    label: i18n('entities.song.fields.albumId'),
    schema: schemas.relationToOne(
      i18n('entities.song.fields.albumId'),
      {},
    ),
  },
  {
    name: 'duration',
    label: i18n('entities.song.fields.duration'),
    schema: schemas.string(
      i18n('entities.song.fields.duration'),
      {},
    ),
  },
  {
    name: 'genre',
    label: i18n('entities.song.fields.genre'),
    schema: schemas.string(
      i18n('entities.song.fields.genre'),
      {},
    ),
  },
  {
    name: 'externalUrl',
    label: i18n('entities.song.fields.externalUrl'),
    schema: schemas.string(
      i18n('entities.song.fields.externalUrl'),
      {},
    ),
  },
  {
    name: 'media',
    label: i18n('entities.song.fields.media'),
    schema: schemas.files(
      i18n('entities.song.fields.media'),
      {},
    ),
  },
];
