const app = document.getElementById('app')

if (0) {
  app.innerHTML = `
  <div>
    <p id='p1'>
      <span></span>
      <button>Button1</button>
    </p>
    <p id='p2'>
      <p id='p3'>
        <span></span>
        <button>Button1</button>
      </p>
    </p>
  </div>
`

  const p1 = document.getElementById('p1')
  p1.querySelector('button').addEventListener(
    'click',
    () => {
      p1.querySelector('span').innerText = Math.random()
    }, {
      once: true
    }
  )

  const p2 = document.getElementById('p2')
  const p3 = document.getElementById('p3')

  p2.addEventListener('click', null, {
    passive: true
  })

  p3.querySelector('button').addEventListener(
    'click',
    e => {
      // e.preventDefault();
      p1.querySelector('span').innerText = Math.random()
    }, {
      passive: true
    }
  )
}

if(0) {
  var passiveSupported = false;

  try {
    var options = Object.defineProperty({}, "passive", {
      get: function() {
        passiveSupported = true;
      }
    });

    window.addEventListener("test", null, options);
  } catch(err) {

  }

  console.log(passiveSupported)
}


app.innerHTML = `
<div class="outer">
  outer, once & none-once
  <div class="middle" target="_blank">
    middle, capture & none-capture
    <a class="inner1" href="https://www.mozilla.org" target="_blank">
      inner1, passive & preventDefault(which is not allowed)
    </a>
    <a class="inner2" href="https://developer.mozilla.org/" target="_blank">
      inner2, none-passive & preventDefault(not open new page)
    </a>
  </div>
</div>
<style>
.outer, .middle, .inner1, .inner2 {
  display:block;
  width:520px;
  padding:15px;
  margin:15px;
  text-decoration:none;
}
.outer{
  border:1px solid red;
  color:red;
}
.middle{
  border:1px solid green;
  color:green;
  width:460px;
}
.inner1, .inner2{
  border:1px solid purple;
  color:purple;
  width:400px;
}
</style>
`

let outer  = document.getElementsByClassName('outer') [0];
let middle = document.getElementsByClassName('middle')[0];
let inner1 = document.getElementsByClassName('inner1')[0];
let inner2 = document.getElementsByClassName('inner2')[0];

let capture = {
    capture : true
};
let noneCapture = {
    capture : false
};
let once = {
    once : true
};
let noneOnce = {
    once : false
};
let passive = {
    passive : true
};
let nonePassive = {
    passive : false
};

outer .addEventListener('click', onceHandler, once);
outer .addEventListener('click', noneOnceHandler, noneOnce);
middle.addEventListener('click', captureHandler, capture);
middle.addEventListener('click', noneCaptureHandler, noneCapture);
inner1.addEventListener('click', passiveHandler, passive);
inner2.addEventListener('click', nonePassiveHandler, nonePassive);

function onceHandler(event)
{
    alert('outer, once');
}
function noneOnceHandler(event)
{
    alert('outer, none-once, default');
}
function captureHandler(event)
{
    //event.stopImmediatePropagation();
    alert('middle, capture');
}
function noneCaptureHandler(event)
{
    alert('middle, none-capture, default');
}
function passiveHandler(event)
{
    // Unable to preventDefault inside passive event listener invocation.
    //在调用passive事件监听器内部不能使用preventDefault
    event.preventDefault();
    alert('inner1, passive, open new page');
}
function nonePassiveHandler(event)
{
    event.preventDefault();
    //event.stopPropagation();
    alert('inner2, none-passive, default, not open new page');
}