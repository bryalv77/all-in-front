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
import OrderAutocompleteFormItem from '../../../view/order/autocomplete/OrderAutocompleteFormItem';
import ProductAutocompleteFormItem from '../../../view/product/autocomplete/ProductAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  orderId: yupFormSchemas.relationToOne(
    i18n('entities.orderDetail.fields.orderId'),
    {},
  ),
  productId: yupFormSchemas.relationToOne(
    i18n('entities.orderDetail.fields.productId'),
    {},
  ),
  quantity: yupFormSchemas.integer(
    i18n('entities.orderDetail.fields.quantity'),
    {},
  ),
  unitPrice: yupFormSchemas.decimal(
    i18n('entities.orderDetail.fields.unitPrice'),
    {},
  ),
});

function OrderDetailForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      orderId: record.orderId,
      productId: record.productId,
      quantity: record.quantity,
      unitPrice: record.unitPrice,
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
      form.setValue(key as any, initialValues[key]);
    });
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="w-full sm:w-md md:w-md lg:w-md">
          <OrderAutocompleteFormItem
            name="orderId"
            label={i18n(
              'entities.orderDetail.fields.orderId',
            )}
            placeholder={i18n(
              'entities.orderDetail.placeholders.orderId',
            )}
            hint={i18n(
              'entities.orderDetail.hints.orderId',
            )}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <ProductAutocompleteFormItem
            name="productId"
            label={i18n(
              'entities.orderDetail.fields.productId',
            )}
            placeholder={i18n(
              'entities.orderDetail.placeholders.productId',
            )}
            hint={i18n(
              'entities.orderDetail.hints.productId',
            )}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputNumberFormItem
            name="quantity"
            label={i18n(
              'entities.orderDetail.fields.quantity',
            )}
            placeholder={i18n(
              'entities.orderDetail.placeholders.quantity',
            )}
            hint={i18n(
              'entities.orderDetail.hints.quantity',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="unitPrice"
            label={i18n(
              'entities.orderDetail.fields.unitPrice',
            )}
            placeholder={i18n(
              'entities.orderDetail.placeholders.unitPrice',
            )}
            hint={i18n(
              'entities.orderDetail.hints.unitPrice',
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

export default OrderDetailForm;
