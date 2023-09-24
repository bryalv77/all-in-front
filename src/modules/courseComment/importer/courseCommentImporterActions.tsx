import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/courseComment/importer/courseCommentImporterSelectors';
import CourseCommentService from 'src/modules/courseComment/courseCommentService';
import fields from 'src/modules/courseComment/importer/courseCommentImporterFields';
import { i18n } from 'src/i18n';

const courseCommentImporterActions = importerActions(
  'COURSECOMMENT_IMPORTER',
  selectors,
  CourseCommentService.import,
  fields,
  i18n('entities.courseComment.importer.fileName'),
);

export default courseCommentImporterActions;