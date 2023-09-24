import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/city/importer/cityImporterSelectors';
import CityService from '../../../modules/city/cityService';
import fields from '../../../modules/city/importer/cityImporterFields';
import { i18n } from '../../../i18n';

const cityImporterActions = importerActions(
  'CITY_IMPORTER',
  selectors,
  CityService.import,
  fields,
  i18n('entities.city.importer.fileName'),
);

export default cityImporterActions;
