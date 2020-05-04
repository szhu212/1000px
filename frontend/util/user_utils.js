export const fetchUser = (userId) => {
    return (
    $.ajax({
    method:"GET",
    url:`/api/users/${userId}`
    })
    )
}

export const createAvatar = formData => {
    // debugger
    let currentUserId = formData.get('user_id')
    return $.ajax({
        method: "POST",
        url: `api/users/${currentUserId}/avatars`,
        data: formData,
        contentType: false,
        processData: false
      });
}

// export const updateAvatar = formData  => {
//     // debugger
//     let currentUserId = formData.get('user_id')
//     return $.ajax({
//         method: "PATCH",
//         url: `api/users/${currentUserId}/avatars/${formData.id}`,
//         data: formData,
//         contentType: false,
//         processData: false
//       });
// }



