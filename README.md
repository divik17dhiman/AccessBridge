# Website Accessibility Tester

## Description

Website Accessibility Tester is a tool designed to help developers ensure their websites are accessible to all users, including those with disabilities. Accessibility is a critical aspect of web development, as it ensures inclusivity and compliance with standards such as WCAG (Web Content Accessibility Guidelines). This tool provides a comprehensive analysis of a website's accessibility and offers actionable suggestions for improvements.

The tool is particularly useful for identifying issues such as missing alt attributes, improper heading structures, low contrast ratios, and other common accessibility barriers. By integrating this tool into your development workflow, you can create websites that are more user-friendly and compliant with accessibility standards.

## Features

- **Automated Accessibility Testing**: Analyze websites for common accessibility issues.
- **Detailed Reports**: Generate reports with actionable suggestions for improving accessibility.
- **Real-Time Feedback**: Get instant feedback while testing your website.
- **Customizable Rules**: Tailor the accessibility checks to meet specific project requirements.
- **User-Friendly Interface**: Intuitive design for easy navigation and usage.

## Technical Stack

The project is built using the following technologies:

### Frontend
- **React.js**: For building the user interface.
- **Axios**: For making API requests to the backend.
- **Bootstrap**: For responsive and accessible UI components.

### Backend
- **Node.js**: For server-side logic.
- **Express.js**: For building RESTful APIs.
- **Puppeteer**: For web scraping and automated browser testing.
- **axe-core**: For performing accessibility audits.

### Database
- **MongoDB**: For storing user data and test results.

### Installation

#### Frontend

1. Navigate to the frontend directory:
    ```sh
    cd frontend
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Start the development server:
    ```sh
    npm start
    ```

#### Backend

1. Navigate to the backend directory:
    ```sh
    cd backend
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Start the backend server:
    ```sh
    npm start
    ```

## Usage

1. Open your browser and navigate to the frontend development server (usually `http://localhost:3000`).
2. Enter the URL of the website you want to test for accessibility.
3. Click the "Analyze" button to start the accessibility test.
4. Review the results, which include:
   - A list of detected accessibility issues.
   - Suggestions for resolving each issue.
   - Severity levels to prioritize fixes.
5. Use the suggestions to improve the accessibility of your website.

## Benefits of Using Website Accessibility Tester

- **Compliance**: Ensure your website meets WCAG and other accessibility standards.
- **Inclusivity**: Make your website usable for people with disabilities.
- **SEO Improvement**: Accessibility improvements often enhance search engine optimization.
- **Legal Protection**: Reduce the risk of legal issues related to accessibility non-compliance.

## Contributing

We welcome contributions to the Website Accessibility Tester project. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact the project maintainers at [support@example.com](mailto:support@example.com).
