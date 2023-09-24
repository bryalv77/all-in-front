import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';

export default [
  {
    name: 'name',
    label: i18n('entities.country.fields.name'),
    schema: schemas.string(
      i18n('entities.country.fields.name'),
      {},
    ),
  },
];
