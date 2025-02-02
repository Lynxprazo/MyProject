let Localstream;
let remotestream;
let PeerConnection;

// create stun server that will allow you to be able to provide the ICE candidate  here we will use the  goolgle stun server 
const Server = {
    iceServer:[{
        urls: ['stun:stun1.l.google.com:19302', 'stun:stun2.l.google.com:19302']
    
    }]
}

let init = async() =>{
    Localstream = await navigator.mediaDevices.getUserMedia({video:true, audio:false})
    document.getElementById('video1').srcObject = Localstream
    CreateOffer()
 
}

let CreateOffer = async() =>{
    // handling creation of connection between peer
  PeerConnection = new RTCPeerConnection()
  remotestream = new MediaStream()
  document.getElementById('video2').srcObject = remotestream

//  start to track the  information (video and audio and add it to the localstearm)
  Localstream.getTracks().forEach((tracks) =>{
    PeerConnection.addTrack(tracks,Localstream)
  })

// create offer in each peer must have offer and answer

  let offer
//   create offer 
  offer = await PeerConnection.createOffer()
//   answer of offer 
    await PeerConnection.setLocalDescription(offer)

    console.log("offer is ", offer)
}
init()
