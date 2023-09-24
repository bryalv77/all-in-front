import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.deliveryMethod.fields.name'),
    schema: schemas.string(
      i18n('entities.deliveryMethod.fields.name'),
      {},
    ),
  },
  {
    name: 'userId',
    label: i18n('entities.deliveryMethod.fields.userId'),
    schema: schemas.relationToOne(
      i18n('entities.deliveryMethod.fields.userId'),
      {},
    ),
  },
  {
    name: 'vehicleInfo',
    label: i18n(
      'entities.deliveryMethod.fields.vehicleInfo',
    ),
    schema: schemas.string(
      i18n('entities.deliveryMethod.fields.vehicleInfo'),
      {},
    ),
  },
  {
    name: 'additionalInfo',
    label: i18n(
      'entities.deliveryMethod.fields.additionalInfo',
    ),
    schema: schemas.string(
      i18n('entities.deliveryMethod.fields.additionalInfo'),
      {},
    ),
  },
  {
    name: 'active',
    label: i18n('entities.deliveryMethod.fields.active'),
    schema: schemas.boolean(
      i18n('entities.deliveryMethod.fields.active'),
      {},
    ),
  },
];
