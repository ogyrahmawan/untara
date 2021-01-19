import axios from "axios";

export const setProductData = (payload) => {
    return {
        type: 'SETPRODUCTDATA',
        payload
    }
}

export const setProductLoading = () => {
    return {
        type: 'SETPRODUCTLOADING'
    }
}

export const doneProductLoading = () => {
    return {
        type: 'DONEPRODUCTLOADING'
    }
}

export const fetchProduct = () => (dispatch) => {
    setProductLoading()
    axios({
        url: "/menus",
        method: "GET",
        headers: {
            access_token: localStorage.access_token
        }
    })
        .then (res => {
            dispatch(setProductData(res.data))
            doneProductLoading()
        })
        .catch (err => {
            console.log(err.response.statusText)
        })
}

export const addProduct = (payload) => (dispatch) => {
    setProductLoading()
    axios({
        url: "/menus",
        method: "POST",
        headers: {
            access_token: localStorage.access_token
        },
        data: payload
    })
        .then (res => {
            console.log(res.data)
            dispatch(fetchProduct())
            doneProductLoading()
        })
        .catch (err => {
            console.log(err.response.statusText)
        })
}

export const deleteProduct = (id) => (dispatch) => {
    setProductLoading()
    axios({
        url: `/menus/${id}`,
        method: "DELETE",
        headers: {
            access_token: localStorage.access_token
        }
    })
        .then (res => {
            console.log(res.data)
            dispatch(fetchProduct())
            doneProductLoading()
        })
        .catch (err => {
            console.log(err.response.statusText)
        })
}

export const editProduct = (payload, id) => (dispatch) => {
    setProductLoading()
    axios({
        url: `/menus/${id}`,
        method: "PUT",
        headers: {
            access_token: localStorage.access_token
        },
        data: payload
    })
        .then (res => {
            console.log(res.data)
            dispatch(fetchProduct())
            doneProductLoading()
        })
        .catch (err => {
            console.log(err.response.statusText)
        })
}