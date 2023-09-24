import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/availabilityTimeslot/importer/availabilityTimeslotImporterSelectors';
import AvailabilityTimeslotService from '../../../modules/availabilityTimeslot/availabilityTimeslotService';
import fields from '../../../modules/availabilityTimeslot/importer/availabilityTimeslotImporterFields';
import { i18n } from '../../../i18n';

const availabilityTimeslotImporterActions = importerActions(
  'AVAILABILITYTIMESLOT_IMPORTER',
  selectors,
  AvailabilityTimeslotService.import,
  fields,
  i18n('entities.availabilityTimeslot.importer.fileName'),
);

export default availabilityTimeslotImporterActions;
