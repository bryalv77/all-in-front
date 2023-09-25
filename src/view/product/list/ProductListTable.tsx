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
import productSelectors from '../../../modules/product/productSelectors';
import destroyActions from '../../../modules/product/destroy/productDestroyActions';
import destroySelectors from '../../../modules/product/destroy/productDestroySelectors';
import actions from '../../../modules/product/list/productListActions';
import selectors from '../../../modules/product/list/productListSelectors';
import TableColumnHeader from '../../../view/shared/table/TableColumnHeader';
import ConfirmModal from '../../../view/shared/modals/ConfirmModal';
import Spinner from '../../../view/shared/Spinner';
import Pagination from '../../../view/shared/table/Pagination';
import ImagesListView from '../../../view/shared/table/ImagesListView';
import ProductCategoryListItem from '../../../view/productCategory/list/ProductCategoryListItem';
import BrandListItem from '../../../view/brand/list/BrandListItem';

function ProductListTable(props) {
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
    productSelectors.selectPermissionToEdit,
  );
  const hasPermissionToDestroy = useSelector(
    productSelectors.selectPermissionToDestroy,
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
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'name'}
                label={i18n('entities.product.fields.name')}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'unitPrice'}
                label={i18n(
                  'entities.product.fields.unitPrice',
                )}
                align="right"
              />
              <TableColumnHeader
                label={i18n(
                  'entities.product.fields.photos',
                )}
              />
              <TableColumnHeader
                label={i18n(
                  'entities.product.fields.category',
                )}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'stock'}
                label={i18n(
                  'entities.product.fields.stock',
                )}
                align="right"
              />
              <TableColumnHeader
                label={i18n(
                  'entities.product.fields.brandId',
                )}
              />
              <TableColumnHeader
                onSort={doChangeSort}
                hasRows={hasRows}
                sorter={sorter}
                name={'active'}
                label={i18n(
                  'entities.product.fields.active',
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
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.name}
                  </td>
                  <td
                    align="right"
                    className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm"
                  >
                    {row.unitPrice || row.unitPrice === 0
                      ? Number(row.unitPrice).toFixed(2)
                      : row.unitPrice}
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    <ImagesListView value={row.photos} />
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    <ProductCategoryListItem
                      value={row.category}
                    />
                  </td>
                  <td
                    align="right"
                    className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm"
                  >
                    {row.stock}
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    <BrandListItem value={row.brandId} />
                  </td>
                  <td className="whitespace-nowrap px-5 py-5 border-b border-gray-200 dark:border-gray-800 text-sm">
                    {row.active
                      ? i18n('common.yes')
                      : i18n('common.no')}
                  </td>
                  <td
                    className="w-56 whitespace-nowrap border-b px-5 py-5 border-gray-200 dark:border-gray-800"
                    align="right"
                  >
                    <Link
                      className="inline-flex justify-center items-center w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                      to={`/product/${row.id}`}
                      title={i18n('common.view')}
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </Link>
                    {hasPermissionToEdit && (
                      <Link
                        className="inline-flex justify-center items-center w-9 h-9 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                        to={`/product/${row.id}/edit`}
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

export default ProductListTable;
