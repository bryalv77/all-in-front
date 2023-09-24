import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/taskTags/importer/taskTagsImporterSelectors';
import TaskTagsService from 'src/modules/taskTags/taskTagsService';
import fields from 'src/modules/taskTags/importer/taskTagsImporterFields';
import { i18n } from 'src/i18n';

const taskTagsImporterActions = importerActions(
  'TASKTAGS_IMPORTER',
  selectors,
  TaskTagsService.import,
  fields,
  i18n('entities.taskTags.importer.fileName'),
);

export default taskTagsImporterActions;