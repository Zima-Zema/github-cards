import React from 'react';

export default class Card extends React.Component {

    render() {
        return (
            <div className='github-profile'>
                <img alt="profile" src="http://placehold.it/75" />
                <div className="info">
                    <div className="name">Name here...</div>
                    <div className="company">Name here...</div>
                </div>
            </div>
        )
    }
}

