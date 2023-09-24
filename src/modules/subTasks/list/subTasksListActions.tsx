import SubTasksService from '../../../modules/subTasks/subTasksService';
import selectors from '../../../modules/subTasks/list/subTasksListSelectors';
import { i18n } from '../../../i18n';
import exporterFields from '../../../modules/subTasks/list/subTasksListExporterFields';
import Errors from '../../../modules/shared/error/errors';
import Exporter from '../../../modules/shared/exporter/exporter';

const prefix = 'SUBTASKS_LIST';

const subTasksListActions = {
  FETCH_STARTED: `${prefix}_FETCH_STARTED`,
  FETCH_SUCCESS: `${prefix}_FETCH_SUCCESS`,
  FETCH_ERROR: `${prefix}_FETCH_ERROR`,

  RESETED: `${prefix}_RESETED`,
  TOGGLE_ONE_SELECTED: `${prefix}_TOGGLE_ONE_SELECTED`,
  TOGGLE_ALL_SELECTED: `${prefix}_TOGGLE_ALL_SELECTED`,
  CLEAR_ALL_SELECTED: `${prefix}_CLEAR_ALL_SELECTED`,

  PAGINATION_CHANGED: `${prefix}_PAGINATION_CHANGED`,
  SORTER_CHANGED: `${prefix}_SORTER_CHANGED`,

  EXPORT_STARTED: `${prefix}_EXPORT_STARTED`,
  EXPORT_SUCCESS: `${prefix}_EXPORT_SUCCESS`,
  EXPORT_ERROR: `${prefix}_EXPORT_ERROR`,

  doClearAllSelected() {
    return {
      type: subTasksListActions.CLEAR_ALL_SELECTED,
    };
  },

  doToggleAllSelected() {
    return {
      type: subTasksListActions.TOGGLE_ALL_SELECTED,
    };
  },

  doToggleOneSelected(id) {
    return {
      type: subTasksListActions.TOGGLE_ONE_SELECTED,
      payload: id,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: subTasksListActions.RESETED,
    });

    dispatch(subTasksListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: subTasksListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await SubTasksService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.subTasks.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: subTasksListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: subTasksListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePagination:
    (pagination) => async (dispatch, getState) => {
      dispatch({
        type: subTasksListActions.PAGINATION_CHANGED,
        payload: pagination,
      });

      dispatch(subTasksListActions.doFetchCurrentFilter());
    },

  doChangeSort: (sorter) => async (dispatch, getState) => {
    dispatch({
      type: subTasksListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(subTasksListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter:
    () => async (dispatch, getState) => {
      const filter = selectors.selectFilter(getState());
      const rawFilter = selectors.selectRawFilter(
        getState(),
      );
      dispatch(
        subTasksListActions.doFetch(
          filter,
          rawFilter,
          true,
        ),
      );
    },

  doFetch:
    (filter?, rawFilter?, keepPagination = false) =>
    async (dispatch, getState) => {
      try {
        dispatch({
          type: subTasksListActions.FETCH_STARTED,
          payload: { filter, rawFilter, keepPagination },
        });

        const response = await SubTasksService.list(
          filter,
          selectors.selectOrderBy(getState()),
          selectors.selectLimit(getState()),
          selectors.selectOffset(getState()),
        );

        dispatch({
          type: subTasksListActions.FETCH_SUCCESS,
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: subTasksListActions.FETCH_ERROR,
        });
      }
    },
};

export default subTasksListActions;
