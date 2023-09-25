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
import StudentAutocompleteFormItem from '../../../view/student/autocomplete/StudentAutocompleteFormItem';
import CourseAutocompleteFormItem from '../../../view/course/autocomplete/CourseAutocompleteFormItem';
import LessonAutocompleteFormItem from '../../../view/lesson/autocomplete/LessonAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  studentId: yupFormSchemas.relationToOne(
    i18n('entities.courseProgress.fields.studentId'),
    {},
  ),
  courseId: yupFormSchemas.relationToOne(
    i18n('entities.courseProgress.fields.courseId'),
    {},
  ),
  progressPercentage: yupFormSchemas.decimal(
    i18n(
      'entities.courseProgress.fields.progressPercentage',
    ),
    {},
  ),
  currentLesson: yupFormSchemas.relationToOne(
    i18n('entities.courseProgress.fields.currentLesson'),
    {},
  ),
});

function CourseProgressForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      studentId: record.studentId,
      courseId: record.courseId,
      progressPercentage: record.progressPercentage,
      currentLesson: record.currentLesson,
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
          <StudentAutocompleteFormItem
            name="studentId"
            label={i18n(
              'entities.courseProgress.fields.studentId',
            )}
            placeholder={i18n(
              'entities.courseProgress.placeholders.studentId',
            )}
            hint={i18n(
              'entities.courseProgress.hints.studentId',
            )}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <CourseAutocompleteFormItem
            name="courseId"
            label={i18n(
              'entities.courseProgress.fields.courseId',
            )}
            placeholder={i18n(
              'entities.courseProgress.placeholders.courseId',
            )}
            hint={i18n(
              'entities.courseProgress.hints.courseId',
            )}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="progressPercentage"
            label={i18n(
              'entities.courseProgress.fields.progressPercentage',
            )}
            placeholder={i18n(
              'entities.courseProgress.placeholders.progressPercentage',
            )}
            hint={i18n(
              'entities.courseProgress.hints.progressPercentage',
            )}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <LessonAutocompleteFormItem
            name="currentLesson"
            label={i18n(
              'entities.courseProgress.fields.currentLesson',
            )}
            placeholder={i18n(
              'entities.courseProgress.placeholders.currentLesson',
            )}
            hint={i18n(
              'entities.courseProgress.hints.currentLesson',
            )}
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

export default CourseProgressForm;
