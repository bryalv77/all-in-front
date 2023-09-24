import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/promotions/importer/promotionsImporterSelectors';
import PromotionsService from '../../../modules/promotions/promotionsService';
import fields from '../../../modules/promotions/importer/promotionsImporterFields';
import { i18n } from '../../../i18n';

const promotionsImporterActions = importerActions(
  'PROMOTIONS_IMPORTER',
  selectors,
  PromotionsService.import,
  fields,
  i18n('entities.promotions.importer.fileName'),
);

export default promotionsImporterActions;
