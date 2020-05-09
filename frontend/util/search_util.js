export const search = (searchInput) => {

    return(
        $.ajax({
            method:"GET",
            url:"/api/searches",
            data: {
                search: searchInput
            }
        })
        )
}