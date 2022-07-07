/*
Q2 (a)
setImmediate() is designed to execute a script once the current Poll phase completes. its callback execution will happen takes place in the  Check phase.
setTimeout() on the other hand schedules a callback function to be run after a minimum threshold in ms has elapsed. The expiry of timer is checked in Timer 
phase and execution of callback happens in Poll phase. 
hence we can use the setImmediate() if the requirement is that the specified function has to run immediately after the current poll phase, and 
without a specific wait time. in such a case setImmediate() would be a more prefered option to setTimeout().

Q2 (b)
unlike setImmediate(), process.nextTick() is not part of the event loop. it adds the callback into the nextTick queue. Node processes 
all the callbacks in the nextTick queue after the current operation completes and before the event loop continues. Which means it runs before 
any additional I/O events or timers fire in subsequent ticks of the event loop. This implied process.nextTick() has higher priority than setImmediate().
setimmediate is non IO blocking while process.Tick() is IO blocking.
Q2 (c)
No it does not have the window object. t. Instead node has global modules which which are automatically created.


*/


