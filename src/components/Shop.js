import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'

const Shop = () => {

    const dispatch = useDispatch();
    const actions = bindActionCreators(actionCreators, dispatch);

    return (
        <div className='container' style={{ marginTop: "100px", textAlign: "center" }}>
            <h3> <strong>Deposit/ Withdraw Money</strong></h3>

            <div className="container" style={{ marginTop: "20px", marginBottom:"330px"}}>
                {/* <button className="btn btn-pri  mary mx-2" onClick={ () => { dispatch(actionCreators.withdrawMoney(100))}} > - </button> */}
                <button className="btn btn-danger mx-2" onClick={() => { actions.withdrawMoney(100) }} > <strong>-</strong></button>

                <strong> Update Balance </strong>

                {/* <button className="btn btn-primary mx-2" onClick={ () => { dispatch(actionCreators.depositMoney(100))}} > + </button> */}
                <button className="btn btn-success mx-2" onClick={() => { actions.depositMoney(100) }} > <strong>+</strong> </button>
            </div>
        </div >
    )
}

export default Shop
