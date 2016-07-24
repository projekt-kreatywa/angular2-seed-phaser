describe('SimpleGame', () => {
  const defaultIgnoreSync = browser.ignoreSynchronization;

  beforeEach( () => {
    browser.ignoreSynchronization = true;
    browser.get('/simplegame');
  });

  afterEach( () => {
    browser.ignoreSynchronization = defaultIgnoreSync;
  });

  it('should display the game window', () => {
    expect(element(by.css('#simplegame-content')).isPresent()).toEqual(true);
  });

});
