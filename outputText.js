function outputText(txt) {
    'use strict';
    var doc = document;
    var name = 'outputTextArea';
    var count = doc.getElementsByClassName(name).length + 1;
    var outputEl = doc.createElement('textarea');
    outputEl = doc.getElementsByTagName('body')[0].appendChild(outputEl);
    outputEl.id = name + count;
    outputEl.className = name;
    outputEl.style.cssText = 'color:black;display:block;font-size:12px;font-family:"Courier New",Arial,Helvetica;border:1px solid black;position:fixed;top:' + (count * 5) + 'px;left:' + (count * 5) + 'px;z-index:2147483647;width:600px;height:400px;padding:6px 10px;';
    outputEl.setAttribute('onkeyup', 'if(event.keyCode==27){var el=document.getElementById(this.id);el.parentNode.removeChild(el);}');
    outputEl.value = txt;
}
