import "./jobitem.css"

const CreateJobCard = (prop) => {
   const {jobDetails} = prop
   return(
      <li className="job-item shadow">
         <div className="company-logo">
            <img src={jobDetails.companyLogo} alt="company-logo"  className="company-logo-image"/>
         </div>
         <div className="content-container">
            <div className="company-name-description">
               <div className="">
                  <p className="company-name-para"><b>{jobDetails.role}</b></p>
                  <p className="company-name-para"><b>{jobDetails.companyName}</b></p>
                  <p className="company-name-para mb-3">{jobDetails.description}</p>
               </div>
               <div className="company-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-share-fill" viewBox="0 0 16 16">
                     <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"/>
                  </svg>
               </div>
            </div>
            <div className="job-item-button-container">
               <button type="button" className="btn btn-primary apply-now-button">Apply Now</button>
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
               </svg>
            </div>
         </div>
         
      </li>
   )
}

export default CreateJobCard