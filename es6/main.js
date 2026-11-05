//Import วิธีที่1
import {sayHi,sayBye} from './say.js'

//Import วิธีที่2
import * as say from './say.js'

//Import วิธีที่3
import {sayHi as sh,sayBye as sb} from './say.js'

sayHi('Pirada')
sayBye('Pirada')

say.sayHi('Pirada')
say.sayBye('Pirada')

sh('Pirada')
sb('Pirada')

//Import Class ที่มีการกำหนด Default
import User from './user.js'

//สร้าง object
const obj = new User('Pirada')
console.log(obj.name);
obj.sayHi()