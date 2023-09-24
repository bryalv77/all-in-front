import PlaylistSongService from '../../../modules/playlistSong/playlistSongService';
import selectors from '../../../modules/playlistSong/list/playlistSongListSelectors';
import { i18n } from '../../../i18n';
import exporterFields from '../../../modules/playlistSong/list/playlistSongListExporterFields';
import Errors from '../../../modules/shared/error/errors';
import Exporter from '../../../modules/shared/exporter/exporter';

const prefix = 'PLAYLISTSONG_LIST';

const playlistSongListActions = {
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
      type: playlistSongListActions.CLEAR_ALL_SELECTED,
    };
  },

  doToggleAllSelected() {
    return {
      type: playlistSongListActions.TOGGLE_ALL_SELECTED,
    };
  },

  doToggleOneSelected(id) {
    return {
      type: playlistSongListActions.TOGGLE_ONE_SELECTED,
      payload: id,
    };
  },

  doReset: () => async (dispatch) => {
    dispatch({
      type: playlistSongListActions.RESETED,
    });

    dispatch(playlistSongListActions.doFetch());
  },

  doExport: () => async (dispatch, getState) => {
    try {
      if (!exporterFields || !exporterFields.length) {
        throw new Error('exporterFields is required');
      }

      dispatch({
        type: playlistSongListActions.EXPORT_STARTED,
      });

      const filter = selectors.selectFilter(getState());
      const response = await PlaylistSongService.list(
        filter,
        selectors.selectOrderBy(getState()),
        null,
        null,
      );

      new Exporter(
        exporterFields,
        i18n('entities.playlistSong.exporterFileName'),
      ).transformAndExportAsExcelFile(response.rows);

      dispatch({
        type: playlistSongListActions.EXPORT_SUCCESS,
      });
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: playlistSongListActions.EXPORT_ERROR,
      });
    }
  },

  doChangePagination:
    (pagination) => async (dispatch, getState) => {
      dispatch({
        type: playlistSongListActions.PAGINATION_CHANGED,
        payload: pagination,
      });

      dispatch(
        playlistSongListActions.doFetchCurrentFilter(),
      );
    },

  doChangeSort: (sorter) => async (dispatch, getState) => {
    dispatch({
      type: playlistSongListActions.SORTER_CHANGED,
      payload: sorter,
    });

    dispatch(
      playlistSongListActions.doFetchCurrentFilter(),
    );
  },

  doFetchCurrentFilter:
    () => async (dispatch, getState) => {
      const filter = selectors.selectFilter(getState());
      const rawFilter = selectors.selectRawFilter(
        getState(),
      );
      dispatch(
        playlistSongListActions.doFetch(
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
          type: playlistSongListActions.FETCH_STARTED,
          payload: { filter, rawFilter, keepPagination },
        });

        const response = await PlaylistSongService.list(
          filter,
          selectors.selectOrderBy(getState()),
          selectors.selectLimit(getState()),
          selectors.selectOffset(getState()),
        );

        dispatch({
          type: playlistSongListActions.FETCH_SUCCESS,
          payload: {
            rows: response.rows,
            count: response.count,
          },
        });
      } catch (error) {
        Errors.handle(error);

        dispatch({
          type: playlistSongListActions.FETCH_ERROR,
        });
      }
    },
};

export default playlistSongListActions;
