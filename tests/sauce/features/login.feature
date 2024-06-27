Feature: Login

    SauceDemo doesn't have a "Guest" option, so users have to login.

    Acceptance Criteria:
    - Users can login with valid credentials
    - Users can't login with invalid credentials

    Questions:
    - What happens when a user tries to login with an invalid username?
    - 
    - What should a problem user look like
        - How do we test for the content of an image?

    Risks:
    - The login page might not be accessible
    - Vaild credentials may not be required

    Test Strategy:
    - Cross Browser Testing

    Scenario: Example
        Given some state
        When some action
        Then some outcome


    Scenario: Login with valid credentials
        Given I am on the login page
        When I login with valid credentials
        Then I should be on the Products page

    Scenario Outline: Login with invalid credentials
        Given I am on the login page
        When I login with invalid credentials <username> <password>
        Then I should see an error message

        Examples:
            | username | password |
            | locked_out_user    | secret_sauce    |
            | error_user    | secret_sauce    |
            |    |    |
            | standard_user  |   |
            | standard_user  |  wrong_sauce  |

    Scenario: Login with problemUser credentials
        Given I am on the login page
        When I login with problem credentials
        Then I should be on the Products page with wrong images
