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
import UserAutocompleteFormItem from '../../../view/user/autocomplete/UserAutocompleteFormItem';
import SelectFormItem from '../../../view/shared/form/items/SelectFormItem';
import messageEnumerators from '../../../modules/message/messageEnumerators';
import Storage from '../../../security/storage';
import FilesFormItem from '../../../view/shared/form/items/FilesFormItem';
import ConversationAutocompleteFormItem from '../../../view/conversation/autocomplete/ConversationAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  senderId: yupFormSchemas.relationToOne(
    i18n('entities.message.fields.senderId'),
    {},
  ),
  recipientId: yupFormSchemas.relationToOne(
    i18n('entities.message.fields.recipientId'),
    {},
  ),
  content: yupFormSchemas.string(
    i18n('entities.message.fields.content'),
    {},
  ),
  media: yupFormSchemas.files(
    i18n('entities.message.fields.media'),
    {},
  ),
  conversationId: yupFormSchemas.relationToOne(
    i18n('entities.message.fields.conversationId'),
    {},
  ),
  status: yupFormSchemas.enumerator(
    i18n('entities.message.fields.status'),
    {
      options: messageEnumerators.status,
    },
  ),
});

function MessageForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      senderId: record.senderId,
      recipientId: record.recipientId,
      content: record.content,
      media: record.media || [],
      conversationId: record.conversationId,
      status: record.status,
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
          <UserAutocompleteFormItem
            name="senderId"
            label={i18n('entities.message.fields.senderId')}
            placeholder={i18n(
              'entities.message.placeholders.senderId',
            )}
            hint={i18n('entities.message.hints.senderId')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <UserAutocompleteFormItem
            name="recipientId"
            label={i18n(
              'entities.message.fields.recipientId',
            )}
            placeholder={i18n(
              'entities.message.placeholders.recipientId',
            )}
            hint={i18n(
              'entities.message.hints.recipientId',
            )}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="content"
            label={i18n('entities.message.fields.content')}
            placeholder={i18n(
              'entities.message.placeholders.content',
            )}
            hint={i18n('entities.message.hints.content')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <FilesFormItem
            name="media"
            label={i18n('entities.message.fields.media')}
            required={false}
            storage={Storage.values.messageMedia}
            max={undefined}
            formats={undefined}
            hint={i18n('entities.message.hints.media')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <ConversationAutocompleteFormItem
            name="conversationId"
            label={i18n(
              'entities.message.fields.conversationId',
            )}
            placeholder={i18n(
              'entities.message.placeholders.conversationId',
            )}
            hint={i18n(
              'entities.message.hints.conversationId',
            )}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SelectFormItem
            name="status"
            label={i18n('entities.message.fields.status')}
            placeholder={i18n(
              'entities.message.placeholders.status',
            )}
            hint={i18n('entities.message.hints.status')}
            options={messageEnumerators.status.map(
              (value) => ({
                value,
                label: i18n(
                  `entities.message.enumerators.status.${value}`,
                ),
              }),
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

export default MessageForm;
