import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';

export default [
  {
    name: 'fintonicId',
    label: i18n('entities.bank.fields.fintonicId'),
    schema: schemas.string(
      i18n('entities.bank.fields.fintonicId'),
      {},
    ),
  },
  {
    name: 'name',
    label: i18n('entities.bank.fields.name'),
    schema: schemas.string(
      i18n('entities.bank.fields.name'),
      {},
    ),
  },
  {
    name: 'logo',
    label: i18n('entities.bank.fields.logo'),
    schema: schemas.images(
      i18n('entities.bank.fields.logo'),
      {},
    ),
  },
];