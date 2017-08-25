function get_browser() {
    var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if(/trident/i.test(M[1])){
        tem=/\brv[ :]+(\d+)/g.exec(ua) || [];
        return {name:'IE',version:(tem[1]||'')};
        }
    if(M[1]==='Chrome'){
        tem=ua.match(/\bOPR|Edge\/(\d+)/)
        if(tem!=null)   {return {name:'Opera', version:tem[1]};}
        }
    M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
    if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
    return {
      name: M[0],
      version: M[1]
    };
 }

 var browser = get_browser();

 console.log(browser.version);
 var full = localStorage.getItem('tester')
 localStorage.setItem('tester', null);
 
 console.log("var full is " + full);


   function findVersion(versionNum){
     if(full === null || versionNum == "9") {
         alert("You’re using Internet Explorer " + versionNum + ", which is an outdated web browser. That means things on this site won’t look right. And after January 1, 2018, things won’t display at all. The best way to fix the problem is to update your browser with the current version.");
         localStorage.setItem('tester','true');
       } else if (typeof(Storage) !== "undefined" && versionNum == "10") {
         alert("We’ve noticed you’re using Internet Explorer " + versionNum + ", an outdated web browser. That means things on our site won’t look right. And after January 1, 2018, things won’t display at all.\n\nWhat’s the fix? Get the current version of Internet Explorer or Chrome.");
       } else {
         console.log('hello');
         }


// localStorage.setItem('AnnouncementOnce','true');
}
