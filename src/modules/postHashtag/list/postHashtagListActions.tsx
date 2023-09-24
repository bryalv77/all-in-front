import PostHashtagService from '../../../modules/postHashtag/postHashtagService';
import selectors from '../../../modules/postHashtag/list/postHashtagListSelectors';
import { i18n } from '../../../i18n';
import exporterFields from '../../../modules/postHashtag/list/postHashtagListExporterFields';
import Errors from '../../../modules/shared/error/errors';
import Exporter from '../../../modules/shared/exporter/exporter';

const prefix = 'POSTHASHTAG_LIST';

const postHashtagListActions = {
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
      type: postHashtagListActions.CLEAR_ALL_SELECTED,
    };
  },

  doToggleAllSelected() {
    return {
      type: postHashtagListActions.TOGGLE_ALL_SELECTED,
    };
  },

  doToggleOneSelected(id) {
    return {
      type: postHashtagListActions.TOGGLE_ONE_SELECTED,
      payload: id,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: postHashtagListActions.RESETED,
    });

    dispatch(postHashtagListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: postHashtagListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await PostHashtagService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.postHashtag.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: postHashtagListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: postHashtagListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePagination:
    (pagination) => async (dispatch, getState) => {
      dispatch({
        type: postHashtagListActions.PAGINATION_CHANGED,
        payload: pagination,
      });

      dispatch(
        postHashtagListActions.doFetchCurrentFilter(),
      );
    },

  doChangeSort: (sorter) => async (dispatch, getState) => {
    dispatch({
      type: postHashtagListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(postHashtagListActions.doFetchCurrentFilter());
  },

  doFetchCurrentFilter:
    () => async (dispatch, getState) => {
      const filter = selectors.selectFilter(getState());
      const rawFilter = selectors.selectRawFilter(
        getState(),
      );
      dispatch(
        postHashtagListActions.doFetch(
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
          type: postHashtagListActions.FETCH_STARTED,
          payload: { filter, rawFilter, keepPagination },
        });

        const response = await PostHashtagService.list(
          filter,
          selectors.selectOrderBy(getState()),
          selectors.selectLimit(getState()),
          selectors.selectOffset(getState()),
        );

        dispatch({
          type: postHashtagListActions.FETCH_SUCCESS,
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: postHashtagListActions.FETCH_ERROR,
        });
      }
    },
};

export default postHashtagListActions;
