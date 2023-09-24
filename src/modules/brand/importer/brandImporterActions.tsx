import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/brand/importer/brandImporterSelectors';
import BrandService from 'src/modules/brand/brandService';
import fields from 'src/modules/brand/importer/brandImporterFields';
import { i18n } from 'src/i18n';

const brandImporterActions = importerActions(
  'BRAND_IMPORTER',
  selectors,
  BrandService.import,
  fields,
  i18n('entities.brand.importer.fileName'),
);

export default brandImporterActions;