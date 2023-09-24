import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/appointment/importer/appointmentImporterSelectors';
import AppointmentService from '../../../modules/appointment/appointmentService';
import fields from '../../../modules/appointment/importer/appointmentImporterFields';
import { i18n } from '../../../i18n';

const appointmentImporterActions = importerActions(
  'APPOINTMENT_IMPORTER',
  selectors,
  AppointmentService.import,
  fields,
  i18n('entities.appointment.importer.fileName'),
);

export default appointmentImporterActions;
