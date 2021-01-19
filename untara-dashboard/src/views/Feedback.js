import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchFeedback} from '../redux/actions/FeedbackAction'

const FeedbackPage = (props) => {
    const dispatch = useDispatch()
    const feedbacks = useSelector(state => state.feedback.data)

    useEffect(() => {
     dispatch(fetchFeedback())   
    }, [])

    return (
        <>
        <div className="container">
            <tabel className="table table-dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Question 1</th>
                        <th>Question 2</th>
                        <th>Question 3</th>
                        <th>Question 4</th>
                        <th>Question 5</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        feedbacks.map((feedback, index) => (
                            <tr key={feedback.id}>
                                <td>{index + 1}</td>
                                <td>{feedback.p1}</td>
                                <td>{feedback.p2}</td>
                                <td>{feedback.p3}</td>
                                <td>{feedback.p4}</td>
                                <td>{feedback.p5}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </tabel>
        </div>
        </>
    )
}

export default FeedbackPage