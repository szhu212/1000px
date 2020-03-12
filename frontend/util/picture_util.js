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

export const createPicture = (pic) => (
    $.ajax({
        method:"GET",
        url:"/api/pictures",
        data: {pic}
        })
)
