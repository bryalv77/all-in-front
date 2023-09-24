import list from 'src/modules/categoryCourseRelation/list/categoryCourseRelationListReducers';
import form from 'src/modules/categoryCourseRelation/form/categoryCourseRelationFormReducers';
import view from 'src/modules/categoryCourseRelation/view/categoryCourseRelationViewReducers';
import destroy from 'src/modules/categoryCourseRelation/destroy/categoryCourseRelationDestroyReducers';
import importerReducer from 'src/modules/categoryCourseRelation/importer/categoryCourseRelationImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
