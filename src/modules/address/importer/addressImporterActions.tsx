import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/address/importer/addressImporterSelectors';
import AddressService from '../../../modules/address/addressService';
import fields from '../../../modules/address/importer/addressImporterFields';
import { i18n } from '../../../i18n';

const addressImporterActions = importerActions(
  'ADDRESS_IMPORTER',
  selectors,
  AddressService.import,
  fields,
  i18n('entities.address.importer.fileName'),
);

export default addressImporterActions;
