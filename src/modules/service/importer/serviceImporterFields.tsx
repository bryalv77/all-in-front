import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.service.fields.name'),
    schema: schemas.string(
      i18n('entities.service.fields.name'),
      {},
    ),
  },
  {
    name: 'photo',
    label: i18n('entities.service.fields.photo'),
    schema: schemas.images(
      i18n('entities.service.fields.photo'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.service.fields.description'),
    schema: schemas.string(
      i18n('entities.service.fields.description'),
      {},
    ),
  },
  {
    name: 'hoursDuration',
    label: i18n('entities.service.fields.hoursDuration'),
    schema: schemas.decimal(
      i18n('entities.service.fields.hoursDuration'),
      {},
    ),
  },
  {
    name: 'price',
    label: i18n('entities.service.fields.price'),
    schema: schemas.decimal(
      i18n('entities.service.fields.price'),
      {},
    ),
  },
  {
    name: 'businessId',
    label: i18n('entities.service.fields.businessId'),
    schema: schemas.relationToOne(
      i18n('entities.service.fields.businessId'),
      {},
    ),
  },
  {
    name: 'active',
    label: i18n('entities.service.fields.active'),
    schema: schemas.boolean(
      i18n('entities.service.fields.active'),
      {},
    ),
  },
];
