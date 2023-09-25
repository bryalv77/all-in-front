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
import SelectFormItem from '../../../view/shared/form/items/SelectFormItem';
import conversationEnumerators from '../../../modules/conversation/conversationEnumerators';
import Storage from '../../../security/storage';
import ImagesFormItem from '../../../view/shared/form/items/ImagesFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  type: yupFormSchemas.enumerator(
    i18n('entities.conversation.fields.type'),
    {
      options: conversationEnumerators.type,
    },
  ),
  name: yupFormSchemas.string(
    i18n('entities.conversation.fields.name'),
    {},
  ),
  avatar: yupFormSchemas.images(
    i18n('entities.conversation.fields.avatar'),
    {},
  ),
});

function ConversationForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      type: record.type,
      name: record.name,
      avatar: record.avatar || [],
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
          <SelectFormItem
            name="type"
            label={i18n(
              'entities.conversation.fields.type',
            )}
            placeholder={i18n(
              'entities.conversation.placeholders.type',
            )}
            hint={i18n('entities.conversation.hints.type')}
            options={conversationEnumerators.type.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.conversation.enumerators.type.${value}`,
                ),
              }),
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="name"
            label={i18n(
              'entities.conversation.fields.name',
            )}
            placeholder={i18n(
              'entities.conversation.placeholders.name',
            )}
            hint={i18n('entities.conversation.hints.name')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <ImagesFormItem
            name="avatar"
            label={i18n(
              'entities.conversation.fields.avatar',
            )}
            required={false}
            storage={Storage.values.conversationAvatar}
            max={undefined}
            hint={i18n(
              'entities.conversation.hints.avatar',
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

export default ConversationForm;
