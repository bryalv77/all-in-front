import React from 'react';
import { i18n } from '../../../i18n';
import Spinner from '../../../view/shared/Spinner';
import TextViewItem from '../../../view/shared/view/TextViewItem';
import FilesViewItem from '../../../view/shared/view/FilesViewItem';
import ArtistViewItem from '../../../view/artist/view/ArtistViewItem';
import AlbumViewItem from '../../../view/album/view/AlbumViewItem';

function SongView(props) {
  const { record, loading } = props;

  if (loading || !record) {
    return <Spinner />;
  }

  return (
    <div>
      <TextViewItem
        label={i18n('entities.song.fields.title')}
        value={record.title}
      />

      <ArtistViewItem
        label={i18n('entities.song.fields.artistId')}
        value={record.artistId}
      />

      <AlbumViewItem
        label={i18n('entities.song.fields.albumId')}
        value={record.albumId}
      />

      <TextViewItem
        label={i18n('entities.song.fields.duration')}
        value={record.duration}
      />

      <TextViewItem
        label={i18n('entities.song.fields.genre')}
        value={record.genre}
      />

      <TextViewItem
        label={i18n('entities.song.fields.externalUrl')}
        value={record.externalUrl}
      />

      <FilesViewItem
        label={i18n('entities.song.fields.media')}
        value={record.media}
      />
    </div>
  );
}

export default SongView;
