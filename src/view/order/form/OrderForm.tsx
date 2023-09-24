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
import InputFormItem from 'src/view/shared/form/items/InputFormItem';
import SelectFormItem from 'src/view/shared/form/items/SelectFormItem';
import orderEnumerators from 'src/modules/order/orderEnumerators';
import Storage from 'src/security/storage';
import FilesFormItem from 'src/view/shared/form/items/FilesFormItem';
import CustomerAutocompleteFormItem from 'src/view/customer/autocomplete/CustomerAutocompleteFormItem';
import DeliveryMethodAutocompleteFormItem from 'src/view/deliveryMethod/autocomplete/DeliveryMethodAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  customer: yupFormSchemas.relationToOne(
    i18n('entities.order.fields.customer'),
    {
      "required": true
    },
  ),
  status: yupFormSchemas.enumerator(
    i18n('entities.order.fields.status'),
    {
      "options": orderEnumerators.status
    },
  ),
  attachments: yupFormSchemas.files(
    i18n('entities.order.fields.attachments'),
    {
      "max": 3
    },
  ),
  shippingPrice: yupFormSchemas.decimal(
    i18n('entities.order.fields.shippingPrice'),
    {},
  ),
  total: yupFormSchemas.decimal(
    i18n('entities.order.fields.total'),
    {},
  ),
  deliver: yupFormSchemas.relationToOne(
    i18n('entities.order.fields.deliver'),
    {},
  ),
});

function OrderForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      customer: record.customer,
      status: record.status,
      attachments: record.attachments || [],
      shippingPrice: record.shippingPrice,
      total: record.total,
      deliver: record.deliver,
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
            label={i18n('entities.order.fields.customer')}
            required={true}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="status"
            label={i18n('entities.order.fields.status')}
          placeholder={i18n('entities.order.placeholders.status')}
          hint={i18n('entities.order.hints.status')}
            options={orderEnumerators.status.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.order.enumerators.status.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <FilesFormItem
            name="attachments"
            label={i18n('entities.order.fields.attachments')}
            required={false}
            storage={Storage.values.orderAttachments}
            max={3}
            formats={["txt","pdf"]}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="shippingPrice"
            label={i18n('entities.order.fields.shippingPrice')}
          placeholder={i18n('entities.order.placeholders.shippingPrice')}
          hint={i18n('entities.order.hints.shippingPrice')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="total"
            label={i18n('entities.order.fields.total')}
          placeholder={i18n('entities.order.placeholders.total')}
          hint={i18n('entities.order.hints.total')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DeliveryMethodAutocompleteFormItem  
            name="deliver"
            label={i18n('entities.order.fields.deliver')}
          placeholder={i18n('entities.order.placeholders.deliver')}
          hint={i18n('entities.order.hints.deliver')}
            required={false}
            showCreate={!props.modal}
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

export default OrderForm;
