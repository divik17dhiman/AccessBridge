"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import SkeletonDemo from "@/components/apna-ui/resultskeleton"


export default function AccessibilityChecker() {
  const [url, setUrl] = useState("")
  const [results, setResults] = useState<string | object | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResults(null);
    // API
    try {
      const response = await fetch(`http://localhost:5000/api/test?url=${url}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
      }

      const data = await response.json();

      setResults(data);
    } catch (error) {
      setResults("An error has occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setUrl("")
    setResults(null)
  };

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Check Website Accessibility</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} onReset={handleReset} className="space-y-4">
            <div>
              <Input
                type="url"
                id="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Enter Website URL"
                required
                className="mt-1"
              />
            </div>
            <Button type="submit">Check Accessibility</Button>
            <Button className="ml-6" type="reset">Clear Results</Button>
          </form>
        </CardContent>
      </Card>

      {loading && <SkeletonDemo />}
      {results && (
        <Card>
          <CardHeader>
            <CardTitle>Results</CardTitle>
          </CardHeader>
          <CardContent>
            {typeof results === 'string' ? (
              <p>{results}</p>
            ) : (
              <div>
                {Object.entries(results).map(([key, value]) => (
                  key === "issues" && Array.isArray(value) ? (
                    <div key={key}>
                      <strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong>
                      <ul>
                        {value.map((issue, index) => (
                          <li key={index}>
                            <p><strong>Code:</strong> {issue.code}</p>
                            <p><strong>Context:</strong> {issue.context}</p>
                            <p><strong>Message:</strong> {issue.message}</p>
                            <br />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p key={key}>
                      <strong>{key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> {JSON.stringify(value, null, 2)}
                    </p>
                  )
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}

