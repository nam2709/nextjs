"use client"
import React, { useEffect } from 'react';

const FacebookMsg = () => {
    useEffect(() => {
        // Create the script tag and set appropriate attributes
        const script = document.createElement('script');
        script.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        script.async = true;
        script.defer = true;
        script.id = 'facebook-jssdk';
        document.body.appendChild(script);

        // Define the window.fbAsyncInit function
        window.fbAsyncInit = function() {
            FB.init({
                xfbml: true,
                version: 'v20.0'  // Replace API-VERSION with the specific version needed
            });
        };

        // Return a cleanup function to remove the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);  // Empty dependency array ensures this effect only runs once

    return (
        <div>
            <div id="fb-root"></div>
            <div id="fb-customer-chat" className="fb-customerchat"
                 attribution="biz_inbox" page_id="61563111945483"></div>
        </div>
    );
};

export default FacebookMsg;
