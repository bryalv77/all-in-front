import listActions from '../../../modules/categoryCourseRelation/list/categoryCourseRelationListActions';
import CategoryCourseRelationService from '../../../modules/categoryCourseRelation/categoryCourseRelationService';
import Errors from '../../../modules/shared/error/errors';
import { i18n } from '../../../i18n';
import { getHistory } from '../../../modules/store';
import Message from '../../../view/shared/message';

const prefix = 'CATEGORYCOURSERELATION_DESTROY';

const categoryCourseRelationDestroyActions = {
  DESTROY_STARTED: `${prefix}_DESTROY_STARTED`,
  DESTROY_SUCCESS: `${prefix}_DESTROY_SUCCESS`,
  DESTROY_ERROR: `${prefix}_DESTROY_ERROR`,

  DESTROY_ALL_STARTED: `${prefix}_DESTROY_ALL_STARTED`,
  DESTROY_ALL_SUCCESS: `${prefix}_DESTROY_ALL_SUCCESS`,
  DESTROY_ALL_ERROR: `${prefix}_DESTROY_ALL_ERROR`,

  doDestroy: (id) => async (dispatch) => {
    try {
      dispatch({
        type: categoryCourseRelationDestroyActions.DESTROY_STARTED,
      });

      await CategoryCourseRelationService.destroyAll([id]);

      dispatch({
        type: categoryCourseRelationDestroyActions.DESTROY_SUCCESS,
      });

      Message.success(
        i18n(
          'entities.categoryCourseRelation.destroy.success',
        ),
      );

      dispatch(listActions.doFetchCurrentFilter());

      getHistory().push('/category-course-relation');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: categoryCourseRelationDestroyActions.DESTROY_ERROR,
      });
    }
  },

  doDestroyAll: (ids) => async (dispatch) => {
    try {
      dispatch({
        type: categoryCourseRelationDestroyActions.DESTROY_ALL_STARTED,
      });

      await CategoryCourseRelationService.destroyAll(ids);

      dispatch({
        type: categoryCourseRelationDestroyActions.DESTROY_ALL_SUCCESS,
      });

      if (listActions) {
        dispatch(listActions.doClearAllSelected());
        dispatch(listActions.doFetchCurrentFilter());
      }

      Message.success(
        i18n(
          'entities.categoryCourseRelation.destroyAll.success',
        ),
      );

      getHistory().push('/category-course-relation');
    } catch (error) {
      Errors.handle(error);

      dispatch(listActions.doFetchCurrentFilter());

      dispatch({
        type: categoryCourseRelationDestroyActions.DESTROY_ALL_ERROR,
      });
    }
  },
};

export default categoryCourseRelationDestroyActions;
