// var showText = function (target, message, index, interval) {    
//   if (index < message.length) { 
//     $(target).append(message[index++]); 
//     setTimeout(function () { showText(target, message, index, interval); }, interval); 
//   } 
// }
    
// $(function () { 
 
//   showText("#msg", "Make My Day accompagne les PME, les TPE, les indépendants et les associations dans  la promotion de leur image, l’élaboration d’une stratégie médiatique et la mise en place de relations presse.", 0, 35);    
 
// }); 


// jQuery.fn.circleType = function(options) {

//     var self = this,
//         settings = {
//         dir: 1,
//         position: 'relative',
//     };
//     if (typeof(jQuery.fn.lettering) !== 'function') {
//         console.log('Lettering.js is required');
//         return;
//     }
//     return this.each(function () {
    
//         if (options) { 
//             jQuery.extend(settings, options);
//         }
//         var elem = this, 
//             delta = (180 / Math.PI),
//             fs = parseInt(jQuery(elem).css('font-size'), 10),
//             ch = parseInt(jQuery(elem).css('line-height'), 10) || fs,
//             txt = elem.innerHTML.replace(/^\s+|\s+$/g, '').replace(/\s/g, '&nbsp;'),
//             letters, 
//             center;

//         elem.innerHTML = txt
//         jQuery(elem).lettering();

//         elem.style.position =  settings.position;

//         letters = elem.getElementsByTagName('span');
//         center = Math.floor(letters.length / 2)
                
//         var layout = function () {
//             var tw = 0, 
//                 i,
//                 offset = 0,
//                 minRadius, 
//                 origin, 
//                 innerRadius,
//                 l, style, r, transform;
                                                
//             for (i = 0; i < letters.length; i++) {
//                 tw += letters[i].offsetWidth;
//             }
//             minRadius = (tw / Math.PI) / 2 + ch;
            
//             if (settings.fluid && !settings.fitText) {
//                 settings.radius = Math.max(elem.offsetWidth / 2, minRadius);
//             }    
//             else if (!settings.radius) {
//                 settings.radius = minRadius;
//             }   
            
//             if (settings.dir === -1) {
//                 origin = 'center ' + (-settings.radius + ch) / fs + 'em';
//             } else {
//                 origin = 'center ' + settings.radius / fs + 'em';
//             }

//             innerRadius = settings.radius - ch;
                
//             for (i = 0; i < letters.length; i++) {
//                 l = letters[i];
//                 offset += l.offsetWidth / 2 / innerRadius * delta;
//                 l.rot = offset;                      
//                 offset += l.offsetWidth / 2 / innerRadius * delta;
//             }   
//             for (i = 0; i < letters.length; i++) {
//                 l = letters[i]
//                 style = l.style
//                 r = (-offset * settings.dir / 2) + l.rot * settings.dir            
//                 transform = 'rotate(' + r + 'deg)';
                    
//                 style.position = 'absolute';
//                 style.left = '50%';
//                 style.marginLeft = -(l.offsetWidth / 2) / fs + 'em';

//                 style.webkitTransform = transform;
//                 style.MozTransform = transform;
//                 style.OTransform = transform;
//                 style.msTransform = transform;
//                 style.transform = transform;

//                 style.webkitTransformOrigin = origin;
//                 style.MozTransformOrigin = origin;
//                 style.OTransformOrigin = origin;
//                 style.msTransformOrigin = origin;
//                 style.transformOrigin = origin;
//                 if(settings.dir === -1) {
//                     style.bottom = 0;
//                 }
//             }
            
//             if (settings.fitText) {
//                 if (typeof(jQuery.fn.fitText) !== 'function') {
//                     console.log('FitText.js is required when using the fitText option');
//                 } else {
//                     jQuery(elem).fitText();
//                     jQuery(window).resize(function () {
//                         updateHeight();
//                     });
//                 }
//             }    
//             updateHeight();
            
//             if (typeof settings.callback === 'function') {
//                 // Execute our callback with the element we transformed as `this`
//                 settings.callback.apply(elem);
//             }
//         };
        
//         var getBounds = function (elem) {
//             var docElem = document.documentElement,
//                 box = elem.getBoundingClientRect();
//             return {
//                 top: box.top + window.pageYOffset - docElem.clientTop,
//                 left: box.left + window.pageXOffset - docElem.clientLeft,
//                 height: box.height
//             };
//         };       
        
//         var updateHeight = function () {
//             var mid = getBounds(letters[center]),
//                 first = getBounds(letters[0]),
//                 h;
//             if (mid.top < first.top) {
//                 h = first.top - mid.top + first.height;
//             } else {
//                 h = mid.top - first.top + first.height;
//             }
//             elem.style.height = h + 'px';  
//         }

//         if (settings.fluid && !settings.fitText) {
//             jQuery(window).resize(function () {
//                 layout();
//             });
//         }    

//         if (document.readyState !== "complete") {
//             elem.style.visibility = 'hidden';
//             jQuery(window).load(function () {
//                 elem.style.visibility = 'visible';
//                 layout();
//             });
//         } else {
//             layout();
//         }
//     });
// };

