import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.paymentMethods.fields.name'),
    schema: schemas.string(
      i18n('entities.paymentMethods.fields.name'),
      {},
    ),
  },
  {
    name: 'additionalInfo',
    label: i18n('entities.paymentMethods.fields.additionalInfo'),
    schema: schemas.string(
      i18n('entities.paymentMethods.fields.additionalInfo'),
      {},
    ),
  },
  {
    name: 'active',
    label: i18n('entities.paymentMethods.fields.active'),
    schema: schemas.boolean(
      i18n('entities.paymentMethods.fields.active'),
      {},
    ),
  },
];