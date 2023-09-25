import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from '../../../i18n';
import actions from '../../../modules/userPlaylist/view/userPlaylistViewActions';
import selectors from '../../../modules/userPlaylist/view/userPlaylistViewSelectors';
import UserPlaylistView from '../../../view/userPlaylist/view/UserPlaylistView';
import UserPlaylistViewToolbar from '../../../view/userPlaylist/view/UserPlaylistViewToolbar';
import Breadcrumb from '../../../view/shared/Breadcrumb';

function UserPlaylistPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id) as any);
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [
            i18n('entities.userPlaylist.menu'),
            '/user-playlist',
          ],
          [i18n('entities.userPlaylist.view.title')],
        ]}
      />

      <div className="mt-4 p-6 bg-white dark:bg-gray-800 dark:border-gray-800 text-gray-900 dark:text-gray-200 border-gray-200 border rounded-md">
        <h1 className="text-lg font-medium mb-6">
          {i18n('entities.userPlaylist.view.title')}
        </h1>

        <UserPlaylistViewToolbar match={match} />

        <UserPlaylistView
          loading={loading}
          record={record}
        />
      </div>
    </>
  );
}

export default UserPlaylistPage;
