import React from 'react';

class AuthForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

	componentDidUpdate(){
		if (this.props.currentUser){
      this.props.router.push('/');
    }
	}

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  signup(e){
    e.preventDefault();
    this.props.signup({user: this.state});
  }

  login(e){
    e.preventDefault();
    this.props.login({user: this.state});
  }

  login(e){
    e.preventDefault();
    this.props.login({user: this.state});
  }

  demoLogin(e){
    e.preventDefault();

    for(let i = 1; i < 16; i++){
      window.setTimeout(() => this.setState({username: 'guest'.slice(0, i)}), 100 * i);
    }
    for(let i = 1; i < 9; i++){
      window.setTimeout(() => this.setState({password: 'access'.slice(0, i)}), 600 + 100 * i);
    }

    window.setTimeout(() => this.props.login({user: this.state}), 2000);
  }

  render(){
    const errors = this.props.errors.map((error, i) => (
      <li key={i}>
        {error}
      </li>
    ));

    return (
      <div className='auth_form'>
        <h4 onClick={() => this.props.router.push('/')}>Googled</h4>
        <h6>Sign in with your Googled account</h6>
        <ul className='errors'>{errors}</ul>
        <form>
          <input type='text' placeholder='Username' value={this.state.username} onChange={this.update('username')}/>
          <input type='password' placeholder='Password' value={this.state.password} onChange={this.update('password')}/>
					<button onClick={this.login.bind(this)}>Login</button>
          <button onClick={this.signup.bind(this)}>Sign Up</button>
          <button className='demo_login' onClick={this.demoLogin.bind(this)}>Demo Login</button>
        </form>
      </div>
    );
  }
}

export default AuthForm;
