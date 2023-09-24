import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/country/importer/countryImporterSelectors';
import CountryService from '../../../modules/country/countryService';
import fields from '../../../modules/country/importer/countryImporterFields';
import { i18n } from '../../../i18n';

const countryImporterActions = importerActions(
  'COUNTRY_IMPORTER',
  selectors,
  CountryService.import,
  fields,
  i18n('entities.country.importer.fileName'),
);

export default countryImporterActions;
