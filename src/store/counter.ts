import { observable } from "mobx";

const counterStore = observable({
  counter: 100,
  addStore() {
    this.counter++;
  },
  increment() {
    this.counter++;
  },
  decrement() {
    this.counter--;
  },
  incrementAsync() {
    setTimeout(() => {
      this.counter++;
    }, 1000);
  },
});

export default counterStore;
