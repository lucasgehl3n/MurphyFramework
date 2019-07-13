$( document ).ready(function(){
    w3CodeColor();
});

function w3_dropdown_click(dropdown_content){
  let x = document.getElementById(dropdown_content);
  if(x.className.indexOf("w3-show") == -1){
    x.className += " w3-show";
  }
  else{
    x.className = x.className.replace(" w3-show", "");
  }
}

function w3_accordion(accordion_content){
  let x = document.getElementById(accordion_content);
  if(x.className.indexOf("w3-show") == -1){
    x.className += " w3-show";
  }
  else{
    x.className = x.className.replace(" w3-show", "");
  }
}

function w3_accordion_highlight(accordion_content, classname){
  let x = document.getElementById(accordion_content);
  if(x.className.indexOf("w3-show") == -1){
    x.className += " "+classname+"";
    x.previousElementSibling.className += " "+classname+"";
  }
  else{
    x.className = x.className.replace("w3-show", "");
    x.previousElementSibling.className =
    x.previousElementSibling.className.replace(""+classname+"", "");
  }
}

/* <a href="javascript:void(0)" onclick="navbar_collapse_mobile('classname')">icon</a> */
function w3_navbar_collapse_mobile(navbar_content){
  let x = document.getElementById(navbar_content);
  if(x.className.indexOf("w3-show") == -1){
    x.className += " w3-show";
  }
  else{
    x.className = x.className.replace(" w3-show", "");
  }
}

function w3_sidebar(sidebar_content){
  let x = document.getElementById(sidebar_content);
  if(x.className.indexOf("w3-show") == -1){
    x.className += " w3-show";
  }
  else{
    x.className = x.className.replace(" w3-show", "");
  }
}

function w3_sidebar_full(sidebar_content){
  let x = document.getElementById(sidebar_content);
  if(x.className.indexOf("w3-show") == -1){
    x.className += " w3-show";
    x.style.width = "100%";
  }
  else{
    x.className = x.className.replace(" w3-show", "");
    x.style.width = "0%";
  }
}

function w3_sidebar_slide(sidebar_content, page, call_button, percent, side){
  let x = document.getElementById(sidebar_content);
  let y = document.getElementById(page);
  let z = document.getElementById(call_button);
  if(x.className.indexOf("w3-show") == -1){
    if(side.trim() === "left"){
      y.style.marginLeft = ""+percent+"%";
    }
    else{
      y.style.marginRight = ""+percent+"%";
    }
    x.style.width = ""+percent+"%";
    x.className += " w3-show";
    z.className += " w3-hide";
  }
  else{
    if(side.trim() === "left"){
      y.style.marginLeft = "0%";
    }
    else{
      y.style.marginRight = "0%";
    }
    x.style.width = "0%";
    x.className = x.className.replace(" w3-show", "");
    z.className = z.className.replace(" w3-hide", "");
  }
}

function w3_sidebar_overlay(sidebar_content, overlay){
  let x = document.getElementById(sidebar_content);
  let y = document.getElementById(overlay);
  if(x.className.indexOf("w3-show") == -1){
    x.className += " w3-show";
    y.className += " w3-show";
    y.style.cursor = "pointer";
  }
  else{
    x.className = x.className.replace(" w3-show", "");
    y.className = x.className.replace(" w3-show", "");
    y.style.cursor = "default";
  }
}

function w3_close_element(element){
  let x = document.getElementById(element);
  x.style.display = "none";
}

function w3_tabs(tab, classname){
  let i;
  let x = document.getElementsByClassName(classname);
  for(i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  document.getElementById(tab).style.display = "block";
}

function w3_tabs_active(evt, tab, classname, button_class, classname_highlight){
  let i, x, tablinks;
  x = document.getElementsByClassName(classname);
  for(i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName(button_class);
  for(i = 0; i < x.length; i++){
    tablinks[i].className = tablinks[i].className.replace(" "+classname_highlight+"", "");
  }
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " "+classname_highlight+"";
}

let slideIndex = 1;

function w3_slideshow(n, classname){
  let i;
  let x = document.getElementsByClassName(classname);
  if(n > x.length){
    slideIndex = 1;
  }
  if(n < 1){
    slideIndex = x.length;
  }
  for(i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function w3_slideshow_change(n, classname){
  w3_slideshow(slideIndex += n, classname);
}

let slideButtonIndex = 1;

function w3_slideshow_buttons(n, classname, button_class, class_button) {
  var i;
  var x = document.getElementsByClassName(classname);
  var dots = document.getElementsByClassName(button_class);
  if(n > x.length){
    slideButtonIndex = 1;
  }
  if(n < 1){
    slideButtonIndex = x.length;
  }
  for(i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++){
    dots[i].className = dots[i].className.replace(" "+class_button+"", "");
  }
  x[slideButtonIndex-1].style.display = "block";
  dots[slideButtonIndex-1].className += " "+class_button+"";
}

function w3_slideshow_current_button(n, classname, button_class, class_button){
  w3_slideshow_buttons(slideButtonIndex = n, classname, button_class, class_button);
}

function w3_slideshow_change_button(n, classname, button_class){
  w3_slideshow_buttons(slideButtonIndex += n, classname, button_class, class_button);
}

let carouselIndex = 0;

function w3_carousel(classname, time){
  let i;
  let x = document.getElementsByClassName(classname);
  for(i = 0; i < x.length; i++){
    x[i].style.display = "none";
  }
  carouselIndex++;
  if(carouselIndex > x.length){
    carouselIndex = 1;
  }
  x[carouselIndex-1].style.display = "block";
  setTimeout(w3_carousel(classname, time), time);
}

let modal;

function w3_modal(modal_id){
  modal = document.getElementById(modal_id);
  if(modal.className.indexOf("w3-show") == -1){
    modal.className += " w3-show";
  }
  else{
    modal.className = modal.className.replace(" w3-show", "");
  }
}

/* Close modal clicking anywhere besides the modal */
window.onclick = function(event){
  if(!(modal === undefined)){
    if(event.target == modal){
      modal.className = modal.className.replace(" w3-show", "");
    }
  }
}

function w3_filter_table_all(input_id, table_id){
  let input, filter, table, tr, i;
  input = document.getElementById(input_id);
  filter = input.value.toUpperCase();
  table = document.getElementById(table_id);
  tr = table.getElementsByTagName("tr");
  if(tr.length > 0){
    for(i = 1; i < tr.length; i++){
      if(tr[i]){
        txtValue = tr[i].textContent || tr[i].innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1){
          tr[i].style.display = "";
        }
        else{
          tr[i].style.display = "none";
        }
      }
    }
  }
}

function w3_filter_list(input_id, ul_id){
  let input, filter, ul, li, i;
  input = document.getElementById(input_id);
  filter = input.value.toUpperCase();
  ul = document.getElementById(ul_id);
  li = ul.getElementsByTagName("li");
  for(i = 0; i < li.length; i++){
    txtValue = li[i].textContent || li[i].innerText;
    if(txtValue.toUpperCase().indexOf(filter) > -1){
      li[i].style.display = "";
    }
    else{
      li[i].style.display = "none";
    }
  }
}

function w3_filter_dropdown(input_id, div_id) {
  let input, filter, a, i;
  input = document.getElementById(input_id);
  filter = input.value.toUpperCase();
  div = document.getElementById(div_id);
  a = div.getElementsByTagName("a");
  for(i = 0; i < a.length; i++){
    txtValue = a[i].textContent || a[i].innerText;
    if(txtValue.toUpperCase().indexOf(filter) > -1){
      a[i].style.display = "";
    }
    else{
      a[i].style.display = "none";
    }
  }
}
