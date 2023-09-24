import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/deliveryMethod/importer/deliveryMethodImporterSelectors';
import DeliveryMethodService from '../../../modules/deliveryMethod/deliveryMethodService';
import fields from '../../../modules/deliveryMethod/importer/deliveryMethodImporterFields';
import { i18n } from '../../../i18n';

const deliveryMethodImporterActions = importerActions(
  'DELIVERYMETHOD_IMPORTER',
  selectors,
  DeliveryMethodService.import,
  fields,
  i18n('entities.deliveryMethod.importer.fileName'),
);

export default deliveryMethodImporterActions;
