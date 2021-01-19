import axios from "axios"

export const setFeedbackData = (payload) => {
    return {
        type: 'SETFEEDBACKDATA',
        payload
    }
} 
export const setFeedbackLoading = () => {
    return {
        type: 'SETFEEDBACKLOADING'
    }
}

export const doneFeedbackLoading = () => {
    return {
        type: 'DONEFEEDBACKLOADING'
    }
}

export const fetchFeedback = () => (dispatch) => {
    console.log('tes')
    dispatch(setFeedbackLoading())
    axios({
        url: "/question",
        headers: {
            access_token: localStorage.access_token
        }
    })
    .then(res => {
        console.log(res)
        dispatch(setFeedbackData(res.data))
    })
    .catch(err => {
        console.log(err)
    })
    .finally(res => {
        dispatch(setFeedbackLoading())
    })
}