import importerActions from 'src/modules/shared/importer/importerActions';
import selectors from 'src/modules/categoryCourseRelation/importer/categoryCourseRelationImporterSelectors';
import CategoryCourseRelationService from 'src/modules/categoryCourseRelation/categoryCourseRelationService';
import fields from 'src/modules/categoryCourseRelation/importer/categoryCourseRelationImporterFields';
import { i18n } from 'src/i18n';

const categoryCourseRelationImporterActions = importerActions(
  'CATEGORYCOURSERELATION_IMPORTER',
  selectors,
  CategoryCourseRelationService.import,
  fields,
  i18n('entities.categoryCourseRelation.importer.fileName'),
);

export default categoryCourseRelationImporterActions;