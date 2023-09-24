import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/deliveryMethod/importer/deliveryMethodImporterSelectors';
import DeliveryMethodService from 'src/modules/deliveryMethod/deliveryMethodService';
import fields from 'src/modules/deliveryMethod/importer/deliveryMethodImporterFields';
import { i18n } from 'src/i18n';

const deliveryMethodImporterActions = importerActions(
  'DELIVERYMETHOD_IMPORTER',
  selectors,
  DeliveryMethodService.import,
  fields,
  i18n('entities.deliveryMethod.importer.fileName'),
);

export default deliveryMethodImporterActions;