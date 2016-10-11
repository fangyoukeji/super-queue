'use strict';

/* global path:false, color:false, env:false, exec:false, $ret:false, register:false, exit:false */

const MOCHA = path.resolve(__dirname, 'node_modules/.bin/mocha');

const NODE_4 = '4.6.0';
const NODE_6 = '6.7.0';

env.DEBUG = 'super-queue:*';

function test4() {
  console.log(color.green(`在 Node v${ NODE_4 } 下测试...`));
  exec(`n use ${ NODE_4 } ${ MOCHA } -t 10000`);
  if ($ret !== 0) {
    console.log(color.red(`在 Node v${ NODE_4 } 下测试不通过！`));
  }
}

function test6() {
  console.log(color.green(`在 Node v${ NODE_6 } 下测试...`));
  exec(`n use ${ NODE_4 } ${ MOCHA } -t 10000`);
  if ($ret !== 0) {
    console.log(color.red(`在 Node v${ NODE_4 } 下测试不通过！`));
  }
}

register('test', function () {
  test4();
  if ($ret !== 0) exit($ret);
  test6();
  if ($ret !== 0) exit($ret);
  console.log(color.green(`全部测试通过！`));
});

