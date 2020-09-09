function changeStyle(style) {
    var sel = window.getSelection();
    if (sel.rangeCount) {
      var e = document.createElement('span');
      e.classList.add(style.value);
      e.innerHTML = sel.toString();
  
      // https://developer.mozilla.org/en-US/docs/Web/API/Selection/getRangeAt
      var range = sel.getRangeAt(0);
      range.deleteContents();
      range.insertNode(e);
    }
}

document.querySelector(".add").addEventListener('click', addRichText);

function addRichText() {
    var newDiv = document.createElement("div");
    var rt = `<select id="select_font" onchange="changeStyle(this);">
    <option value="span-0" selected>None</option>
    <option value="span-b">Bold</option>
    <option value="span-u">Underlined</option>
    <option value="span-i">Italic</option>
</select>
<div contenteditable="true" class="editable">
Some Content
</div>
<button class="send">Отправить</button><br/>`;

    newDiv.innerHTML = rt;

    document.querySelector(".add").after(newDiv);

    document.querySelector(".send").addEventListener('click', removeRichText);

}


function removeRichText() {
    console.log(this);
    removeRichText2(this);
}

function removeRichText2(block) {
    block.parentNode.remove();
}