import React from 'react';
import { i18n } from 'src/i18n';
import Spinner from 'src/view/shared/Spinner';
import TextViewItem from 'src/view/shared/view/TextViewItem';
import PlaylistViewItem from 'src/view/playlist/view/PlaylistViewItem';
import SongViewItem from 'src/view/song/view/SongViewItem';

function PlaylistSongView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <PlaylistViewItem
        label={i18n('entities.playlistSong.fields.playlistId')}
        value={record.playlistId}
      />

      <SongViewItem
        label={i18n('entities.playlistSong.fields.songId')}
        value={record.songId}
      />

      <TextViewItem
        label={i18n('entities.playlistSong.fields.trackOrder')}
        value={record.trackOrder}
      />
    </div>
  );
}

export default PlaylistSongView;
