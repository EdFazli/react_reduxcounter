import {connect} from "react-redux";
import Counter from "./Counter";

//Map redux state to component props
function mapStateToProps(state) {
    return {
        countValue:state.count
    };
}

//Action
var increaseAction = {type:"increase"};
var decreaseAction = {type:"decrease"};

//Map redux actions to component props
function mapDispatchToProps(dispatch){
    return {
        increaseCount: function() {
            return dispatch(increaseAction);
        },
        decreaseCount: function() {
            return dispatch(decreaseAction);
        }
    };
}

//the Higher Order Component (HOC)
var connectedComponent = connect (
    mapStateToProps,
    mapDispatchToProps
) (Counter);

export default connectedComponent;