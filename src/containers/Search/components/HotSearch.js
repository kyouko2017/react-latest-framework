/**
 * Created by Administrator on 2016/7/2.
 */
import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles/hotSearch.less'

const HotSearch = (props) => {
    const { hotText, hotClick, currentHot } = props
    return (
        <a
            className={styles.style_span}
            onClick={hotClick}
            style={{color: currentHot === hotText ? '#398cee' : ''}}
        >
            {hotText}
        </a>
    )
}
HotSearch.propTypes = {
    hotText: PropTypes.string,
    hotClick: PropTypes.func,
    currentHot: PropTypes.string
}
export default HotSearch