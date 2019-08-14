import {debounce} from "./debounce";
import test from "tape"

test("debounce", function(t) {
	let called = false;

	debounce(function(){
		called = true
	}, 1)

	setTimeout(function() {
		t.equal(called, true)
	}, 100);

	t.end()
});