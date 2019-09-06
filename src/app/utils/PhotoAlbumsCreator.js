export default albums =>
  albums.map(album => {
    const newPhotoElements = album.photoElements.map(
      ({ src, caption, thumbnailWidth, thumbnailHeight }) => ({
        src,
        thumbnail: src,
        thumbnailWidth: thumbnailWidth || 0,
        thumbnailHeight: thumbnailHeight || 0,
        caption,
      }),
    );
    return { title: album.title, photoElements: newPhotoElements };
  });
