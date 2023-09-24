import React from 'react';
import { i18n } from '../../../i18n';
import AppointmentListFilter from '../../../view/appointment/list/AppointmentListFilter';
import AppointmentListTable from '../../../view/appointment/list/AppointmentListTable';
import AppointmentListToolbar from '../../../view/appointment/list/AppointmentListToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function AppointmentListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.appointment.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.appointment.list.title')}
        </h1>
        <AppointmentListToolbar />
        <AppointmentListFilter />
        <AppointmentListTable />
      </div>
    </>
  );
}

export default AppointmentListPage;
