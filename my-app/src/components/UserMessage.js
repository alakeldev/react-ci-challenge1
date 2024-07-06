import React from 'react'

function UserMessage(props) {
    return (
        <div>
            {props.isLoggedIn ? (
                <div>
                    <p>Welcome to the site! please complete the steps below:</p>
                    <ol>
                        <li>Confirm Your Email</li>
                        <li>Complete Your Profile</li>
                        <li>Subscribe to the newsletter</li>
                    </ol>
                </div>
            ) : (<p>Please Sign in</p>)}
        </div>
    )
}

export default UserMessage