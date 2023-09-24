import React from 'react';
import { i18n } from '../../../i18n';
import AvailabilityTimeslotListFilter from '../../../view/availabilityTimeslot/list/AvailabilityTimeslotListFilter';
import AvailabilityTimeslotListTable from '../../../view/availabilityTimeslot/list/AvailabilityTimeslotListTable';
import AvailabilityTimeslotListToolbar from '../../../view/availabilityTimeslot/list/AvailabilityTimeslotListToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function AvailabilityTimeslotListPage(props) {
  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.availabilityTimeslot.menu')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className=" text-lg font-medium mb-6">
          {i18n('entities.availabilityTimeslot.list.title')}
        </h1>
        <AvailabilityTimeslotListToolbar />
        <AvailabilityTimeslotListFilter />
        <AvailabilityTimeslotListTable />
      </div>
    </>
  );
}

export default AvailabilityTimeslotListPage;
