import React from 'react';

class AuthForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm({user: this.state});
	}

	componentDidUpdate(){
		if (this.props.currentUser){
      this.props.router.push('/');
    }
	}

  update(property){
    return e => this.setState({[property]: e.target.value});
  }

  render(){
    return (
      <div>
        <h1>{this.props.formType}</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type='text' placeholder='username' value={this.state.username} onChange={this.update('username')}/>
          <input type='password' placeholder='password' value={this.state.password} onChange={this.update('password')}/>
          <input type='submit' value="Submit"/>
        </form>
      </div>
    );
  }
}

export default AuthForm;
