const refs = {
counterValue : document.querySelector('#value'),
incrBtn : document.querySelector('button[data-action="increment"]'),
decrBtn : document.querySelector('button[data-action="decrement"]'),
};

const onBtnClick = {
   value: 0,
   increment() {
    this.value +=1;
    return refs.counterValue.textContent = this.value;
   },
   decrement() {
   this.value -=1;
   return refs.counterValue.textContent = this.value;
   }, 
};

refs.incrBtn.addEventListener('click', onBtnClick.increment.bind(onBtnClick));
refs.decrBtn.addEventListener('click', onBtnClick.decrement.bind(onBtnClick));