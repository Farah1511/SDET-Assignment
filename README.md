# Playwright SDET Assignment
This project contains **automation tests** for the SDET Intern position, using **Playwright** with **JavaScript** and the **Page Object Model (POM)** design pattern.

# Project Structure:
/playwright-sdet-assignment
  ├── /pages
  │     ├── LoginPage.js
  │     ├── ProductPage.js
  │     ├── CartPage.js
  │     ├── CheckoutPage.js
  │
  ├── /tests
  │     ├── login.test.js
  │     ├── order.test.js
  │     ├── api.test.js
  │
  ├── /utils
  │     ├── apiUtils.js
  │
  ├── playwright.config.js
  ├── package.json

 # Issue faced
This was my first attempt at automation testing, and overall, it was a great learning experience. I encountered several challenges along the way, but I was able to resolve most of them successfully with the help of Google and AI tools. While I aimed to achieve 100% accuracy, I understand that perfection is a continuous journey.
One of the major challenges I faced was with API testing, particularly while working with the OpenWeather API. Despite generating multiple API keys, every request resulted in a 401 Unauthorized error. To troubleshoot, I:
•	Regenerated the API key multiple times.
•	Ensured the key was correctly implemented in the request.
•	Checked for activation delays and API access restrictions.
•	Sought help from ChatGPT and other online resources.
Unfortunately, the issue remains unresolved, and I was unable to retrieve valid responses from the API. However, I have documented my efforts and approach in my submission.
I truly hope that my dedication and problem-solving efforts will be recognized. Given the opportunity to work under the supervision of experienced SQA Engineers, I am confident that I can further enhance my skills and contribute effectively. I look forward to learning and growing in a professional environment. 

## Test Execution Summary  
All test cases have passed **except for the API testing test cases**.  
The API tests failed due to issues faced with the OpenWeather API, as mentioned above.  

Additionally, I have included:  
- A **test case file** for reference.  
- A **manual testing bug report file** for evaluation.  

I acknowledge that the work may not be **100% perfect**, but I have put in my best effort to ensure a **positive evaluation** in both **manual and automated testing**.  

Thank you for reviewing my submission! 😊

