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
import UserAutocompleteFormItem from '../../../view/user/autocomplete/UserAutocompleteFormItem';
import SwitchFormItem from '../../../view/shared/form/items/SwitchFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.deliveryMethod.fields.name'),
    {},
  ),
  userId: yupFormSchemas.relationToOne(
    i18n('entities.deliveryMethod.fields.userId'),
    {},
  ),
  vehicleInfo: yupFormSchemas.string(
    i18n('entities.deliveryMethod.fields.vehicleInfo'),
    {},
  ),
  additionalInfo: yupFormSchemas.string(
    i18n('entities.deliveryMethod.fields.additionalInfo'),
    {},
  ),
  active: yupFormSchemas.boolean(
    i18n('entities.deliveryMethod.fields.active'),
    {},
  ),
});

function DeliveryMethodForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      userId: record.userId,
      vehicleInfo: record.vehicleInfo,
      additionalInfo: record.additionalInfo,
      active: record.active,
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
          <InputFormItem
            name="name"
            label={i18n(
              'entities.deliveryMethod.fields.name',
            )}
            placeholder={i18n(
              'entities.deliveryMethod.placeholders.name',
            )}
            hint={i18n(
              'entities.deliveryMethod.hints.name',
            )}
            required={false}
            autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <UserAutocompleteFormItem
            name="userId"
            label={i18n(
              'entities.deliveryMethod.fields.userId',
            )}
            placeholder={i18n(
              'entities.deliveryMethod.placeholders.userId',
            )}
            hint={i18n(
              'entities.deliveryMethod.hints.userId',
            )}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="vehicleInfo"
            label={i18n(
              'entities.deliveryMethod.fields.vehicleInfo',
            )}
            placeholder={i18n(
              'entities.deliveryMethod.placeholders.vehicleInfo',
            )}
            hint={i18n(
              'entities.deliveryMethod.hints.vehicleInfo',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="additionalInfo"
            label={i18n(
              'entities.deliveryMethod.fields.additionalInfo',
            )}
            placeholder={i18n(
              'entities.deliveryMethod.placeholders.additionalInfo',
            )}
            hint={i18n(
              'entities.deliveryMethod.hints.additionalInfo',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="active"
            label={i18n(
              'entities.deliveryMethod.fields.active',
            )}
            hint={i18n(
              'entities.deliveryMethod.hints.active',
            )}
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

export default DeliveryMethodForm;
