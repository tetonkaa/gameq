import { useState } from 'react';
import axios from 'axios'

 function Profile(props) {

    return(
        <main>
            <h1>{props.user.username}</h1>
            <br />
            <h1>{props.user.bio}</h1>
            <br />
            <h1>{props.user.twitchLink}</h1>
        </main>
        
    )
 }

 export default Profile