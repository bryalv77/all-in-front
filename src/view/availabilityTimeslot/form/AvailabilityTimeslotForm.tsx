import { faSave } from '@fortawesome/free-regular-svg-icons';
import {
  faTimes,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { i18n } from '../../../i18n';
import yupFormSchemas from '../../../modules/shared/yup/yupFormSchemas';
import InputFormItem from '../../../view/shared/form/items/InputFormItem';
import InputNumberFormItem from '../../../view/shared/form/items/InputNumberFormItem';
import moment from 'moment';
import DatePickerFormItem from '../../../view/shared/form/items/DatePickerFormItem';
import BusinessAutocompleteFormItem from '../../../view/business/autocomplete/BusinessAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  businessId: yupFormSchemas.relationToOne(
    i18n('entities.availabilityTimeslot.fields.businessId'),
    {},
  ),
  dayOfTheWeek: yupFormSchemas.string(
    i18n(
      'entities.availabilityTimeslot.fields.dayOfTheWeek',
    ),
    {},
  ),
  startTime: yupFormSchemas.datetime(
    i18n('entities.availabilityTimeslot.fields.startTime'),
    {},
  ),
  endTime: yupFormSchemas.datetime(
    i18n('entities.availabilityTimeslot.fields.endTime'),
    {},
  ),
  capacity: yupFormSchemas.integer(
    i18n('entities.availabilityTimeslot.fields.capacity'),
    {},
  ),
});

function AvailabilityTimeslotForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      businessId: record.businessId,
      dayOfTheWeek: record.dayOfTheWeek,
      startTime: record.startTime
        ? moment(record.startTime).toDate()
        : null,
      endTime: record.endTime
        ? moment(record.endTime).toDate()
        : null,
      capacity: record.capacity,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema) as any,
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
          <BusinessAutocompleteFormItem
            name="businessId"
            label={i18n(
              'entities.availabilityTimeslot.fields.businessId',
            )}
            placeholder={i18n(
              'entities.availabilityTimeslot.placeholders.businessId',
            )}
            hint={i18n(
              'entities.availabilityTimeslot.hints.businessId',
            )}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="dayOfTheWeek"
            label={i18n(
              'entities.availabilityTimeslot.fields.dayOfTheWeek',
            )}
            placeholder={i18n(
              'entities.availabilityTimeslot.placeholders.dayOfTheWeek',
            )}
            hint={i18n(
              'entities.availabilityTimeslot.hints.dayOfTheWeek',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="startTime"
            label={i18n(
              'entities.availabilityTimeslot.fields.startTime',
            )}
            placeholder={i18n(
              'entities.availabilityTimeslot.placeholders.startTime',
            )}
            hint={i18n(
              'entities.availabilityTimeslot.hints.startTime',
            )}
            required={false}
            showTimeInput
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="endTime"
            label={i18n(
              'entities.availabilityTimeslot.fields.endTime',
            )}
            placeholder={i18n(
              'entities.availabilityTimeslot.placeholders.endTime',
            )}
            hint={i18n(
              'entities.availabilityTimeslot.hints.endTime',
            )}
            required={false}
            showTimeInput
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputNumberFormItem
            name="capacity"
            label={i18n(
              'entities.availabilityTimeslot.fields.capacity',
            )}
            placeholder={i18n(
              'entities.availabilityTimeslot.placeholders.capacity',
            )}
            hint={i18n(
              'entities.availabilityTimeslot.hints.capacity',
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

export default AvailabilityTimeslotForm;
