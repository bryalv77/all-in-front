import {
  faFileExcel,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';
import {
  faHistory,
  faPlus,
  faUpload,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { i18n } from '../../../i18n';
import auditLogSelectors from '../../../modules/auditLog/auditLogSelectors';
import studentSelectors from '../../../modules/student/studentSelectors';
import destroyActions from '../../../modules/student/destroy/studentDestroyActions';
import destroySelectors from '../../../modules/student/destroy/studentDestroySelectors';
import actions from '../../../modules/student/list/studentListActions';
import selectors from '../../../modules/student/list/studentListSelectors';
import ConfirmModal from '../../../view/shared/modals/ConfirmModal';

function StudentToolbar(props) {
  const [
    destroyAllConfirmVisible,
    setDestroyAllConfirmVisible,
  ] = useState(false);

  const dispatch = useDispatch();

  const selectedKeys = useSelector(
    selectors.selectSelectedKeys,
  );
  const loading = useSelector(selectors.selectLoading);
  const destroyLoading = useSelector(
    destroySelectors.selectLoading,
  );
  const exportLoading = useSelector(
    selectors.selectExportLoading,
  );
  const hasRows = useSelector(selectors.selectHasRows);
  const hasPermissionToAuditLogs = useSelector(
    auditLogSelectors.selectPermissionToRead,
  );
  const hasPermissionToDestroy = useSelector(
    studentSelectors.selectPermissionToDestroy,
  );
  const hasPermissionToCreate = useSelector(
    studentSelectors.selectPermissionToCreate,
  );
  const hasPermissionToImport = useSelector(
    studentSelectors.selectPermissionToImport,
  );

  const doOpenDestroyAllConfirmModal = () => {
    setDestroyAllConfirmVisible(true);
  };

  const doCloseDestroyAllConfirmModal = () => {
    setDestroyAllConfirmVisible(false);
  };

  const doExport = () => {
    dispatch(actions.doExport());
  };

  const doDestroyAllSelected = () => {
    doCloseDestroyAllConfirmModal();

    dispatch(destroyActions.doDestroyAll(selectedKeys));
  };

  const renderExportButton = () => {
    const disabled = !hasRows || loading;

    const button = (
      <button
        className="mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
        disabled={disabled || exportLoading}
        onClick={doExport}
        type="button"
      >
        <FontAwesomeIcon
          className="mr-2"
          icon={faFileExcel}
        />
        {i18n('common.export')}
      </button>
    );

    if (disabled) {
      return (
        <span
          data-tip={i18n('common.noDataToExport')}
          data-tip-disable={!disabled}
          data-for="student-list-toolbar-export-tooltip"
        >
          {button}
          <Tooltip id="student-list-toolbar-export-tooltip" />
        </span>
      );
    }

    return button;
  };

  const renderDestroyButton = () => {
    if (!hasPermissionToDestroy) {
      return null;
    }

    const disabled = !selectedKeys.length || loading;

    const button = (
      <button
        disabled={disabled || destroyLoading}
        className="mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
        type="button"
        onClick={doOpenDestroyAllConfirmModal}
      >
        <FontAwesomeIcon
          className="mr-2"
          icon={faTrashAlt}
        />
        {i18n('common.destroy')}
      </button>
    );

    if (disabled) {
      return (
        <span
          data-tip={i18n('common.mustSelectARow')}
          data-tip-disable={!disabled}
          data-for="student-list-toolbar-destroy-tooltip"
        >
          {button}
          <Tooltip id="student-list-toolbar-destroy-tooltip" />
        </span>
      );
    }

    return button;
  };

  return (
    <div className="mb-4">
      {hasPermissionToCreate && (
        <Link to="/student/new">
          <button
            className="mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            type="button"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faPlus}
            />
            {i18n('common.new')}
          </button>
        </Link>
      )}

      {hasPermissionToImport && (
        <Link to="/student/importer">
          <button
            className="mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            type="button"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faUpload}
            />
            {i18n('common.import')}
          </button>
        </Link>
      )}

      {renderDestroyButton()}

      {hasPermissionToAuditLogs && (
        <Link to="/audit-logs?entityNames=student">
          <button
            className="mb-2 mr-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            type="button"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faHistory}
            />
            {i18n('auditLog.menu')}
          </button>
        </Link>
      )}

      {renderExportButton()}

      {destroyAllConfirmVisible && (
        <ConfirmModal
          title={i18n('common.areYouSure')}
          onConfirm={() => doDestroyAllSelected()}
          onClose={() => doCloseDestroyAllConfirmModal()}
          okText={i18n('common.yes')}
          cancelText={i18n('common.no')}
        />
      )}
    </div>
  );
}

export default StudentToolbar;
