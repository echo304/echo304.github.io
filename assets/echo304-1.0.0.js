/*!
 * bernardopacheco - v0.1.0 - 2016-06-19
 * Bernardo Pacheco
 * Source code for Bernardo Pacheco website
 * http://bernardopacheco.net
 * Copyright 2014. MIT licensed.
 */
!function(a,b,c){"use strict";!function(){var c=b.createElement("script"),d="https://api.github.com/repos/",e="echo304",f=e+".github.io";c.type="text/javascript",c.async=!0,c.src=d+e+"/"+f+"?callback="+e+".getGitHubRepoInfo",a[e]=a[e]||{},a[e].getGitHubRepoInfo=function(a){var c=a.data.stargazers_count,d=a.data.forks_count;b.getElementById("stargazers").innerText=c,b.getElementById("forks").innerText=d,b.getElementById("github-repo-info").style.display="block"},b.getElementsByTagName("HEAD")[0].appendChild(c)}()}(this,document);