import { useState } from 'react';
import axios from 'axios'

 function Profile(props) {

    return(
        <h1>{props.user.username}</h1>
    )
 }

 export default Profile