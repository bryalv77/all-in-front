import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import moment from 'moment';
import CustomerViewItem from 'src/view/customer/view/CustomerViewItem';
import ServiceViewItem from 'src/view/service/view/ServiceViewItem';
import AvailabilityTimeslotViewItem from 'src/view/availabilityTimeslot/view/AvailabilityTimeslotViewItem';

function AppointmentView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <CustomerViewItem
        label={i18n('entities.appointment.fields.customer')}
        value={record.customer}
      />

      <ServiceViewItem
        label={i18n('entities.appointment.fields.serviceId')}
        value={record.serviceId}
      />

      <AvailabilityTimeslotViewItem
        label={i18n('entities.appointment.fields.timeslotId')}
        value={record.timeslotId}
      />

      {record.appointmentDate && <TextViewItem
        label={i18n(
          'entities.appointment.fields.appointmentDate',
        )}
        value={moment(record.appointmentDate).format(
          'YYYY-MM-DD HH:mm',
        )}
      />}

      <TextViewItem
        label={i18n('entities.appointment.fields.appointmentStatus')}
        value={
          record.appointmentStatus &&
          i18n(
            `entities.appointment.enumerators.appointmentStatus.${record.appointmentStatus}`,
          )
        }
      />

      <TextViewItem
        label={i18n('entities.appointment.fields.paymentStatus')}
        value={
          record.paymentStatus &&
          i18n(
            `entities.appointment.enumerators.paymentStatus.${record.paymentStatus}`,
          )
        }
      />
    </div>
  );
}

export default AppointmentView;
