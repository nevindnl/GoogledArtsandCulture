import React from 'react';

class SearchHeader extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      word: ''
    };
  }

  _submit(e){
    e.preventDefault();
    this.props.router.push(`/search/${this.state.word}`);
  }

  _update(e){
    this.setState({word: e.target.value});
  }

  _exit(){
    if (location.hash.match(/search\/[^\/]*\?/) !== null){
      this.props.router.goBack();
    }
    $('.blanket').removeClass('visible');
    $('.search_header').removeClass('visible');
  }

  render(){
    return(
      <div className='search_bar group'>
        <div className='search_header group'>
          <img src='https://www.android.com/static/img/map/back-arrow.png' onClick={this._exit.bind(this)}></img>
          <form onSubmit={this._submit.bind(this)}>
            <input type='text' placeholder='Search' value={this.state.word} onChange={this._update.bind(this)}/>
          </form>
        </div>
        <div className='blanket group' onClick={this._exit.bind(this)}></div>
      </div>
    );
  }
}

export default SearchHeader;
