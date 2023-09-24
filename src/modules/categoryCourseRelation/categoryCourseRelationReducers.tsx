import list from '../../../modules/categoryCourseRelation/list/categoryCourseRelationListReducers';
import form from '../../../modules/categoryCourseRelation/form/categoryCourseRelationFormReducers';
import view from '../../../modules/categoryCourseRelation/view/categoryCourseRelationViewReducers';
import destroy from '../../../modules/categoryCourseRelation/destroy/categoryCourseRelationDestroyReducers';
import importerReducer from '../../../modules/categoryCourseRelation/importer/categoryCourseRelationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
