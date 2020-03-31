import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

export const LoaderHOC = (Component, name) => (props) => {
    return props[name]  ? <Component {...props}/> : <div className="loader"><CircularProgress /></div>
}