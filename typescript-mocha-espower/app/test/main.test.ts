import * as assert from 'power-assert';
import * as mytest from '../src/main';

describe("Some Class", ()=>{
    context("someMethod()", ()=>{

        it("should return object", ()=>{
            const a = mytest.mytest.SomeClass.someMethod();
            const b = {c:0, d:"abc"};
            assert.deepEqual(a, b);
        });
    });
});
