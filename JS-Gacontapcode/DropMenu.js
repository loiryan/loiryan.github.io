//JSDropdownMenu
$(function(){function t(t,e){this.el=t||{},this.multiple=e||!1,this.el.find(".link").on("click",{el:this.el,multiple:this.multiple},this.dropdown)}t.prototype.dropdown=function(t){var e=t.data.el;$this=$(this),$next=$this.next(),$next.slideToggle(),$this.parent().toggleClass("open"),t.data.multiple||e.find(".submenu").not($next).slideUp().parent().removeClass("open")};new t($("#accordion"),!1)});