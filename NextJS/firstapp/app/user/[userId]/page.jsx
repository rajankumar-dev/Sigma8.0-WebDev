import React from 'react'

const userId = async ({ params }) => {
    let { userId } = await params;
    return (
        <div>
            userId page:{userId}
        </div>
    )
}

export default userId
