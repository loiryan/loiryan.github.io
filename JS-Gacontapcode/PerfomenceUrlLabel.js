//PerfomenceUrlLabel
var tnreplace=function(a){return a.replace(/([\/-])?thu-thuat-blogger/gi,function(b,c){return c?b:"Thủ thuật Blogger"}).replace(/([\/-])?phan-mem-may-tinh/gi,function(b,c){return c?b:"Phần mềm máy tính"}).replace(/([\/-])?hosting-domain/gi,function(b,c){return c?b:"Hosting"})},mytitle=document.title;document.title=tnreplace(mytitle);var mybody=document.body.innerHTML;document.body.innerHTML=tnreplace(mybody);