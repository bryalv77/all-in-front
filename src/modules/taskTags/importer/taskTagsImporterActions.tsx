import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/taskTags/importer/taskTagsImporterSelectors';
import TaskTagsService from '../../../modules/taskTags/taskTagsService';
import fields from '../../../modules/taskTags/importer/taskTagsImporterFields';
import { i18n } from '../../../i18n';

const taskTagsImporterActions = importerActions(
  'TASKTAGS_IMPORTER',
  selectors,
  TaskTagsService.import,
  fields,
  i18n('entities.taskTags.importer.fileName'),
);

export default taskTagsImporterActions;
