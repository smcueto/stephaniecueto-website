function websiteVisit(){
    mixpanel.track("personal website");
}
function trackTwitterButton(){
    mixpanel.track_links('#twitterLink', "Clicked Twitter link");
}
function trackResumePdfButton(){
    mixpanel.track_links('#resumePdfLink', "Clicked Resume PDF link");
}
function trackGithubButton(){
    mixpanel.track_links('#gitHubLink', "Clicked Github link");
}
function trackLinkedInButton(){
    mixpanel.track_links('#linkedInLink', "Clicked LinkedIn link");
}
function trackOnlineResumeButton(){
    mixpanel.track_links('#onlineResumeLink', "Clicked OnlineResume link");
}
       
  