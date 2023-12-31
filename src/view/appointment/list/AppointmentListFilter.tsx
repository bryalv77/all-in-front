import {
  faSearch,
  faUndo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { i18n } from '../../../i18n';
import actions from '../../../modules/appointment/list/appointmentListActions';
import selectors from '../../../modules/appointment/list/appointmentListSelectors';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import yupFilterSchemas from '../../../modules/shared/yup/yupFilterSchemas';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import FilterPreview from '../../../view/shared/filter/FilterPreview';
import filterRenders from '../../../modules/shared/filter/filterRenders';
import SelectFormItem from '../../../view/shared/form/items/SelectFormItem';
import appointmentEnumerators from '../../../modules/appointment/appointmentEnumerators';
import DatePickerRangeFormItem from '../../../view/shared/form/items/DatePickerRangeFormItem';
import CustomerAutocompleteFormItem from '../../../view/customer/autocomplete/CustomerAutocompleteFormItem';
import ServiceAutocompleteFormItem from '../../../view/service/autocomplete/ServiceAutocompleteFormItem';
import AvailabilityTimeslotAutocompleteFormItem from '../../../view/availabilityTimeslot/autocomplete/AvailabilityTimeslotAutocompleteFormItem';

const schema = yup.object().shape({
  customer: yupFilterSchemas.relationToOne(
    i18n('entities.appointment.fields.customer'),
  ),
  serviceId: yupFilterSchemas.relationToOne(
    i18n('entities.appointment.fields.serviceId'),
  ),
  timeslotId: yupFilterSchemas.relationToOne(
    i18n('entities.appointment.fields.timeslotId'),
  ),
  appointmentDateRange: yupFilterSchemas.datetimeRange(
    i18n(
      'entities.appointment.fields.appointmentDateRange',
    ),
  ),
  appointmentStatus: yupFilterSchemas.enumerator(
    i18n('entities.appointment.fields.appointmentStatus'),
  ),
  paymentStatus: yupFilterSchemas.enumerator(
    i18n('entities.appointment.fields.paymentStatus'),
  ),
});

const emptyValues = {
  customer: null,
  serviceId: null,
  timeslotId: null,
  appointmentDateRange: [],
  appointmentStatus: null,
  paymentStatus: null,
};

const previewRenders = {
  customer: {
    label: i18n('entities.appointment.fields.customer'),
    render: filterRenders.relationToOne(),
  },
  serviceId: {
    label: i18n('entities.appointment.fields.serviceId'),
    render: filterRenders.relationToOne(),
  },
  timeslotId: {
    label: i18n('entities.appointment.fields.timeslotId'),
    render: filterRenders.relationToOne(),
  },
  appointmentDateRange: {
    label: i18n(
      'entities.appointment.fields.appointmentDateRange',
    ),
    render: filterRenders.datetimeRange(),
  },
  appointmentStatus: {
    label: i18n(
      'entities.appointment.fields.appointmentStatus',
    ),
    render: filterRenders.enumerator(
      'entities.appointment.enumerators.appointmentStatus',
    ),
  },
  paymentStatus: {
    label: i18n(
      'entities.appointment.fields.paymentStatus',
    ),
    render: filterRenders.enumerator(
      'entities.appointment.enumerators.paymentStatus',
    ),
  },
};

function AppointmentListFilter(props) {
  const rawFilter = useSelector(selectors.selectRawFilter);
  const dispatch = useDispatch();
  const [expanded, setExpanded] = useState(false);

  const [initialValues] = useState(() => {
    return {
      ...emptyValues,
      ...rawFilter,
    };
  });

  const form = useForm({
    resolver: yupResolver(schema) as any,
    defaultValues: initialValues,
    mode: 'all',
  });

  useEffect(() => {
    dispatch(
      actions.doFetch(
        schema.cast(initialValues),
        rawFilter,
      ) as any,
    );
    // eslint-disable-next-line
  }, [dispatch]);

  const onSubmit = (values) => {
    const rawValues = form.getValues();
    dispatch(actions.doFetch(values, rawValues) as any);
    setExpanded(false);
  };

  const onRemove = (key) => {
    form.setValue(key as any, emptyValues[key]);
    return form.handleSubmit(onSubmit)();
  };

  const onReset = () => {
    Object.keys(emptyValues).forEach((key) => {
      form.setValue(key as any, emptyValues[key]);
    });
    dispatch(actions.doReset() as any);
    setExpanded(false);
  };

  return (
    <div className="border-gray-200 dark:border-gray-600 border rounded-md mb-2">
      <FilterPreview
        onClick={() => {
          setExpanded(!expanded);
        }}
        renders={previewRenders}
        values={rawFilter}
        expanded={expanded}
        onRemove={onRemove}
      />
      <div className={`${expanded ? 'block' : 'hidden'}`}>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="pl-4 pr-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              <CustomerAutocompleteFormItem
                name="customer"
                label={i18n(
                  'entities.appointment.fields.customer',
                )}
              />
              <ServiceAutocompleteFormItem
                name="serviceId"
                label={i18n(
                  'entities.appointment.fields.serviceId',
                )}
              />
              <AvailabilityTimeslotAutocompleteFormItem
                name="timeslotId"
                label={i18n(
                  'entities.appointment.fields.timeslotId',
                )}
              />
              <DatePickerRangeFormItem
                name="appointmentDateRange"
                label={i18n(
                  'entities.appointment.fields.appointmentDateRange',
                )}
                showTimeInput
              />
              <SelectFormItem
                name="appointmentStatus"
                label={i18n(
                  'entities.appointment.fields.appointmentStatus',
                )}
                options={appointmentEnumerators.appointmentStatus.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.appointment.enumerators.appointmentStatus.${value}`,
                    ),
                  }),
                )}
              />
              <SelectFormItem
                name="paymentStatus"
                label={i18n(
                  'entities.appointment.fields.paymentStatus',
                )}
                options={appointmentEnumerators.paymentStatus.map(
                  (value) => ({
                    value,
                    label: i18n(
                      `entities.appointment.enumerators.paymentStatus.${value}`,
                    ),
                  }),
                )}
              />
            </div>

            <div className="px-4 py-2 text-right">
              <button
                className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
                type="submit"
                disabled={props.loading}
              >
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faSearch}
                />
                {i18n('common.search')}
              </button>
              <button
                className="mr-2 mb-2 text-sm disabled:opacity-50 disabled:cursor-default px-4 py-2 tracking-wide dark:border-gray-800 dark:bg-gray-800 dark:hover:bg-gray-600 dark:text-white text-gray-700 border border-gray-300 transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                type="button"
                onClick={onReset}
                disabled={props.loading}
              >
                <FontAwesomeIcon
                  className="mr-2"
                  icon={faUndo}
                />
                {i18n('common.reset')}
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default AppointmentListFilter;
