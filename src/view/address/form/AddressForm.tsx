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
import TextAreaFormItem from '../../../view/shared/form/items/TextAreaFormItem';
import SwitchFormItem from '../../../view/shared/form/items/SwitchFormItem';
import CustomerAutocompleteFormItem from '../../../view/customer/autocomplete/CustomerAutocompleteFormItem';
import CityAutocompleteFormItem from '../../../view/city/autocomplete/CityAutocompleteFormItem';
import BusinessAutocompleteFormItem from '../../../view/business/autocomplete/BusinessAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  customer: yupFormSchemas.relationToOne(
    i18n('entities.address.fields.customer'),
    {},
  ),
  addressName: yupFormSchemas.string(
    i18n('entities.address.fields.addressName'),
    {},
  ),
  firstLine: yupFormSchemas.string(
    i18n('entities.address.fields.firstLine'),
    {},
  ),
  secondLine: yupFormSchemas.string(
    i18n('entities.address.fields.secondLine'),
    {},
  ),
  zipCode: yupFormSchemas.string(
    i18n('entities.address.fields.zipCode'),
    {},
  ),
  city: yupFormSchemas.relationToOne(
    i18n('entities.address.fields.city'),
    {},
  ),
  phone: yupFormSchemas.string(
    i18n('entities.address.fields.phone'),
    {},
  ),
  business: yupFormSchemas.relationToOne(
    i18n('entities.address.fields.business'),
    {},
  ),
  coordinates: yupFormSchemas.string(
    i18n('entities.address.fields.coordinates'),
    {},
  ),
  urlMap: yupFormSchemas.string(
    i18n('entities.address.fields.urlMap'),
    {},
  ),
  preferred: yupFormSchemas.boolean(
    i18n('entities.address.fields.preferred'),
    {},
  ),
});

function AddressForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      customer: record.customer,
      addressName: record.addressName,
      firstLine: record.firstLine,
      secondLine: record.secondLine,
      zipCode: record.zipCode,
      city: record.city,
      phone: record.phone,
      business: record.business,
      coordinates: record.coordinates,
      urlMap: record.urlMap,
      preferred: record.preferred,
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
    Object.keys(initialValues).forEach((key: any) => {
      form.setValue(key, initialValues[key]);
    });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full sm:w-md md:w-md lg:w-md">
          <CustomerAutocompleteFormItem
            name="customer"
            label={i18n('entities.address.fields.customer')}
            placeholder={i18n(
              'entities.address.placeholders.customer',
            )}
            hint={i18n('entities.address.hints.customer')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="addressName"
            label={i18n(
              'entities.address.fields.addressName',
            )}
            placeholder={i18n(
              'entities.address.placeholders.addressName',
            )}
            hint={i18n(
              'entities.address.hints.addressName',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="firstLine"
            label={i18n(
              'entities.address.fields.firstLine',
            )}
            placeholder={i18n(
              'entities.address.placeholders.firstLine',
            )}
            hint={i18n('entities.address.hints.firstLine')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="secondLine"
            label={i18n(
              'entities.address.fields.secondLine',
            )}
            placeholder={i18n(
              'entities.address.placeholders.secondLine',
            )}
            hint={i18n('entities.address.hints.secondLine')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="zipCode"
            label={i18n('entities.address.fields.zipCode')}
            placeholder={i18n(
              'entities.address.placeholders.zipCode',
            )}
            hint={i18n('entities.address.hints.zipCode')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CityAutocompleteFormItem
            name="city"
            label={i18n('entities.address.fields.city')}
            placeholder={i18n(
              'entities.address.placeholders.city',
            )}
            hint={i18n('entities.address.hints.city')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="phone"
            label={i18n('entities.address.fields.phone')}
            placeholder={i18n(
              'entities.address.placeholders.phone',
            )}
            hint={i18n('entities.address.hints.phone')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessAutocompleteFormItem
            name="business"
            label={i18n('entities.address.fields.business')}
            placeholder={i18n(
              'entities.address.placeholders.business',
            )}
            hint={i18n('entities.address.hints.business')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="coordinates"
            label={i18n(
              'entities.address.fields.coordinates',
            )}
            placeholder={i18n(
              'entities.address.placeholders.coordinates',
            )}
            hint={i18n(
              'entities.address.hints.coordinates',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="urlMap"
            label={i18n('entities.address.fields.urlMap')}
            placeholder={i18n(
              'entities.address.placeholders.urlMap',
            )}
            hint={i18n('entities.address.hints.urlMap')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="preferred"
            label={i18n(
              'entities.address.fields.preferred',
            )}
            hint={i18n('entities.address.hints.preferred')}
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

export default AddressForm;
