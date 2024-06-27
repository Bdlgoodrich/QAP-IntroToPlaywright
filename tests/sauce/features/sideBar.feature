Feature: SideBar

    SauceDemo doesn't have a "Guest" option, so users have to login.

    Acceptance Criteria:
    - All Items option goes to inventory page
    - About options goes to main sauce page
    - Logout option removes credentials and returns to login page
    - Reset App State option will remove items from cart, reset add/remove buttons, and sort A-Z

    Questions:
    - What should reset app state option actually do?
    - 

    Risks:
    - Logout option doesn't remove credentials
    - reset option doesn't work
    - 

    Test Strategy:
    - Cross Browser Testing

    Scenario: Example
        Given some state
        When some action
        Then some outcome