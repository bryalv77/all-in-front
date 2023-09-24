import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/productReview/importer/productReviewImporterSelectors';
import ProductReviewService from 'src/modules/productReview/productReviewService';
import fields from 'src/modules/productReview/importer/productReviewImporterFields';
import { i18n } from 'src/i18n';

const productReviewImporterActions = importerActions(
  'PRODUCTREVIEW_IMPORTER',
  selectors,
  ProductReviewService.import,
  fields,
  i18n('entities.productReview.importer.fileName'),
);

export default productReviewImporterActions;