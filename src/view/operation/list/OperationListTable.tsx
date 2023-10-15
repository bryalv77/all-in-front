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
import operationSelectors from '../../../modules/operation/operationSelectors';
import destroyActions from '../../../modules/operation/destroy/operationDestroyActions';
import destroySelectors from '../../../modules/operation/destroy/operationDestroySelectors';
import actions from '../../../modules/operation/list/operationListActions';
import selectors from '../../../modules/operation/list/operationListSelectors';
import TableColumnHeader from '../../../view/shared/table/TableColumnHeader';
import ConfirmModal from '../../../view/shared/modals/ConfirmModal';
import Spinner from '../../../view/shared/Spinner';
import Pagination from '../../../view/shared/table/Pagination';
import UserListItem from '../../../view/user/list/UserListItem';
import FilesListView from '../../../view/shared/table/FileListView';
import CategoryListItem from '../../../view/category/list/CategoryListItem';
import BankListItem from '../../../view/bank/list/BankListItem';

function OperationListTable(props) {
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
    operationSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    operationSelectors.selectPermissionToDestroy,
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
      }) as any,
    );
  };

  const doChangePagination = (pagination) => {
    dispatch(actions.doChangePagination(pagination) as any);
  };

  const doDestroy = (id) => {
    doCloseDestroyConfirmModal();

    dispatch(destroyActions.doDestroy(id) as any);
  };

  const doToggleAllSelected = () => {
    dispatch(actions.doToggleAllSelected() as any);
  };

  const doToggleOneSelected = (id) => {
    dispatch(actions.doToggleOneSelected(id) as any);
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
              {/* <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'fintonicId'}
                label={i18n(
                  'entities.operation.fields.fintonicId',
                )}
              /> */}
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'description'}
                label={i18n(
                  'entities.operation.fields.description',
                )}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'reference'}
                label={i18n(
                  'entities.operation.fields.reference',
                )}
              />

              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'quantity'}
                label={i18n(
                  'entities.operation.fields.quantity',
                )}
                align="right"
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'valueDate'}
                label={i18n(
                  'entities.operation.fields.valueDate',
                )}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'operationDate'}
                label={i18n(
                  'entities.operation.fields.operationDate',
                )}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'cleanNote'}
                label={i18n(
                  'entities.operation.fields.cleanNote',
                )}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'cleanUserDescription'}
                label={i18n(
                  'entities.operation.fields.cleanUserDescription',
                )}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'primaryDisplay'}
                label={i18n(
                  'entities.operation.fields.primaryDisplay',
                )}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'secondaryDisplay'}
                label={i18n(
                  'entities.operation.fields.secondaryDisplay',
                )}
              />
              <TableColumnHeader
                label={i18n(
                  'entities.operation.fields.categoryId',
                )}
              />
              <TableColumnHeader
                label={i18n(
                  'entities.operation.fields.bankId',
                )}
              />
              <TableColumnHeader
                label={i18n(
                  'entities.operation.fields.receipt',
                )}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'note'}
                label={i18n(
                  'entities.operation.fields.note',
                )}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'userDescription'}
                label={i18n(
                  'entities.operation.fields.userDescription',
                )}
              />
              <TableColumnHeader
                label={i18n(
                  'entities.operation.fields.userId',
                )}
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
                  {/* <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.fintonicId}
                  </td> */}
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.description}
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.reference}
                  </td>
                  <td
                    align="right"
                    className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm"
                  >
                    {row.quantity}
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.valueDate}
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.operationDate}
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.cleanNote}
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.cleanUserDescription}
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.primaryDisplay}
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.secondaryDisplay}
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    <CategoryListItem
                      value={row.categoryId}
                    />
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    <BankListItem value={row.bankId} />
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    <FilesListView value={row.receipt} />
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.note}
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.userDescription}
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    <UserListItem value={row.userId} />
                  </td>
                  <td
                    className="w-56 whitespace-nowrap border-b px-5 py-5 border-gray-200 dark:border-gray-800"
                    align="right"
                  >
                    <Link
                      className="inline-flex justify-center items-center w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                      to={`/operation/${row.id}`}
                      title={i18n('common.view')}
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </Link>
                    {hasPermissionToEdit && (
                      <Link
                        className="inline-flex justify-center items-center w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                        to={`/operation/${row.id}/edit`}
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

export default OperationListTable;
