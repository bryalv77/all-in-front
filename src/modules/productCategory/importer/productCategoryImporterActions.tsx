import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/productCategory/importer/productCategoryImporterSelectors';
import ProductCategoryService from '../../../modules/productCategory/productCategoryService';
import fields from '../../../modules/productCategory/importer/productCategoryImporterFields';
import { i18n } from '../../../i18n';

const productCategoryImporterActions = importerActions(
  'PRODUCTCATEGORY_IMPORTER',
  selectors,
  ProductCategoryService.import,
  fields,
  i18n('entities.productCategory.importer.fileName'),
);

export default productCategoryImporterActions;
