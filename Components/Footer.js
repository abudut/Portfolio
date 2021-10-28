import React from 'react'

function Footer() {
    return (
        <footer className='py-20 text-center bg-gray-800 text-white'>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links"></ul>
  
            <ul className="copyright">
              <li>
                Made by{" "}
                <a title="Abudu" href="http://www.papareact.com/">
                  Abudu
                </a>
              </li>
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    )
}

export default Footer
