import React from 'react';
import { i18n } from '../../../i18n';
import actions from '../../../modules/teacher/importer/teacherImporterActions';
import fields from '../../../modules/teacher/importer/teacherImporterFields';
import selectors from '../../../modules/teacher/importer/teacherImporterSelectors';
import Breadcrumb from '../../../view/shared/Breadcrumb';
import importerHoc from '../../../view/shared/importer/Importer';

function TeacherImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.teacher.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.teacher.menu'), '/teacher'],
          [i18n('entities.teacher.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.teacher.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default TeacherImportPage;
