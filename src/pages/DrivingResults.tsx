
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

// Mock driving test results
const mockResults = {
  "DL123456": {
    name: "John Mwangi",
    idNumber: "29384756",
    testDate: "12 Apr 2025",
    testCenter: "Nairobi Central",
    category: "B - Light Vehicles",
    result: "PASS",
    scores: [
      { skill: "Road Signs Recognition", score: "21/25", passed: true },
      { skill: "Traffic Rules Knowledge", score: "18/20", passed: true },
      { skill: "Parking Skills", score: "8/10", passed: true },
      { skill: "Highway Driving", score: "9/10", passed: true },
      { skill: "Urban Driving", score: "18/20", passed: true },
      { skill: "Overall Control", score: "14/15", passed: true }
    ]
  },
  "DL234567": {
    name: "Mary Njeri",
    idNumber: "31245678",
    testDate: "15 Apr 2025",
    testCenter: "Mombasa Central",
    category: "B - Light Vehicles",
    result: "FAIL",
    scores: [
      { skill: "Road Signs Recognition", score: "18/25", passed: true },
      { skill: "Traffic Rules Knowledge", score: "15/20", passed: true },
      { skill: "Parking Skills", score: "3/10", passed: false },
      { skill: "Highway Driving", score: "6/10", passed: true },
      { skill: "Urban Driving", score: "10/20", passed: false },
      { skill: "Overall Control", score: "9/15", passed: true }
    ]
  }
};

const DrivingResults = () => {
  const [testNumber, setTestNumber] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState("");

  const handleCheck = () => {
    if (testNumber === "DL123456" || testNumber === "DL234567") {
      setResults(mockResults[testNumber]);
      setError("");
    } else {
      setError("No results found. Please verify your test number and try again.");
      setResults(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-police-800 mb-6 text-center">Driving Test Results</h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
            Check your driving test results and download your certificate if you passed.
          </p>
          
          <Card className="max-w-xl mx-auto">
            <CardHeader>
              <CardTitle>Check Your Results</CardTitle>
              <CardDescription>
                Enter your driving test number and ID number to view your results
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="test-number">Test Number</Label>
                <Input
                  id="test-number"
                  placeholder="e.g. DL123456"
                  value={testNumber}
                  onChange={(e) => setTestNumber(e.target.value)}
                />
              </div>
              
              <div className="space-y-1">
                <Label htmlFor="id-number">ID Number</Label>
                <Input
                  id="id-number"
                  placeholder="Your national ID number"
                  value={idNumber}
                  onChange={(e) => setIdNumber(e.target.value)}
                />
              </div>
              
              <div className="text-sm text-gray-500 mt-2">
                <p>For demo purposes, use one of these test numbers:</p>
                <ul className="list-disc pl-5">
                  <li>DL123456 (Passed)</li>
                  <li>DL234567 (Failed)</li>
                </ul>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={handleCheck} 
                className="w-full bg-police-700 hover:bg-police-800"
                disabled={!testNumber || !idNumber}
              >
                Check Results
              </Button>
            </CardFooter>
          </Card>
          
          {error && (
            <div className="max-w-xl mx-auto mt-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700">
              {error}
            </div>
          )}
          
          {results && (
            <Card className={`max-w-xl mx-auto mt-6 ${
              results.result === "PASS" ? "border-green-500" : "border-amber-500"
            }`}>
              <CardHeader className={
                results.result === "PASS" ? "bg-green-50" : "bg-amber-50"
              }>
                <div className="flex justify-between items-center">
                  <CardTitle>{results.name}</CardTitle>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    results.result === "PASS" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"
                  }`}>
                    {results.result}
                  </div>
                </div>
                <CardDescription className="mt-2">
                  ID: {results.idNumber} | Test Date: {results.testDate}
                </CardDescription>
                <CardDescription>
                  Test Center: {results.testCenter} | Category: {results.category}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h3 className="font-medium mb-2">Detailed Scores</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Skill</TableHead>
                      <TableHead>Score</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {results.scores.map((score: any, index: number) => (
                      <TableRow key={index}>
                        <TableCell>{score.skill}</TableCell>
                        <TableCell>{score.score}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            score.passed ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                          }`}>
                            {score.passed ? "Pass" : "Fail"}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                {results.result === "PASS" ? (
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    Download Certificate
                  </Button>
                ) : (
                  <div className="text-sm text-gray-700 w-full">
                    <p className="font-medium">Next Steps:</p>
                    <p>You need to retake your driving test. You can reschedule after 14 days from your test date.</p>
                  </div>
                )}
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DrivingResults;
