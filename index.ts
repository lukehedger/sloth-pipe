import { Pipe } from "sloth-pipe";

const add = (state, key, value) => Object.assign({ [key]: value }, state);
const remove = (state, key) => delete state[key];
const replace = (state, key, value) => {
	remove(state, key);
	return add(state, key, value);
};

const result = Pipe({
	counter: 0,
})
	.to(replace, "counter", 1)
	.to(add, "test", true)
	.catch((error) => console.error(error))
	.exec();

console.log(result);
