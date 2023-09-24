import {
  faEdit,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { i18n } from '../../../i18n';
import songSelectors from '../../../modules/song/songSelectors';
import destroyActions from '../../../modules/song/destroy/songDestroyActions';
import destroySelectors from '../../../modules/song/destroy/songDestroySelectors';
import actions from '../../../modules/song/list/songListActions';
import selectors from '../../../modules/song/list/songListSelectors';
import TableColumnHeader from '../../../view/shared/table/TableColumnHeader';
import ConfirmModal from '../../../view/shared/modals/ConfirmModal';
import Spinner from '../../../view/shared/Spinner';
import Pagination from '../../../view/shared/table/Pagination';
import FilesListView from '../../../view/shared/table/FileListView';
import ArtistListItem from '../../../view/artist/list/ArtistListItem';
import AlbumListItem from '../../../view/album/list/AlbumListItem';

function SongListTable(props) {
  const [recordIdToDestroy, setRecordIdToDestroy] =
    useState(null);
  const dispatch = useDispatch();

  const findLoading = useSelector(selectors.selectLoading);

  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );

  const loading = findLoading || destroyLoading;

  const rows = useSelector(selectors.selectRows);
  const pagination = useSelector(
    selectors.selectPagination,
  );
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);
  const isAllSelected = useSelector(
    selectors.selectIsAllSelected,
  );
  const hasPermissionToEdit = useSelector(
    songSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    songSelectors.selectPermissionToDestroy,
  );

  const doOpenDestroyConfirmModal = (id) => {
    setRecordIdToDestroy(id);
  };

  const doCloseDestroyConfirmModal = () => {
    setRecordIdToDestroy(null);
  };

  const doChangeSort = (field) => {
    const order =
      sorter.field === field && sorter.order === 'ascend'
        ? 'descend'
        : 'ascend';

    dispatch(
      actions.doChangeSort({
        field,
        order,
      }),
    );
  };

  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePagination(pagination));
  };

  const doDestroy = (id) => {
    doCloseDestroyConfirmModal();

    dispatch(destroyActions.doDestroy(id));
  };

  const doToggleAllSelected = () => {
    dispatch(actions.doToggleAllSelected());
  };

  const doToggleOneSelected = (id) => {
    dispatch(actions.doToggleOneSelected(id));
  };

  return (
    <>
      <div className="table-responsive shadow rounded-lg dark:bg-gray-600 dark:border-gray-600 dark:text-gray-200 dark:border">
        <table className="border-collapse min-w-full leading-normal">
          <thead>
            <tr>
              <TableColumnHeader>
                {hasRows && (
                  <input
                    type="checkbox"
                    className="cursor-pointer rounded border-gray-300 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                    checked={Boolean(isAllSelected)}
                    onChange={doToggleAllSelected}
                  />
                )}
              </TableColumnHeader>
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'title'}
                label={i18n('entities.song.fields.title')}
              />
              <TableColumnHeader
                label={i18n(
                  'entities.song.fields.artistId',
                )}
              />
              <TableColumnHeader
                label={i18n('entities.song.fields.albumId')}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'duration'}
                label={i18n(
                  'entities.song.fields.duration',
                )}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'genre'}
                label={i18n('entities.song.fields.genre')}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'externalUrl'}
                label={i18n(
                  'entities.song.fields.externalUrl',
                )}
              />
              <TableColumnHeader
                label={i18n('entities.song.fields.media')}
              />
              <TableColumnHeader />
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={100}>
                  <Spinner />
                </td>
              </tr>
            )}
            {!loading && !hasRows && (
              <tr>
                <td colSpan={100}>
                  <div className="flex justify-center p-5">
                    {i18n('table.noData')}
                  </div>
                </td>
              </tr>
            )}
            {!loading &&
              rows.map((row) => (
                <tr key={row.id}>
                  <th
                    className="w-12 border-b border-gray-200 dark:border-gray-800"
                    scope="row"
                  >
                    <input
                      type="checkbox"
                      className="cursor-pointer rounded border-gray-300 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                      checked={selectedKeys.includes(
                        row.id,
                      )}
                      onChange={() =>
                        doToggleOneSelected(row.id)
                      }
                    />
                  </th>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.title}
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    <ArtistListItem value={row.artistId} />
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    <AlbumListItem value={row.albumId} />
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.duration}
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.genre}
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.externalUrl}
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    <FilesListView value={row.media} />
                  </td>
                  <td
                    className="w-56 whitespace-nowrap border-b px-5 py-5 border-gray-200 dark:border-gray-800"
                    align="right"
                  >
                    <Link
                      className="inline-flex justify-center items-center w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                      to={`/song/${row.id}`}
                      title={i18n('common.view')}
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </Link>
                    {hasPermissionToEdit && (
                      <Link
                        className="inline-flex justify-center items-center w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                        to={`/song/${row.id}/edit`}
                        title={i18n('common.edit')}
                      >
                        <FontAwesomeIcon icon={faEdit} />
                      </Link>
                    )}
                    {hasPermissionToDestroy && (
                      <button
                        className="inline-flex justify-center items-center w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                        type="button"
                        onClick={() =>
                          doOpenDestroyConfirmModal(row.id)
                        }
                        title={i18n('common.destroy')}
                      >
                        <FontAwesomeIcon
                          icon={faTrashAlt}
                        />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <Pagination
        onChange={doChangePagination}
        disabled={loading}
        pagination={pagination}
      />

      {recordIdToDestroy && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroy(recordIdToDestroy)}
          onClose={() => doCloseDestroyConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </>
  );
}

export default SongListTable;
