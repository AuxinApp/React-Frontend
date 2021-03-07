import './Authenticate.css';
import Facebook_Logo_ from "../../media/fb.png";
import insta_Logo_ from "../../media/insta.png";
import linkedin_Logo_ from "../../media/linkedin.png";
import twitter_Logo_ from "../../media/twitter.png";

function handleAuth(medium) {
    if (medium === "twitter") {

    } else if (medium === "facebook") {

    } else if (medium === "instagram") {

    } else {
        
    }
}


function Authenticate() {
  return (
    <div>
        <head>
            <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/pricing/"/>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"/>
            <link href="pricing.css" rel="stylesheet"/>
        </head>
       <main class="container">
            <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                <h1 class="display-4">Connect Social Media </h1>
                <p> Authenticate Your Accounts</p>
            </div>

            <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
                <div class="col">
                    <div class="card mb-4 shadow-sm">
                        <div class="card-body">
                            <img src={twitter_Logo_} class="img-fluid" alt="twitter"/>
                            <h1 class="card-title pricing-card-title"> <small class="text-muted"></small></h1>
                            <button id="twitter" type="button" class="w-100 btn btn-lg btn-outline-primary" onClick={handleAuth("twitter")}>Connect</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-4 shadow-sm">
                        <div class="card-body">
                            <img src={insta_Logo_} class="img-fluid" alt="insta"/>
                            <h1 class="card-title pricing-card-title"> <small class="text-muted"></small></h1>
                            <button type="button" class="w-100 btn btn-lg btn-outline-primary" onClick={handleAuth("instagram")}>Connect</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-4 shadow-sm">
                        <div class="card-body">
                            <img src={Facebook_Logo_} class="img-fluid" alt="facebook"/>
                            <h1 class="card-title pricing-card-title"> <small class="text-muted"></small></h1>
                            <button type="button" class="w-100 btn btn-lg btn-outline-primary" onClick={handleAuth("facebook")}>Connect</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card mb-4 shadow-sm">
                        <div class="card-body">
                            <img src={linkedin_Logo_} class="img-fluid" alt="linkedin"/>
                            <h1 class="card-title pricing-card-title"> <small class="text-muted"></small></h1>
                            <button type="button" class="w-100 btn btn-lg btn-outline-primary" onClick={handleAuth("linkedin")}>Connect</button>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>
  );
}

export default Authenticate;
