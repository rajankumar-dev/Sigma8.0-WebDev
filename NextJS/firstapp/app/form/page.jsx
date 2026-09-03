import React from 'react'
import Form from 'next/form'
import { submitUser } from './actions'



const FormsPage = () => {
    return (
        <div>
            <h1>create user</h1>
            <Form action={submitUser}>
                <input type="text" name="name" placeholder="name" />
                <input type="email" name="email" placeholder="email" />
                <button type="submit">submit</button>
            </Form>
        </div>
    )
}

export default FormsPage
