import AvailabilityTimeslotService from '../../../modules/availabilityTimeslot/availabilityTimeslotService';
import selectors from '../../../modules/availabilityTimeslot/list/availabilityTimeslotListSelectors';
import { i18n } from '../../../i18n';
import exporterFields from '../../../modules/availabilityTimeslot/list/availabilityTimeslotListExporterFields';
import Errors from '../../../modules/shared/error/errors';
import Exporter from '../../../modules/shared/exporter/exporter';

const prefix = 'AVAILABILITYTIMESLOT_LIST';

const availabilityTimeslotListActions = {
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
      type: availabilityTimeslotListActions.CLEAR_ALL_SELECTED,
    };
  },

  doToggleAllSelected() {
    return {
      type: availabilityTimeslotListActions.TOGGLE_ALL_SELECTED,
    };
  },

  doToggleOneSelected(id) {
    return {
      type: availabilityTimeslotListActions.TOGGLE_ONE_SELECTED,
      payload: id,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: availabilityTimeslotListActions.RESETED,
    });

    dispatch(availabilityTimeslotListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: availabilityTimeslotListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response =
        await AvailabilityTimeslotService.list(
          filter,
          selectors.selectOrderBy(getState()),
          null,
          null,
        );

      new Exporter(
        exporterFields,
        i18n(
          'entities.availabilityTimeslot.exporterFileName',
        ),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: availabilityTimeslotListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: availabilityTimeslotListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePagination:
    (pagination) => async (dispatch, getState) => {
      dispatch({
        type: availabilityTimeslotListActions.PAGINATION_CHANGED,
        payload: pagination,
      });

      dispatch(
        availabilityTimeslotListActions.doFetchCurrentFilter(),
      );
    },

  doChangeSort: (sorter) => async (dispatch, getState) => {
    dispatch({
      type: availabilityTimeslotListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(
      availabilityTimeslotListActions.doFetchCurrentFilter(),
    );
  },

  doFetchCurrentFilter:
    () => async (dispatch, getState) => {
      const filter = selectors.selectFilter(getState());
      const rawFilter = selectors.selectRawFilter(
        getState(),
      );
      dispatch(
        availabilityTimeslotListActions.doFetch(
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
          type: availabilityTimeslotListActions.FETCH_STARTED,
          payload: { filter, rawFilter, keepPagination },
        });

        const response =
          await AvailabilityTimeslotService.list(
            filter,
            selectors.selectOrderBy(getState()),
            selectors.selectLimit(getState()),
            selectors.selectOffset(getState()),
          );

        dispatch({
          type: availabilityTimeslotListActions.FETCH_SUCCESS,
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: availabilityTimeslotListActions.FETCH_ERROR,
        });
      }
    },
};

export default availabilityTimeslotListActions;
