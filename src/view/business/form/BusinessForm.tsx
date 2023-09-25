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
import Storage from '../../../security/storage';
import ImagesFormItem from '../../../view/shared/form/items/ImagesFormItem';
import BusinessCategoryAutocompleteFormItem from '../../../view/businessCategory/autocomplete/BusinessCategoryAutocompleteFormItem';
import AddressAutocompleteFormItem from '../../../view/address/autocomplete/AddressAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yupFormSchemas.string(
    i18n('entities.business.fields.name'),
    {},
  ),
  description: yupFormSchemas.string(
    i18n('entities.business.fields.description'),
    {},
  ),
  logo: yupFormSchemas.images(
    i18n('entities.business.fields.logo'),
    {},
  ),
  category: yupFormSchemas.relationToOne(
    i18n('entities.business.fields.category'),
    {},
  ),
  address: yupFormSchemas.relationToOne(
    i18n('entities.business.fields.address'),
    {},
  ),
  owner: yupFormSchemas.relationToMany(
    i18n('entities.business.fields.owner'),
    {},
  ),
  active: yupFormSchemas.boolean(
    i18n('entities.business.fields.active'),
    {},
  ),
});

function BusinessForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      name: record.name,
      description: record.description,
      logo: record.logo || [],
      category: record.category,
      address: record.address,
      owner: record.owner || [],
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
            label={i18n('entities.business.fields.name')}
            placeholder={i18n(
              'entities.business.placeholders.name',
            )}
            hint={i18n('entities.business.hints.name')}
            required={false}
            autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="description"
            label={i18n(
              'entities.business.fields.description',
            )}
            placeholder={i18n(
              'entities.business.placeholders.description',
            )}
            hint={i18n(
              'entities.business.hints.description',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <ImagesFormItem
            name="logo"
            label={i18n('entities.business.fields.logo')}
            required={false}
            storage={Storage.values.businessLogo}
            max={undefined}
            hint={i18n('entities.business.hints.logo')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <BusinessCategoryAutocompleteFormItem
            name="category"
            label={i18n(
              'entities.business.fields.category',
            )}
            placeholder={i18n(
              'entities.business.placeholders.category',
            )}
            hint={i18n('entities.business.hints.category')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <AddressAutocompleteFormItem
            name="address"
            label={i18n('entities.business.fields.address')}
            placeholder={i18n(
              'entities.business.placeholders.address',
            )}
            hint={i18n('entities.business.hints.address')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <UserAutocompleteFormItem
            name="owner"
            label={i18n('entities.business.fields.owner')}
            placeholder={i18n(
              'entities.business.placeholders.owner',
            )}
            hint={i18n('entities.business.hints.owner')}
            required={false}
            showCreate={!props.modal}
            mode="multiple"
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="active"
            label={i18n('entities.business.fields.active')}
            hint={i18n('entities.business.hints.active')}
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

export default BusinessForm;
