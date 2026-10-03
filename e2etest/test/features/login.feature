@swag
Feature: To Validate login function

@regression @smoke
Scenario: To user login with valid username and valid password

Given To user launch browser
When user enter valid username and passeword 
Then user click login button 


@sanity
Scenario: To user login with invalid username and invalid password

Given To user launch browser
When user enter invalid username and passeword 
Then user click login button 






# Scenario Outline: user validate login function 

# Given To user launch chrome browser and pass url
# When to user enter "<username>" and "<password>"
# Then user click login button

# Examples:
#         |username|password|
#         |standard_user|secret_sauce|
#         |locked_out_user|secret_sauce|
#         |problem_user|secret_sauce|
#         |performance_glitch_user|secret_sauce|
#         |error_user|secret_sauce|
#         |visual_user|secret_sauce|



