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
import Storage from '../../../security/storage';
import ImagesFormItem from '../../../view/shared/form/items/ImagesFormItem';
import BusinessAutocompleteFormItem from '../../../view/business/autocomplete/BusinessAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.service.fields.name'),
    {},
  ),
  photo: yupFormSchemas.images(
    i18n('entities.service.fields.photo'),
    {},
  ),
  description: yupFormSchemas.string(
    i18n('entities.service.fields.description'),
    {},
  ),
  hoursDuration: yupFormSchemas.decimal(
    i18n('entities.service.fields.hoursDuration'),
    {},
  ),
  price: yupFormSchemas.decimal(
    i18n('entities.service.fields.price'),
    {},
  ),
  businessId: yupFormSchemas.relationToOne(
    i18n('entities.service.fields.businessId'),
    {},
  ),
  active: yupFormSchemas.boolean(
    i18n('entities.service.fields.active'),
    {},
  ),
});

function ServiceForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      photo: record.photo || [],
      description: record.description,
      hoursDuration: record.hoursDuration,
      price: record.price,
      businessId: record.businessId,
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
            label={i18n('entities.service.fields.name')}
            placeholder={i18n(
              'entities.service.placeholders.name',
            )}
            hint={i18n('entities.service.hints.name')}
            required={false}
            autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <ImagesFormItem
            name="photo"
            label={i18n('entities.service.fields.photo')}
            required={false}
            storage={Storage.values.servicePhoto}
            max={undefined}
            hint={i18n('entities.service.hints.photo')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="description"
            label={i18n(
              'entities.service.fields.description',
            )}
            placeholder={i18n(
              'entities.service.placeholders.description',
            )}
            hint={i18n(
              'entities.service.hints.description',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="hoursDuration"
            label={i18n(
              'entities.service.fields.hoursDuration',
            )}
            placeholder={i18n(
              'entities.service.placeholders.hoursDuration',
            )}
            hint={i18n(
              'entities.service.hints.hoursDuration',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="price"
            label={i18n('entities.service.fields.price')}
            placeholder={i18n(
              'entities.service.placeholders.price',
            )}
            hint={i18n('entities.service.hints.price')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessAutocompleteFormItem
            name="businessId"
            label={i18n(
              'entities.service.fields.businessId',
            )}
            placeholder={i18n(
              'entities.service.placeholders.businessId',
            )}
            hint={i18n('entities.service.hints.businessId')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="active"
            label={i18n('entities.service.fields.active')}
            hint={i18n('entities.service.hints.active')}
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

export default ServiceForm;
