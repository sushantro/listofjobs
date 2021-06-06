import React from 'react';
import "./Dofa.css"



function AppFooter() {
  return (
//     <footer className="page-footer font-small cyan darken-3">

 
//   <div className="container">

  
//     <div className="row">

     
//       <div className="col-md-12 py-5">
//         <div className="mb-5 flex-center">

          
//           <a className="fb-ic">
//             <i class="fab fa-facebook-f"></i>
//           </a>
          
//           <a className="tw-ic">
//             <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
//           </a>
         
//           <a className="gplus-ic">
//             <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
//           </a>
          
//           <a className="li-ic">
//             <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
//           </a>
         
//           <a className="ins-ic">
//             <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
//           </a>
         
//           <a className="pin-ic">
//             <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
//           </a>
//         </div>
//       </div>
     

//     </div>
  

//   </div>


  
//   <div className="footer-copyright text-center py-3">© 2020 Copyright:
//     <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
//   </div>
  

// </footer>
<>
<div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Dhanda Pani Inc</h4>
            <h1 className="list-unstyled">
              <li>9594497747</li>
              <li>Uttharakhand</li>
              <li>We cover pahadi elaka </li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Our works</h4>
            <ui className="list-unstyled">
              <li>Freelancing walo ko lana aur kam krana</li>
              <li>Kuch issue hey just contact us</li>
              <li>Ghar baithey karau kam</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Our upcoming works and New releases coming Soon</h4>
            <ui className="list-unstyled">
                <h1>Cooking recepies</h1>
                <h4 style={{ffontWeight: "bold"}}>Ongoing services</h4>
              <li>Ac repairs</li>
              <li>Painting STUFF</li>
              <li>Antique models </li>
              <li> And many more </li>

            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Dhanda pani  | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>


</>
  )
}

export default AppFooter;




