import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/brand/importer/brandImporterSelectors';
import BrandService from '../../../modules/brand/brandService';
import fields from '../../../modules/brand/importer/brandImporterFields';
import { i18n } from '../../../i18n';

const brandImporterActions = importerActions(
  'BRAND_IMPORTER',
  selectors,
  BrandService.import,
  fields,
  i18n('entities.brand.importer.fileName'),
);

export default brandImporterActions;
