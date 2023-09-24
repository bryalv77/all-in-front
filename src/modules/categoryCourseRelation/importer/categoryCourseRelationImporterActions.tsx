import importerActions from '../../../modules/shared/importer/importerActions';
import selectors from '../../../modules/categoryCourseRelation/importer/categoryCourseRelationImporterSelectors';
import CategoryCourseRelationService from '../../../modules/categoryCourseRelation/categoryCourseRelationService';
import fields from '../../../modules/categoryCourseRelation/importer/categoryCourseRelationImporterFields';
import { i18n } from '../../../i18n';

const categoryCourseRelationImporterActions =
  importerActions(
    'CATEGORYCOURSERELATION_IMPORTER',
    selectors,
    CategoryCourseRelationService.import,
    fields,
    i18n(
      'entities.categoryCourseRelation.importer.fileName',
    ),
  );

export default categoryCourseRelationImporterActions;
