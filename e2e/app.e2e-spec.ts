import { EmailNameTextfieldComponentPage } from './app.po';

describe('email-name-textfield-component App', function() {
  let page: EmailNameTextfieldComponentPage;

  beforeEach(() => {
    page = new EmailNameTextfieldComponentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
