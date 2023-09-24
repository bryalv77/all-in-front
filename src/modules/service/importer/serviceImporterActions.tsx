import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/service/importer/serviceImporterSelectors';
import ServiceService from '../../../modules/service/serviceService';
import fields from '../../../modules/service/importer/serviceImporterFields';
import { i18n } from '../../../i18n';

const serviceImporterActions = importerActions(
  'SERVICE_IMPORTER',
  selectors,
  ServiceService.import,
  fields,
  i18n('entities.service.importer.fileName'),
);

export default serviceImporterActions;
