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
import TextAreaFormItem from '../../../view/shared/form/items/TextAreaFormItem';
import InputFormItem from '../../../view/shared/form/items/InputFormItem';
import ProductAutocompleteFormItem from '../../../view/product/autocomplete/ProductAutocompleteFormItem';
import CustomerAutocompleteFormItem from '../../../view/customer/autocomplete/CustomerAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  comment: yupFormSchemas.string(
    i18n('entities.productReview.fields.comment'),
    {},
  ),
  productId: yupFormSchemas.relationToOne(
    i18n('entities.productReview.fields.productId'),
    {},
  ),
  customerId: yupFormSchemas.relationToOne(
    i18n('entities.productReview.fields.customerId'),
    {},
  ),
  rating: yupFormSchemas.decimal(
    i18n('entities.productReview.fields.rating'),
    {},
  ),
});

function ProductReviewForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      comment: record.comment,
      productId: record.productId,
      customerId: record.customerId,
      rating: record.rating,
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
          <TextAreaFormItem
            name="comment"
            label={i18n(
              'entities.productReview.fields.comment',
            )}
            placeholder={i18n(
              'entities.productReview.placeholders.comment',
            )}
            hint={i18n(
              'entities.productReview.hints.comment',
            )}
            required={false}
            autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <ProductAutocompleteFormItem
            name="productId"
            label={i18n(
              'entities.productReview.fields.productId',
            )}
            placeholder={i18n(
              'entities.productReview.placeholders.productId',
            )}
            hint={i18n(
              'entities.productReview.hints.productId',
            )}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CustomerAutocompleteFormItem
            name="customerId"
            label={i18n(
              'entities.productReview.fields.customerId',
            )}
            placeholder={i18n(
              'entities.productReview.placeholders.customerId',
            )}
            hint={i18n(
              'entities.productReview.hints.customerId',
            )}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="rating"
            label={i18n(
              'entities.productReview.fields.rating',
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

export default ProductReviewForm;
