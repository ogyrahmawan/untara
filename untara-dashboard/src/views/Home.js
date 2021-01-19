import React, {useEffect} from 'react'
import Sidebar from '../components/sidebar'
import {Switch, Route, NavLink, useHistory} from 'react-router-dom'
import ProductPage from './Product'
import FeedbackPage from './Feedback'
import Navbar from '../components/Navbar'


const Home = (props) => {
    const history = useHistory()
    useEffect(() => {
        if(!localStorage.access_token) {
            history.push('/login')
        }
    }, [history])
    return (
        <>
        <Navbar></Navbar>
        <div className="home-page-container d-flex">
            <Sidebar></Sidebar>
            <div className="home-page-right bg-light" >
                <div className="home-top-container">
                </div>
                <div className="home-body-container">
                    <Switch>
                        <Route path="/product">
                            <ProductPage></ProductPage>
                        </Route>
                        <Route path="/feedback" >
                            <FeedbackPage></FeedbackPage>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>

        </>
    )
}

export default Home