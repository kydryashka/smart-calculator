class SmartCalculator {
  constructor(initialValue) {
      this.result = "" + initialValue;
      this.degrees = [];
      this.preOperations=["+","-"];
      this.baseOfDegree = initialValue;
      this.degree=new Promise((resolve,reject)=>{
        resolve(this.degrees);
      });
  }

  add(number) {
    if (this.degrees.length) {
      this.powFunction();
    }

      this.result += `+${number}`;
      this.baseOfDegree = number;
      this.preOperations=["+","-"];
      return this;
  }

  subtract(number) {
    if (this.degrees.length) {
      this.powFunction();
    }
      this.result += `-${number}`;
      this.baseOfDegree = number;
      this.preOperations=["-","+"];
      return this;
  }

  multiply(number) {
    if (this.degrees.length) {
      this.powFunction();
    }
      this.result += `*${number}`;
      this.baseOfDegree = number;
      this.preOperations=["*","/"];
      return this;
  }

  devide(number) {
    if (this.degrees.length) {
      this.powFunction();
    }
      this.result += `/${number}`;
      this.baseOfDegree = number;
      this.preOperations=["/","*"];
      return this;
  }

  pow(number) {
      this.degrees.push(number);
      return this;
  }

  powFunction() {
    while (this.degrees.length != 1) {

        this.degrees[this.degrees.length - 2] = Math.pow(this.degrees[this.degrees.length - 2], this.degrees.pop())

    }
    this.result += `${this.preOperations[1]} ${this.baseOfDegree} ${this.preOperations[0]}  Math.pow(${this.baseOfDegree}, ${this.degrees.pop()})`;
  }

  toString() {
    if (this.degrees.length) {
      this.powFunction();
    }
      return eval(this.result);
  }
}


module.exports = SmartCalculator;