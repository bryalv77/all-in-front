import React from 'react';
import { i18n } from '../../../i18n';
import actions from '../../../modules/lesson/importer/lessonImporterActions';
import fields from '../../../modules/lesson/importer/lessonImporterFields';
import selectors from '../../../modules/lesson/importer/lessonImporterSelectors';
import Breadcrumb from '../../../view/shared/Breadcrumb';
import importerHoc from '../../../view/shared/importer/Importer';

function LessonImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.lesson.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.lesson.menu'), '/lesson'],
          [i18n('entities.lesson.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.lesson.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default LessonImportPage;
