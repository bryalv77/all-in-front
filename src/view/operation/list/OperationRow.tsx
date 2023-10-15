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
import actions from '../../../modules/operation/list/operationListActions';
import selectors from '../../../modules/operation/list/operationListSelectors';
import UserListItem from '../../../view/user/list/UserListItem';
import FilesListView from '../../../view/shared/table/FileListView';
import BankListItem from '../../../view/bank/list/BankListItem';
import CategoryForm from './CategoryForm';

function OperationRow(props) {
  const { row, setRecordIdToDestroy } = props;
  const [categoryId, setCategoryId] = useState(
    row.categoryId,
  );
  const dispatch = useDispatch();
  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
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

  const doToggleOneSelected = (id) => {
    dispatch(actions.doToggleOneSelected(id) as any);
  };
  return (
    <tr>
      <th
        className="w-12 border-b border-gray-200 dark:border-gray-800"
        scope="row"
      >
        <input
          type="checkbox"
          className="cursor-pointer rounded border-gray-300 dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
          checked={selectedKeys.includes(row.id)}
          onChange={() => doToggleOneSelected(row.id)}
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
        <CategoryForm
          operation={row}
          categoryId={categoryId}
          setCategoryId={setCategoryId}
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
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        )}
      </td>
    </tr>
  );
}

export default OperationRow;
