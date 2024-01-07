import React from 'react'
import NotFoundStyles from './css/NotFound.module.css'
const NotFound = () => {
    return (
        <div className = {NotFoundStyles.notFoundContainer}>
            <h1 className = {NotFoundStyles.h1}>Opps!</h1>
            <h1 className = {NotFoundStyles.h1}>404 - Page Not Found</h1>
            <p className = {NotFoundStyles.p}>Sorry, the page you are looking for does not exist.</p>
        </div>
    )
}

export default NotFound
