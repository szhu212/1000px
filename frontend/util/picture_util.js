export const fetchPictures = () => {
    // debugger
    return(
    $.ajax({
    method:"GET",
    url:"/api/pictures",
    })
    )
}

export const fetchPicture = (picId) => {
    return (
    $.ajax({
    method:"GET",
    url:`/api/pictures/${picId}`
    })
    )
}

export const createPicture = (formData) => {
    // debugger
    return (
    $.ajax({
        method:"POST",
        url:"/api/pictures",
        data: formData,
        contentType: false,
        processData: false
        })
)}

export const updatePicture = (picture) => (
    $.ajax({
        method:"PATCH",
        url:`/api/pictures/{pic.id}`,
        data: {picture}
        })
)

export const deletePicture = (picId) => (
    $.ajax({
        method:"DELETE",
        url:`/api/pictures/${picId}`
        })
)

export const fetchUserPictures =(userId) => {
    return (
        $.ajax({
            method:"GET",
            url:`/api/users/${userId}/userpictures`
            })
    )
}
