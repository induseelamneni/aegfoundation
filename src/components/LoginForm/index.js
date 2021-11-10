import './index.css'

import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  renderUserName = () => {
    const {username} = this.state

    return (
      <div>
        <div>
          <label htmlFor="username" className="username-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            className="user-name-input"
            onChange={this.onChangeUsername}
          />
        </div>
        <hr className="line" />
      </div>
    )
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <div className="password-container">
        <div>
          <label htmlFor="password" className="username-label">
            Password
          </label>
          <input
            type="text"
            id="username"
            value={password}
            className="user-name-input"
            onChange={this.onChangePassword}
          />
        </div>
        <hr className="line" />
      </div>
    )
  }

  renderRememberPasswordField = () => (
    <div className="remember-password-field-container">
      <div>
        <input type="checkbox" id="rememberMe" />
        <label htmlFor="rememberMe" className="username-label">
          Remember me
        </label>
      </div>
      <div>
        <button type="button" className="forgot-btn">
          Forgot Password
        </button>
      </div>
    </div>
  )

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-bg">
        <div className="login-card">
          <form onSubmit={this.submitForm}>
            <div className="logo-container">
              <img
                src="https://res.cloudinary.com/dmd5feuh9/image/upload/v1636518052/aeglogo_cai5x7.png"
                alt="aeg logo"
                className="aeg-logo"
              />

              <p className="welcome-msg">
                welcome back! please login to your account
              </p>
            </div>
            <div className="username-password-container">
              {this.renderUserName()}
              {this.renderPassword()}
            </div>
            <div>{this.renderRememberPasswordField()}</div>

            <div className="login-btn-container">
              <button type="submit" className="login-btn">
                Login
              </button>
              {showSubmitError && <p className="error-message">*{errorMsg}</p>}
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
