highlight
=========

Small Highlighter based on CSS3 Transitions and JS. Place a button in you markup than highligts (using background color in example, but you can use any other CSS definition) selected element by toogling a "highlight" class to all "to highlight" elements. Enjoy!

Usage
=====

Just add the class `.to_highlight` to any object you want to be highlighted, usually a div element, but also a paragraph or header or whatever

``` html

<div class="foo_class"> i'm not gonna be highlighted </div>
<div class="to_highlight"> i'm gonna be highlighted </div>
<div class="to_highlight"> i'm not gonna be highlighted too </div>
```
To set the trigger button use the Id `#button_highlight` in a link element, when it's clicked it toogles the class `.highlight_on` on all elements marked as `.to_highlight`, includind the button itself.

``` html

<a href="#" id="button_highlight" >Highlight it!</a>
```

Just add and define that classes in your css file, in the example the `.to_highlight` class some transitions are added to give a smooth change in class toogling

``` css
/* apply this class to all divs you want to be highlighted */

.to_highlight 
  {
  -moz-transition: all 0.5s linear; 
  -webkit-transition: all 0.5s linear; 
  -o-transition: all 0.5s linear;
  transition: all 0.5s linear; 
  }

/* apply this id to trigger highlight button  */
#button_highlight { }

/* this class will be aplied to all elements with .to_highlight class (and button too) */
.highlight_on { }
```

Messing on JS
=============

The highlight effect is applied to both, button trigger and selected elements

``` javascript

$(function() { $( "#button_highlight" ).click(function() {
    
    //Toogles highlight_on classes to any elemente with .to_higlight class
  $( ".to_highlight" ).toggleClass( "highlight_on", 500 );
    
    //Toogles highlight_on classes to trigger button too
    $( "#button_highlight" ).toggleClass( "highlight_on", 500 );
  return false; }); });
```

you can prevent the button being toogled by deleting the second instruction, like this

``` javascript

$(function() { $( "#button_highlight" ).click(function() {
    
    //Toogles highlight_on classes to any elemente with .to_higlight class
  $( ".to_highlight" ).toggleClass( "highlight_on", 500 );
    
  return false; }); });
```

And, that's all... feel free to copy, fork, use in your projects, it's so simply than i'm not sure if you can call it copy at all!

you can see a working demo in JSFiddle http://jsfiddle.net/aritz81/LLm2t/
