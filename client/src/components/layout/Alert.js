import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

//2.destructuring it here, passing in alerts making sure it's not null and then it's has something in it.
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
    //And if it does we're going to map through them and we're going to output a div with the message and
  ))

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
}

//1.mapping the redux state to props in this component so we can have access in it, getting the alert state, putting it inside a prop of alerts
const mapStateToProps = (state) => ({
  alerts: state.alert,
})

//So remember connect this in that map state to props.
//Now if we had any actions to call that would go second.
export default connect(mapStateToProps)(Alert)
//the alert array we see in the redux dev tools, we want to fetch that into this component
