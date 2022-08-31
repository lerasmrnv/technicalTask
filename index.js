let app = document.getElementById('app');

function createCounter (counter = 0, min, max) {
    let container = document.createElement ('div');
    container.className = "container";

    let incrementContainer = document.createElement('button');
    incrementContainer.className = 'increment';
    incrementContainer.onclick = increment;
    incrementContainer.innerText = '+';

    let decrementContainer = document.createElement('button');
    decrementContainer.className = 'decrement';
    decrementContainer.onclick = decrement;
    decrementContainer.innerText = '-';
    
    let text = document.createElement ('p');
    text.innerText = 'counter: ';

    let count = document.createElement ('p');
    count.className = "count";

    function update (){
        count.innerText = counter;
        // Min and max check
        if(min >= counter) {
            decrementContainer.disabled = true;
        }
        else {
            decrementContainer.disabled = false;
        }
        if(max <= counter) {
            incrementContainer.disabled = true;
        }
        else {
            incrementContainer.disabled = false;
        }
    }

    function increment () {
        counter++;
        update();
    }
    
    function decrement () {
        counter--;
        update();
    }

    update();
    app.append(container);
    container.append(incrementContainer);
    container.append(decrementContainer);
    container.append(text);
    container.append(count);

    let obj = {get counter() {return counter}, increment, decrement};

    return obj;
}

// const counter_1_1 = createCounter();
// const counter_1_2 = createCounter(3);
// const counter_1_3 = createCounter(123);

const counter_1 = createCounter (15,10,17);
const counter_2 = createCounter (-6,-4);
const counter_3 = createCounter (10);

console.log(counter_1.counter);
console.log(counter_2.counter);
console.log(counter_3.counter);

counter_1.decrement();
console.log(counter_1.counter);

counter_3.increment();
console.log(counter_3.counter);
