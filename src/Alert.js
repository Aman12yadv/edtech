import React from 'react'

function Alert(props) {
  return (
    props.alert &&
      <div className="alert alert-success" role="alert" style={{position:"fixed", width:"100%"}}>
        <strong>{props.alert.msg}</strong>{props.alert.type}
        </div>
  )
}

export default Alert
