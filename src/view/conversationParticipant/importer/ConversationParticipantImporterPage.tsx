import React from 'react';
import { i18n } from 'src/i18n';
import actions from 'src/modules/conversationParticipant/importer/conversationParticipantImporterActions';
import fields from 'src/modules/conversationParticipant/importer/conversationParticipantImporterFields';
import selectors from 'src/modules/conversationParticipant/importer/conversationParticipantImporterSelectors';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import importerHoc from 'src/view/shared/importer/Importer';

function ConversationParticipantImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.conversationParticipant.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.conversationParticipant.menu'), '/conversation-participant'],
          [i18n('entities.conversationParticipant.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.conversationParticipant.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default ConversationParticipantImportPage;
