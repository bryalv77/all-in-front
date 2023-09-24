import schemas from '../../../modules/shared/yup/yupImporterSchemas';
import { i18n } from '../../../i18n';

export default [
  {
    name: 'comment',
    label: i18n('entities.productReview.fields.comment'),
    schema: schemas.string(
      i18n('entities.productReview.fields.comment'),
      {},
    ),
  },
  {
    name: 'productId',
    label: i18n('entities.productReview.fields.productId'),
    schema: schemas.relationToOne(
      i18n('entities.productReview.fields.productId'),
      {},
    ),
  },
  {
    name: 'customerId',
    label: i18n('entities.productReview.fields.customerId'),
    schema: schemas.relationToOne(
      i18n('entities.productReview.fields.customerId'),
      {},
    ),
  },
  {
    name: 'rating',
    label: i18n('entities.productReview.fields.rating'),
    schema: schemas.decimal(
      i18n('entities.productReview.fields.rating'),
      {},
    ),
  },
];
