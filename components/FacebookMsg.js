"use client"
import React, { Component} from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
    return (
      <FacebookProvider appId="1521376062084598" chatSupport>
        <CustomChat pageId="61563111945483" minimized={false}/>
      </FacebookProvider>    
    );
}

export default FacebookMsg