import React from 'react'
import { Helmet } from 'react-helmet'


const TitleName = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title} - Movie Fan Base`}</title>
        </Helmet>
    )
}

export default TitleName