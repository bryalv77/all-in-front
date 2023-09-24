import { faSave } from '@fortawesome/free-regular-svg-icons';
import {
  faTimes,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from 'src/i18n';
import yupFormSchemas from 'src/modules/shared/yup/yupFormSchemas';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import appointmentEnumerators from 'src/modules/appointment/appointmentEnumerators';
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import CustomerAutocompleteFormItem from 'src/view/customer/autocomplete/CustomerAutocompleteFormItem';
import ServiceAutocompleteFormItem from 'src/view/service/autocomplete/ServiceAutocompleteFormItem';
import AvailabilityTimeslotAutocompleteFormItem from 'src/view/availabilityTimeslot/autocomplete/AvailabilityTimeslotAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  customer: yupFormSchemas.relationToOne(
    i18n('entities.appointment.fields.customer'),
    {},
  ),
  serviceId: yupFormSchemas.relationToOne(
    i18n('entities.appointment.fields.serviceId'),
    {},
  ),
  timeslotId: yupFormSchemas.relationToOne(
    i18n('entities.appointment.fields.timeslotId'),
    {},
  ),
  appointmentDate: yupFormSchemas.datetime(
    i18n('entities.appointment.fields.appointmentDate'),
    {},
  ),
  appointmentStatus: yupFormSchemas.enumerator(
    i18n('entities.appointment.fields.appointmentStatus'),
    {
      "options": appointmentEnumerators.appointmentStatus
    },
  ),
  paymentStatus: yupFormSchemas.enumerator(
    i18n('entities.appointment.fields.paymentStatus'),
    {
      "options": appointmentEnumerators.paymentStatus
    },
  ),
});

function AppointmentForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      customer: record.customer,
      serviceId: record.serviceId,
      timeslotId: record.timeslotId,
      appointmentDate: record.appointmentDate ? moment(record.appointmentDate).toDate() : null,
      appointmentStatus: record.appointmentStatus,
      paymentStatus: record.paymentStatus,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
    defaultValues: initialValues,
  });

  const onSubmit = (values) => {
    props.onSubmit(props.record?.id, values);
  };

  const onReset = () => {
    Object.keys(initialValues).forEach((key) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full sm:w-md md:w-md lg:w-md">
          <CustomerAutocompleteFormItem  
            name="customer"
            label={i18n('entities.appointment.fields.customer')}
          placeholder={i18n('entities.appointment.placeholders.customer')}
          hint={i18n('entities.appointment.hints.customer')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <ServiceAutocompleteFormItem  
            name="serviceId"
            label={i18n('entities.appointment.fields.serviceId')}
          placeholder={i18n('entities.appointment.placeholders.serviceId')}
          hint={i18n('entities.appointment.hints.serviceId')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <AvailabilityTimeslotAutocompleteFormItem  
            name="timeslotId"
            label={i18n('entities.appointment.fields.timeslotId')}
          placeholder={i18n('entities.appointment.placeholders.timeslotId')}
          hint={i18n('entities.appointment.hints.timeslotId')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="appointmentDate"
            label={i18n('entities.appointment.fields.appointmentDate')}
          placeholder={i18n('entities.appointment.placeholders.appointmentDate')}
          hint={i18n('entities.appointment.hints.appointmentDate')}
            required={false}
            showTimeInput
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="appointmentStatus"
            label={i18n('entities.appointment.fields.appointmentStatus')}
          placeholder={i18n('entities.appointment.placeholders.appointmentStatus')}
          hint={i18n('entities.appointment.hints.appointmentStatus')}
            options={appointmentEnumerators.appointmentStatus.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.appointment.enumerators.appointmentStatus.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="paymentStatus"
            label={i18n('entities.appointment.fields.paymentStatus')}
          placeholder={i18n('entities.appointment.placeholders.paymentStatus')}
          hint={i18n('entities.appointment.hints.paymentStatus')}
            options={appointmentEnumerators.paymentStatus.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.appointment.enumerators.paymentStatus.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>

        <div className="pt-4">
          <button
            className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            disabled={saveLoading}
            type="button"
            onClick={form.handleSubmit(onSubmit)}
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faSave}
            />
            {i18n('common.save')}
          </button>

          <button
            disabled={saveLoading}
            onClick={onReset}
            className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            type="button"
          >
            <FontAwesomeIcon
              className="mr-2"
              icon={faUndo}
            />
            {i18n('common.reset')}
          </button>

          {props.onCancel ? (
            <button
              disabled={saveLoading}
              onClick={() => props.onCancel()}
              className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
              type="button"
            >
              <FontAwesomeIcon
                className="mr-2"
                icon={faTimes}
              />
              {i18n('common.cancel')}
            </button>
          ) : null}
        </div>
      </form>
    </FormProvider>
  );
}

export default AppointmentForm;
