import _ from 'lodash'
// import sayHello from './modules/MyModule';
// import Greeter from './modules/Greeter'
// import './style.css'
import sayHello from '@/modules/MyModule';
import Greeter from '@/modules/Greeter'
import '@/style.css'

const container = `<div class="container" style="color: red;">内容12345678901</div>`;
document.getElementById("app").innerHTML = container;

const arr = _.concat([1, 2, 3], 4, [5])
sayHello('Hello from Rollup and lodash: ' + arr)

const a = new Greeter()
a.greet()
