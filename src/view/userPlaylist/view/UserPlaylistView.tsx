import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import UserViewItem from 'src/view/user/view/UserViewItem';
import PlaylistViewItem from 'src/view/playlist/view/PlaylistViewItem';

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
        label={i18n('entities.userPlaylist.fields.playlistId')}
        value={record.playlistId}
      />
    </div>
  );
}

export default UserPlaylistView;
