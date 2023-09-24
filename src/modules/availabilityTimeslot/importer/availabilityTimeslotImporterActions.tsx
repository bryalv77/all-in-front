import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/availabilityTimeslot/importer/availabilityTimeslotImporterSelectors';
import AvailabilityTimeslotService from 'src/modules/availabilityTimeslot/availabilityTimeslotService';
import fields from 'src/modules/availabilityTimeslot/importer/availabilityTimeslotImporterFields';
import { i18n } from 'src/i18n';

const availabilityTimeslotImporterActions = importerActions(
  'AVAILABILITYTIMESLOT_IMPORTER',
  selectors,
  AvailabilityTimeslotService.import,
  fields,
  i18n('entities.availabilityTimeslot.importer.fileName'),
);

export default availabilityTimeslotImporterActions;