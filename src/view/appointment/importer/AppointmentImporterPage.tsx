import React from 'react';
import { i18n } from '../../../i18n';
import actions from '../../../modules/appointment/importer/appointmentImporterActions';
import fields from '../../../modules/appointment/importer/appointmentImporterFields';
import selectors from '../../../modules/appointment/importer/appointmentImporterSelectors';
import Breadcrumb from '../../../view/shared/Breadcrumb';
import importerHoc from '../../../view/shared/importer/Importer';

function AppointmentImportPage() {
  const Importer = importerHoc(
    selectors,
    actions,
    fields,
    i18n('entities.appointment.importer.hint'),
  );

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [
            i18n('entities.appointment.menu'),
            '/appointment',
          ],
          [i18n('entities.appointment.importer.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.appointment.importer.title')}
        </h1>

        <Importer />
      </div>
    </>
  );
}

export default AppointmentImportPage;
