import list from '../../modules/country/list/countryListReducers';
import form from '../../modules/country/form/countryFormReducers';
import view from '../../modules/country/view/countryViewReducers';
import destroy from '../../modules/country/destroy/countryDestroyReducers';
import importerReducer from '../../modules/country/importer/countryImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  destroy,
  importer: importerReducer,
});
