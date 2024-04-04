/* eslint-disable react/prop-types */
import propTypes from 'prop-types'
function UserGreeting(props) {


    // if (props.isLoggedIn) {
    //     return (
    //         <>
    //             <h2>welcome {props.username}</h2>
    //         </>
    //     )
    // }
    // else {
    //     return (
    //         <>
    //             <h2>Please log in to continue</h2>
    //         </>
    //     )
    // }

    return (
        props.isLoggedIn ? <h2>welcome {props.username}</h2> : <h2>Please log in to continue</h2>
    );

}

// shows warning/err in cnsole if proptype conflicts
UserGreeting.propTypes = {
    isLoggedIn : propTypes.bool,
    username : propTypes.string
}

// set default prop if value is empty
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username : "Guest"
}

export default UserGreeting