import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/subTasks/importer/subTasksImporterSelectors';
import SubTasksService from 'src/modules/subTasks/subTasksService';
import fields from 'src/modules/subTasks/importer/subTasksImporterFields';
import { i18n } from 'src/i18n';

const subTasksImporterActions = importerActions(
  'SUBTASKS_IMPORTER',
  selectors,
  SubTasksService.import,
  fields,
  i18n('entities.subTasks.importer.fileName'),
);

export default subTasksImporterActions;