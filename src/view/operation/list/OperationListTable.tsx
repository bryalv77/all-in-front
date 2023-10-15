import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { i18n } from '../../../i18n';
import destroyActions from '../../../modules/operation/destroy/operationDestroyActions';
import destroySelectors from '../../../modules/operation/destroy/operationDestroySelectors';
import actions from '../../../modules/operation/list/operationListActions';
import selectors from '../../../modules/operation/list/operationListSelectors';
import TableColumnHeader from '../../../view/shared/table/TableColumnHeader';
import ConfirmModal from '../../../view/shared/modals/ConfirmModal';
import Spinner from '../../../view/shared/Spinner';
import Pagination from '../../../view/shared/table/Pagination';
import OperationRow from './OperationRow';

function OperationListTable() {
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
  const hasRows = useSelector(selectors.selectHasRows);
  const sorter = useSelector(selectors.selectSorter);
  const isAllSelected = useSelector(
    selectors.selectIsAllSelected,
  );
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
              rows.map((row) => {
                return (
                  <OperationRow
                    key={row.id}
                    row={row}
                    setRecordIdToDestroy={
                      setRecordIdToDestroy
                    }
                  />
                );
              })}
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
