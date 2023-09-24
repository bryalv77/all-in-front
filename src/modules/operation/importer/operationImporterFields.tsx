import schemas from 'src/modules/shared/yup/yupImporterSchemas';
import { i18n } from 'src/i18n';import moment from 'moment';

export default [
  {
    name: 'fintonicId',
    label: i18n('entities.operation.fields.fintonicId'),
    schema: schemas.string(
      i18n('entities.operation.fields.fintonicId'),
      {},
    ),
  },
  {
    name: 'description',
    label: i18n('entities.operation.fields.description'),
    schema: schemas.string(
      i18n('entities.operation.fields.description'),
      {},
    ),
  },
  {
    name: 'reference',
    label: i18n('entities.operation.fields.reference'),
    schema: schemas.string(
      i18n('entities.operation.fields.reference'),
      {},
    ),
  },
  {
    name: 'note',
    label: i18n('entities.operation.fields.note'),
    schema: schemas.string(
      i18n('entities.operation.fields.note'),
      {},
    ),
  },
  {
    name: 'userDescription',
    label: i18n('entities.operation.fields.userDescription'),
    schema: schemas.string(
      i18n('entities.operation.fields.userDescription'),
      {},
    ),
  },
  {
    name: 'quantity',
    label: i18n('entities.operation.fields.quantity'),
    schema: schemas.decimal(
      i18n('entities.operation.fields.quantity'),
      {},
    ),
  },
  {
    name: 'valueDate',
    label: i18n('entities.operation.fields.valueDate'),
    schema: schemas.date(
      i18n('entities.operation.fields.valueDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'operationDate',
    label: i18n('entities.operation.fields.operationDate'),
    schema: schemas.date(
      i18n('entities.operation.fields.operationDate'),
      {},
    ),
   render: (value) => value && value instanceof Date ? moment(value).format('YYYY-MM-DD') : value,
  },
  {
    name: 'cleanNote',
    label: i18n('entities.operation.fields.cleanNote'),
    schema: schemas.string(
      i18n('entities.operation.fields.cleanNote'),
      {},
    ),
  },
  {
    name: 'cleanUserDescription',
    label: i18n('entities.operation.fields.cleanUserDescription'),
    schema: schemas.string(
      i18n('entities.operation.fields.cleanUserDescription'),
      {},
    ),
  },
  {
    name: 'primaryDisplay',
    label: i18n('entities.operation.fields.primaryDisplay'),
    schema: schemas.string(
      i18n('entities.operation.fields.primaryDisplay'),
      {},
    ),
  },
  {
    name: 'secondaryDisplay',
    label: i18n('entities.operation.fields.secondaryDisplay'),
    schema: schemas.string(
      i18n('entities.operation.fields.secondaryDisplay'),
      {},
    ),
  },
  {
    name: 'categoryId',
    label: i18n('entities.operation.fields.categoryId'),
    schema: schemas.relationToOne(
      i18n('entities.operation.fields.categoryId'),
      {},
    ),
  },
  {
    name: 'bankId',
    label: i18n('entities.operation.fields.bankId'),
    schema: schemas.relationToOne(
      i18n('entities.operation.fields.bankId'),
      {},
    ),
  },
  {
    name: 'receipt',
    label: i18n('entities.operation.fields.receipt'),
    schema: schemas.files(
      i18n('entities.operation.fields.receipt'),
      {},
    ),
  },
  {
    name: 'userId',
    label: i18n('entities.operation.fields.userId'),
    schema: schemas.relationToOne(
      i18n('entities.operation.fields.userId'),
      {},
    ),
  },
];