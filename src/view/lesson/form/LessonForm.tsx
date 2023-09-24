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
import FilesFormItem from '../../../view/shared/form/items/FilesFormItem';
import CourseAutocompleteFormItem from '../../../view/course/autocomplete/CourseAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  title: yupFormSchemas.string(
    i18n('entities.lesson.fields.title'),
    {},
  ),
  description: yupFormSchemas.string(
    i18n('entities.lesson.fields.description'),
    {},
  ),
  externalUrl: yupFormSchemas.string(
    i18n('entities.lesson.fields.externalUrl'),
    {},
  ),
  media: yupFormSchemas.files(
    i18n('entities.lesson.fields.media'),
    {},
  ),
  hoursDuration: yupFormSchemas.decimal(
    i18n('entities.lesson.fields.hoursDuration'),
    {},
  ),
  courseId: yupFormSchemas.relationToOne(
    i18n('entities.lesson.fields.courseId'),
    {},
  ),
  active: yupFormSchemas.boolean(
    i18n('entities.lesson.fields.active'),
    {},
  ),
});

function LessonForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      title: record.title,
      description: record.description,
      externalUrl: record.externalUrl,
      media: record.media || [],
      hoursDuration: record.hoursDuration,
      courseId: record.courseId,
      active: record.active,
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
            name="title"
            label={i18n('entities.lesson.fields.title')}
            placeholder={i18n(
              'entities.lesson.placeholders.title',
            )}
            hint={i18n('entities.lesson.hints.title')}
            required={false}
            autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="description"
            label={i18n(
              'entities.lesson.fields.description',
            )}
            placeholder={i18n(
              'entities.lesson.placeholders.description',
            )}
            hint={i18n('entities.lesson.hints.description')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="externalUrl"
            label={i18n(
              'entities.lesson.fields.externalUrl',
            )}
            placeholder={i18n(
              'entities.lesson.placeholders.externalUrl',
            )}
            hint={i18n('entities.lesson.hints.externalUrl')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <FilesFormItem
            name="media"
            label={i18n('entities.lesson.fields.media')}
            required={false}
            storage={Storage.values.lessonMedia}
            max={undefined}
            formats={undefined}
            hint={i18n('entities.lesson.hints.media')}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="hoursDuration"
            label={i18n(
              'entities.lesson.fields.hoursDuration',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CourseAutocompleteFormItem
            name="courseId"
            label={i18n('entities.lesson.fields.courseId')}
            placeholder={i18n(
              'entities.lesson.placeholders.courseId',
            )}
            hint={i18n('entities.lesson.hints.courseId')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <SwitchFormItem
            name="active"
            label={i18n('entities.lesson.fields.active')}
            hint={i18n('entities.lesson.hints.active')}
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

export default LessonForm;
