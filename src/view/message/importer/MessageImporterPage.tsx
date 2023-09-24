import React from 'react';
import { i18n } from '../../../i18n';
import actions from '../../../modules/message/importer/messageImporterActions';
import fields from '../../../modules/message/importer/messageImporterFields';
import selectors from '../../../modules/message/importer/messageImporterSelectors';
import Breadcrumb from '../../../view/shared/Breadcrumb';
import importerHoc from '../../../view/shared/importer/Importer';

function MessageImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.message.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.message.menu'), '/message'],
          [i18n('entities.message.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.message.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default MessageImportPage;
