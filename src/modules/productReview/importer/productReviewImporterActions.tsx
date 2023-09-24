import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/productReview/importer/productReviewImporterSelectors';
import ProductReviewService from '../../../modules/productReview/productReviewService';
import fields from '../../../modules/productReview/importer/productReviewImporterFields';
import { i18n } from '../../../i18n';

const productReviewImporterActions = importerActions(
  'PRODUCTREVIEW_IMPORTER',
  selectors,
  ProductReviewService.import,
  fields,
  i18n('entities.productReview.importer.fileName'),
);

export default productReviewImporterActions;
