import React from 'react';

import { useParams } from 'react-router-dom';
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {

     const {roomID}=useParams();

      const meeting=async(element)=>{

        const appID =888976053 ;
        const serverSecret = "7f46193e00bdda6c1c6efeb9510b503b";

        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "Rajesh");

          const zp=ZegoUIKitPrebuilt.create(kitToken);  

          zp.joinRoom({
              container:element,
              scenario: {
                mode: ZegoUIKitPrebuilt.GroupCall, 
              },
              
          });

      };



   
  return (
    <div ref={meeting} style={{width:"100vw",height:"100vh"}}  ></div>
  )
}

export default Room;