describe("Operate function", function() {
  let currentValue;

  beforeEach(function() {
    // Configura un valor inicial antes de cada prueba.
    currentValue = 0;
  });

  it("should add two numbers", function() {
    currentValue = operate(5, currentValue, "+");
    expect(currentValue).toEqual(5);
  });

  it("should subtract two numbers", function() {
    currentValue = operate(3, currentValue, "-");
    expect(currentValue).toEqual(-3);
  });

  it("should multiply two numbers", function() {
    currentValue = operate(4, currentValue, "*");
    expect(currentValue).toEqual(0); // 0 * 4 = 0
  });

  it("should divide two numbers", function() {
    currentValue = operate(2, currentValue, "/");
    expect(currentValue).toEqual(0); // 0 / 2 = 0
  });
});
