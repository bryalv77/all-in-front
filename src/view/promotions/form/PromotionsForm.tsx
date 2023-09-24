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
import moment from 'moment';
import DatePickerFormItem from 'src/view/shared/form/items/DatePickerFormItem';
import ProductAutocompleteFormItem from 'src/view/product/autocomplete/ProductAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  code: yupFormSchemas.string(
    i18n('entities.promotions.fields.code'),
    {},
  ),
  discount: yupFormSchemas.decimal(
    i18n('entities.promotions.fields.discount'),
    {},
  ),
  startDate: yupFormSchemas.date(
    i18n('entities.promotions.fields.startDate'),
    {},
  ),
  endDate: yupFormSchemas.date(
    i18n('entities.promotions.fields.endDate'),
    {},
  ),
  productId: yupFormSchemas.relationToOne(
    i18n('entities.promotions.fields.productId'),
    {},
  ),
});

function PromotionsForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      code: record.code,
      discount: record.discount,
      startDate: record.startDate ? moment(record.startDate, 'YYYY-MM-DD').toDate() : null,
      endDate: record.endDate ? moment(record.endDate, 'YYYY-MM-DD').toDate() : null,
      productId: record.productId,
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
          <InputFormItem
            name="code"
            label={i18n('entities.promotions.fields.code')}
          placeholder={i18n('entities.promotions.placeholders.code')}
          hint={i18n('entities.promotions.hints.code')}
            required={false}
          autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="discount"
            label={i18n('entities.promotions.fields.discount')}
          placeholder={i18n('entities.promotions.placeholders.discount')}
          hint={i18n('entities.promotions.hints.discount')}  
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="startDate"
            label={i18n('entities.promotions.fields.startDate')}
          placeholder={i18n('entities.promotions.placeholders.startDate')}
          hint={i18n('entities.promotions.hints.startDate')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <DatePickerFormItem
            name="endDate"
            label={i18n('entities.promotions.fields.endDate')}
          placeholder={i18n('entities.promotions.placeholders.endDate')}
          hint={i18n('entities.promotions.hints.endDate')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <ProductAutocompleteFormItem  
            name="productId"
            label={i18n('entities.promotions.fields.productId')}
          placeholder={i18n('entities.promotions.placeholders.productId')}
          hint={i18n('entities.promotions.hints.productId')}
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

export default PromotionsForm;
