import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/courseComment/importer/courseCommentImporterSelectors';
import CourseCommentService from '../../../modules/courseComment/courseCommentService';
import fields from '../../../modules/courseComment/importer/courseCommentImporterFields';
import { i18n } from '../../../i18n';

const courseCommentImporterActions = importerActions(
  'COURSECOMMENT_IMPORTER',
  selectors,
  CourseCommentService.import,
  fields,
  i18n('entities.courseComment.importer.fileName'),
);

export default courseCommentImporterActions;
