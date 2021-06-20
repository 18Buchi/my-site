"use strict";
{
  class A {
    constructor(c) {
      this.c = c;
      // this.b = new B();
      console.log(c);
    }
  }

  class B {
    constructor(c) {
      this.c = new C();
      // this.fooB = this.c.fooC;
    }
  }

  class C {
    constructor(e) {
      this.e = e;
      this.b = new B(this);
      this.fooC = "fooC";
    }
  }

  class D {
    constructor() {}
  }
  new C("foo");
  new A();
}
