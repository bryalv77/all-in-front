import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import moment from 'moment';
import BusinessViewItem from 'src/view/business/view/BusinessViewItem';

function AvailabilityTimeslotView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <BusinessViewItem
        label={i18n('entities.availabilityTimeslot.fields.businessId')}
        value={record.businessId}
      />

      <TextViewItem
        label={i18n('entities.availabilityTimeslot.fields.dayOfTheWeek')}
        value={record.dayOfTheWeek}
      />

      {record.startTime && <TextViewItem
        label={i18n(
          'entities.availabilityTimeslot.fields.startTime',
        )}
        value={moment(record.startTime).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}

      {record.endTime && <TextViewItem
        label={i18n(
          'entities.availabilityTimeslot.fields.endTime',
        )}
        value={moment(record.endTime).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}

      <TextViewItem
        label={i18n('entities.availabilityTimeslot.fields.capacity')}
        value={record.capacity}
      />
    </div>
  );
}

export default AvailabilityTimeslotView;
