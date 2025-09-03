
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
2. How do you **create and insert a new element into the DOM**?
3. What is **Event Bubbling** and how does it work?
4. What is **Event Delegation** in JavaScript? Why is it useful?
5. What is the difference between **preventDefault() and stopPropagation()** methods?


Ans:

1. getElementById return a value where getElementByclassName return an array like object.
querySelector select specific class or element or first element/tag of a section where
querySelectorAll select multiple class or tag/element in a section

2. const newchild=document.createElement('Tag name')
parent.append(newChild)


3.Event bubbling is the event trigger process where it check and trigger child element then go upward by triggering parent element

4. Event delegation is the process where each child can be triggered by only triggering the parent element,it is usefull because 
it prevent the eventListener for every child and trigger every child by adding event listener only in parent child
  

5.Prevent default prevent the default behaviour of an element where stopPropagation stop the bubbling up to parent element 




















