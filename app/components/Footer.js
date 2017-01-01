import React from 'react';
import {Link} from 'react-router';
// import FooterStore from '../stores/FooterStore'
// import FooterActions from '../actions/FooterActions';

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <footer className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-5'>
              <h3 className='lead'><strong>Information</strong> and <strong>Copyright</strong></h3>
              <p>Powered by <strong>Node.js</strong>, <strong>MongoDB</strong>, <strong>Express</strong>, and <strong>React</strong> with Flux architecture and server-side rendering.</p>
              <p>© 2016 Marco Tarantino.</p>
            </div>
            <div className='col-sm-7 hidden-xs'>
              <h3 className='lead'><strong>Attenzione</strong></h3>
              <p>Website still in alpha state.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
