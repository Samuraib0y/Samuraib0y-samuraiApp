import React from "react";
import {connect} from "react-redux";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../../HOC/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return{
        dialogPage: state.dialogReducer
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{

    }
}






export default compose (connect (mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)