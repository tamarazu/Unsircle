import axios from 'axios'
export const setLoading = (value) => {
    return {
        type: "SET_LOADING",
        payload: value
    }
}

export const setError = (value) => {
    return {
        type: "SET_ERROR",
        payload: value
    }
}

export const setPage = (value) => {
    return {
        type: "SET_PAGE",
        payload: value
    }
}

export const registerForm = (value) => {
    return function(dispatch) {
        // console.log(value)
        dispatch(setLoading(true))
        axios({
            method: "post",
            url: "https://api.unsircle.id/gtw/register",
            data: value
        })
            .then(({ data }) => {
                if(data.status === 'error') {
                    dispatch(setError(data.message[0].msg))
                } else {
                    dispatch(setPage('login'))
                }
            })
            .catch(({ response }) => {
                if(response.data) {
                    const { data } = response
                    dispatch(setError(data.message))
                } else {
                    dispatch(setError('Registrasi gagal, silahkan coba lagi'))
                }
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
} 

export const login = (value) => {
    return function(dispatch) {
        // console.log(value)
        dispatch(setLoading(true))
        axios({
            method: 'post',
            url: 'https://api.unsircle.id/gtw/login',
            data: value
        })
            .then(({ data }) => {
                console.log(data)
                if(data.status === 'ok') {
                    console.log(data)
                    let token = data.data.token
                    localStorage.setItem('token', token)
                    dispatch(setPage('home'))
                } else {
                    dispatch(setError(data.message))
                }
            })
            .catch(({ response }) => {
                dispatch(setError('Gagal Login'))
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
}

export const forgotPassword = (value) => {
    return function (dispatch) {
        // console.log(value)
        dispatch(setLoading(true))
        axios({
            method: 'post',
            url: "https://api.unsircle.id/gtw/forgotPassword",
            data: value
        })
            .then(({ data }) => {
                console.log(data)
                dispatch(setPage('login'))
            })
            .catch(({ response }) => {
                console.log('response')
            })
            .finally(() => {
                setLoading(false)
            })
    }
}