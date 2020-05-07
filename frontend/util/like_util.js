export const likePicture = pictureId => {
    return $.ajax({
        method: "POST",
        url: "/api/likes",
        data: { like: { picture_id: pictureId } }
      });
}

export const unlikePicture = pictureId => {
    return $.ajax({
        method: "DELETE",
        url: `/api/likes/${pictureId}`
      });
}

