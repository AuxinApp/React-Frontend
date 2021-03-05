import './Post.css';
import React from "react";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function Post() {
   const [file, setFile] = React.useState("");
   const [caption, setCaption] = React.useState("");
   const [useTwitter, setUseTwitter] = React.useState(false);
   const [useInstagram, setUseInstagram] = React.useState(false);
   const [useFacebook, setUseFacebook] = React.useState(false);
   const [useLinkedin, setUseLinkedin] = React.useState(false);


  // Handles file upload event and updates state
  function handleUpload(event) {
    setFile(event.target.files[0]);
  }

  function handlePost() {
    NotificationManager.info('Posted content', 'Post Notification');
  }

  return (
    <div className="Post">
        <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>

            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous"/>

            <title>Auxin</title>
        </head>

        <NotificationContainer/>

        <main class="container"/>
            <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4"> Upload Your Media </h1>
            </div>
            <form/>
                <div>
                    <label for="formFile" class="form-label">Upload Media</label>
                    <input class="form-control" type="file" id="formFile" onChange={handleUpload}/>
                </div>
                <br/><br/>

                <label for="exampleTextarea">Post Caption</label>
                <textarea onChange={(e) => setCaption(e.target.value)} class="form-control" id="exampleTextarea" rows="3"></textarea>

                <br/> <br/>
                <label for="exampleTextarea">Select Social Media Channels</label>
                    
                <br/> <br/>
                <div class="form-check form-switch">
                    <input onChange={(e) => setUseTwitter(!useTwitter)} class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                    <label class="form-check-label" for="flexSwitchCheckDefault">Twitter</label>
                </div>
                <div class="form-check form-switch">
                    <input onChange={(e) => setUseInstagram(!useInstagram)} class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                    <label class="form-check-label" for="flexSwitchCheckChecked">Instagram</label>
                </div>
                <div class="form-check form-switch">
                    <input onChange={(e) => setUseFacebook(!useFacebook)} class="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" />
                    <label class="form-check-label" for="flexSwitchCheckDisabled">Facebook</label>
                </div>
                <div class="form-check form-switch">
                    <input onChange={(e) => setUseLinkedin(!useLinkedin)} class="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" />
                    <label class="form-check-label" for="flexSwitchCheckCheckedDisabled">LinkedIn</label>
                </div>
                <br/>
                <div class="d-grid gap-2">
                    <button type="button" class="btn btn-primary" onClick={handlePost}>Post</button>
                </div>
            <form/>

        <main/>
    </div>
  );
}

export default Post;
