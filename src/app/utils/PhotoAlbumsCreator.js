export default albums =>
  albums.map(album => {
    const newPhotoElements = album.photoElements.map(
      ({ src, caption, thumbnailWidth, thumbnailHeight }) => {
        const thumbnail =
          src.slice(0, src.length - 4) + 't' + src.slice(src.length - 4);
        return {
          src,
          thumbnail: thumbnail,
          thumbnailWidth: thumbnailWidth || 0,
          thumbnailHeight: thumbnailHeight || 0,
          caption,
        };
      },
    );
    return { title: album.title, photoElements: newPhotoElements };
  });
