export async function submitUser(formData){
    const name = formData.get('name')
    const email = formData.get('email')

    console.log("submitting user data",name, email)

}