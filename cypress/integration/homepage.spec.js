describe('Homepage', () => {
  it('should render correctly', () => {

    cy.visit('http://localhost:3000');

    cy.eyesOpen({
      appName: 'test-css example',
      testName: 'check homepage',
      browser: [
        { name: 'chrome', width: 990, height: 600 },
        { name: 'ie', width: 990, height: 600 },
        { deviceName: 'iPhone 5/SE', screenOrientation: 'landscape' },
      ]
    });

    cy.eyesCheckWindow('Homepage check');

    cy.eyesClose();

  });
});
