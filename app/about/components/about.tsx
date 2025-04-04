import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function About() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About AccessBridge</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          AccessBridge is a web accessibility tool that helps website owners and developers ensure their sites are
          accessible to all users. Our mission is to make the web a more inclusive place for everyone.
        </p>
      </CardContent>

      <CardHeader>
        <CardTitle>Our Mission</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          At AccessibilityChecker, our mission is to make the web a more inclusive place for everyone. We believe that
          access to information and digital services should not be limited by a person's abilities or disabilities.
        </p>
      </CardContent>

      <CardHeader>
        <CardTitle>How We Work</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Our accessibility checker is designed to help website owners and developers ensure their sites are accessible
          to all users. Here's how our process works:
        </p>
        <ol className="list-decimal list-inside space-y-2 mb-4">
          <li>Website Scan: We analyze your entire website, crawling through pages and content.</li>
          <li>Compliance Check: Our tool checks your site against 
            <Link className="text-blue-500 dark:text-gray-400" target="_blank" href="https://www.w3.org/WAI/standards-guidelines/wcag/"> WCAG </Link> 
             2.1 guidelines and best practices.</li>
          <li>Issue Identification: We identify potential accessibility issues and areas for improvement.</li>
          <li>Detailed Reporting: You receive a comprehensive report with specific issues and recommendations.</li>
          <li>Guided Fixes: We provide step-by-step guidance on how to resolve identified issues.</li>
          <li>
            Ongoing Monitoring: We offer continuous monitoring to ensure your site remains accessible as you update
            content.
          </li>
        </ol>
      </CardContent>

      <CardHeader>
        <CardTitle>Our Technology</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-4">
          Our accessibility checker uses a combination of automated testing and machine learning algorithms to identify
          potential accessibility issues. We continuously update our technology to stay current with the latest
          accessibility standards and best practices.
        </p>
      </CardContent>
      <CardHeader>
        <CardTitle>Why Choose Us</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2">
          <li>Comprehensive Analysis: We check for a wide range of accessibility issues.</li>
          <li>User-Friendly Reports: Our reports are easy to understand and act upon.</li>
          <li>Continuous Support: We're here to help you make and keep your website accessible.</li>
          <li>Stay Compliant: We help you meet legal requirements and avoid potential lawsuits.</li>
          <li>Improve User Experience: Making your site accessible improves usability for everyone.</li>
        </ul>
      </CardContent>
    </Card>


  )
}