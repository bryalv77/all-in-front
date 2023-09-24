import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from '../../../i18n';
import actions from '../../../modules/playlistSong/view/playlistSongViewActions';
import selectors from '../../../modules/playlistSong/view/playlistSongViewSelectors';
import PlaylistSongView from '../../../view/playlistSong/view/PlaylistSongView';
import PlaylistSongViewToolbar from '../../../view/playlistSong/view/PlaylistSongViewToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function PlaylistSongPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [
            i18n('entities.playlistSong.menu'),
            '/playlist-song',
          ],
          [i18n('entities.playlistSong.view.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.playlistSong.view.title')}
        </h1>

        <PlaylistSongViewToolbar match={match} />

        <PlaylistSongView
          loading={loading}
          record={record}
        />
      </div>
    </>
  );
}

export default PlaylistSongPage;
