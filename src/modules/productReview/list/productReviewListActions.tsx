import ProductReviewService from '../../../modules/productReview/productReviewService';
import selectors from '../../../modules/productReview/list/productReviewListSelectors';
import { i18n } from '../../../i18n';
import exporterFields from '../../../modules/productReview/list/productReviewListExporterFields';
import Errors from '../../../modules/shared/error/errors';
import Exporter from '../../../modules/shared/exporter/exporter';

const prefix = 'PRODUCTREVIEW_LIST';

const productReviewListActions = {
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
      type: productReviewListActions.CLEAR_ALL_SELECTED,
    };
  },

  doToggleAllSelected() {
    return {
      type: productReviewListActions.TOGGLE_ALL_SELECTED,
    };
  },

  doToggleOneSelected(id) {
    return {
      type: productReviewListActions.TOGGLE_ONE_SELECTED,
      payload: id,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: productReviewListActions.RESETED,
    });

    dispatch(productReviewListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: productReviewListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await ProductReviewService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.productReview.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: productReviewListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: productReviewListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePagination:
    (pagination) => async (dispatch, getState) => {
      dispatch({
        type: productReviewListActions.PAGINATION_CHANGED,
        payload: pagination,
      });

      dispatch(
        productReviewListActions.doFetchCurrentFilter(),
      );
    },

  doChangeSort: (sorter) => async (dispatch, getState) => {
    dispatch({
      type: productReviewListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(
      productReviewListActions.doFetchCurrentFilter(),
    );
  },

  doFetchCurrentFilter:
    () => async (dispatch, getState) => {
      const filter = selectors.selectFilter(getState());
      const rawFilter = selectors.selectRawFilter(
        getState(),
      );
      dispatch(
        productReviewListActions.doFetch(
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
          type: productReviewListActions.FETCH_STARTED,
          payload: { filter, rawFilter, keepPagination },
        });

        const response = await ProductReviewService.list(
          filter,
          selectors.selectOrderBy(getState()),
          selectors.selectLimit(getState()),
          selectors.selectOffset(getState()),
        );

        dispatch({
          type: productReviewListActions.FETCH_SUCCESS,
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: productReviewListActions.FETCH_ERROR,
        });
      }
    },
};

export default productReviewListActions;
