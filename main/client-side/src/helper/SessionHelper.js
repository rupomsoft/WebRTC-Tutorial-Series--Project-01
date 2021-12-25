class SessionHelper{

    setName(Name){
        sessionStorage.setItem("Name",Name)
    }

    getName(){
     return sessionStorage.getItem("Name")
    }

    setPeerID(PeerID){
        sessionStorage.setItem("PeerID",PeerID)
    }

    getPeerID(){
        return sessionStorage.getItem("PeerID")
    }

    logout(){
        sessionStorage.clear();
    }

}
export const {
    setName,
    getName,
    setPeerID,
    getPeerID,
    logout
}=new SessionHelper();
