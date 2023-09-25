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
import Storage from '../../../security/storage';
import FilesFormItem from '../../../view/shared/form/items/FilesFormItem';
import ArtistAutocompleteFormItem from '../../../view/artist/autocomplete/ArtistAutocompleteFormItem';
import AlbumAutocompleteFormItem from '../../../view/album/autocomplete/AlbumAutocompleteFormItem';
import * as yup from 'yup';

const schema = yup.object().shape({
  title: yupFormSchemas.string(
    i18n('entities.song.fields.title'),
    {},
  ),
  artistId: yupFormSchemas.relationToOne(
    i18n('entities.song.fields.artistId'),
    {},
  ),
  albumId: yupFormSchemas.relationToOne(
    i18n('entities.song.fields.albumId'),
    {},
  ),
  duration: yupFormSchemas.string(
    i18n('entities.song.fields.duration'),
    {},
  ),
  genre: yupFormSchemas.string(
    i18n('entities.song.fields.genre'),
    {},
  ),
  externalUrl: yupFormSchemas.string(
    i18n('entities.song.fields.externalUrl'),
    {},
  ),
  media: yupFormSchemas.files(
    i18n('entities.song.fields.media'),
    {},
  ),
});

function SongForm(props) {
  const { saveLoading } = props;

  const [initialValues] = useState(() => {
    const record = props.record || {};

    return {
      title: record.title,
      artistId: record.artistId,
      albumId: record.albumId,
      duration: record.duration,
      genre: record.genre,
      externalUrl: record.externalUrl,
      media: record.media || [],
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
          <InputFormItem
            name="title"
            label={i18n('entities.song.fields.title')}
            placeholder={i18n(
              'entities.song.placeholders.title',
            )}
            hint={i18n('entities.song.hints.title')}
            required={false}
            autoFocus
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <ArtistAutocompleteFormItem
            name="artistId"
            label={i18n('entities.song.fields.artistId')}
            placeholder={i18n(
              'entities.song.placeholders.artistId',
            )}
            hint={i18n('entities.song.hints.artistId')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <AlbumAutocompleteFormItem
            name="albumId"
            label={i18n('entities.song.fields.albumId')}
            placeholder={i18n(
              'entities.song.placeholders.albumId',
            )}
            hint={i18n('entities.song.hints.albumId')}
            required={false}
            showCreate={!props.modal}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="duration"
            label={i18n('entities.song.fields.duration')}
            placeholder={i18n(
              'entities.song.placeholders.duration',
            )}
            hint={i18n('entities.song.hints.duration')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <InputFormItem
            name="genre"
            label={i18n('entities.song.fields.genre')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <TextAreaFormItem
            name="externalUrl"
            label={i18n('entities.song.fields.externalUrl')}
            placeholder={i18n(
              'entities.song.placeholders.externalUrl',
            )}
            hint={i18n('entities.song.hints.externalUrl')}
            required={false}
          />
        </div>
        <div className="w-full sm:w-md md:w-md lg:w-md mt-4">
          <FilesFormItem
            name="media"
            label={i18n('entities.song.fields.media')}
            required={false}
            storage={Storage.values.songMedia}
            max={undefined}
            formats={undefined}
            hint={i18n('entities.song.hints.media')}
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

export default SongForm;
