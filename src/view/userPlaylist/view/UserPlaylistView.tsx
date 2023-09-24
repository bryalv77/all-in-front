import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../shared/Spinner';
import UserViewItem from '../../user/view/UserViewItem';
import PlaylistViewItem from '../../playlist/view/PlaylistViewItem';

function UserPlaylistView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <UserViewItem
        label={i18n('entities.userPlaylist.fields.userId')}
        value={record.userId}
      />

      <PlaylistViewItem
        label={i18n(
          'entities.userPlaylist.fields.playlistId',
        )}
        value={record.playlistId}
      />
    </div>
  );
}

export default UserPlaylistView;
