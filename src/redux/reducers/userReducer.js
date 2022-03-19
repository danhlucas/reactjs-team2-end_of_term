const userInitial = {
    email: null,
    password: null
}

const userReducer = (state = userInitial, payload)=>{
    switch (payload.type) {
        case "USER-LOGIN":
            return{
                email : payload.email,
                password : payload.password
            }
        case "USER-LOGOUT":
            return{
                email : null,
                password : null
            }
        default:
            return state;
    }
}

export default userReducer