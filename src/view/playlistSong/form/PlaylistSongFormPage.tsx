import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from '../../../i18n';
import actions from '../../../modules/playlistSong/form/playlistSongFormActions';
import selectors from '../../../modules/playlistSong/form/playlistSongFormSelectors';
import { getHistory } from '../../../modules/store';
import PlaylistSongForm from '../../../view/playlistSong/form/PlaylistSongForm';
import Breadcrumb from '../../../view/shared/Breadcrumb';
import Spinner from '../../../view/shared/Spinner';

function PlaylistSongFormPage(props) {
  const [dispatched, setDispatched] = useState(false);
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const initLoading = useSelector(
    selectors.selectInitLoading,
  );
  const saveLoading = useSelector(
    selectors.selectSaveLoading,
  );
  const record = useSelector(selectors.selectRecord);

  const isEditing = Boolean(match.params.id);
  const title = isEditing
    ? i18n('entities.playlistSong.edit.title')
    : i18n('entities.playlistSong.new.title');

  useEffect(() => {
    dispatch(actions.doInit(match.params.id));
    setDispatched(true);
  }, [dispatch, match.params.id]);

  const doSubmit = (id, data) => {
    if (isEditing) {
      dispatch(actions.doUpdate(id, data));
    } else {
      dispatch(actions.doCreate(data));
    }
  };

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [
            i18n('entities.playlistSong.menu'),
            '/playlist-song',
          ],
          [title],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {title}
        </h1>

        {initLoading && <Spinner />}

        {dispatched && !initLoading && (
          <PlaylistSongForm
            saveLoading={saveLoading}
            initLoading={initLoading}
            record={record}
            isEditing={isEditing}
            onSubmit={doSubmit}
            onCancel={() =>
              getHistory().push('/playlist-song')
            }
          />
        )}
      </div>
    </>
  );
}

export default PlaylistSongFormPage;
