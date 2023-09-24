import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/promotions/importer/promotionsImporterSelectors';
import PromotionsService from 'src/modules/promotions/promotionsService';
import fields from 'src/modules/promotions/importer/promotionsImporterFields';
import { i18n } from 'src/i18n';

const promotionsImporterActions = importerActions(
  'PROMOTIONS_IMPORTER',
  selectors,
  PromotionsService.import,
  fields,
  i18n('entities.promotions.importer.fileName'),
);

export default promotionsImporterActions;