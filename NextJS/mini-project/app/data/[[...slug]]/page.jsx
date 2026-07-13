import React from 'react'

const slugpage = async ({ params }) => {
    let { slug } = await params;
    return (
        <div>
            slug page: {slug}
        </div>
    )
}

export default slugpage
