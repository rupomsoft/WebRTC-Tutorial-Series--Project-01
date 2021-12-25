import cogoToast from 'cogo-toast';
class ToastHelper{

    UserNameRequired(){
        cogoToast.error(
            <div className="toast-text">
                Name Required !
            </div>,
            {position:"bottom-center"}
        )
    }

    RequestFail(){
        cogoToast.error(
            <div className="toast-text">
               Request Fail!
            </div>,
            {position:"bottom-center"}
        )
    }

    AnnouceNewJoiner(name){
        cogoToast.success(
            <div className="toast-text">
                {name} has been joined!
            </div>,
            {position:"bottom-center"}
        )

    }
    AnnouceLeftJoiner(name){
        cogoToast.error(
            <div className="toast-text">
                {name} has been left !
            </div>,
            {position:"bottom-center"}
        )
    }

}
export const {UserNameRequired,RequestFail,AnnouceNewJoiner,AnnouceLeftJoiner}=new ToastHelper();