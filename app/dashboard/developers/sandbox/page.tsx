"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function SandboxCredentials() {
  const credentials = {
    clientId: "sandbox-client-123",
    clientSecret: "sandbox-secret-456",
    apiKey: "sk_sandbox_abcdef123456",
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <Card className="border-0 shadow-none">
      <CardHeader>
        <CardTitle>Sandbox EHR Credentials</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          {Object.entries(credentials).map(([key, value]) => (
            <div key={key} className="space-y-2">
              <label className="text-sm font-medium text-gray-500 capitalize">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </label>
              <div className="flex items-center space-x-2">
                <code className="flex-1 p-2 bg-gray-100 rounded-md font-mono text-sm">
                  {value}
                </code>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(value)}
                  className="focus:ring-0 focus-visible:ring-0"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-sm text-gray-500">
          These credentials are for testing purposes only and provide access to
          mock data.
        </div>
      </CardContent>
    </Card>
  );
}

function FHIRResources() {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader>
        <CardTitle>Available FHIR Resources</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          <li>Patient</li>
          <li>Observation</li>
          <li>Condition</li>
          <li>Encounter</li>
          {/* Add more resources as needed */}
        </ul>
      </CardContent>
    </Card>
  );
}

function MockUsers() {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader>
        <CardTitle>Create Mock Users</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">
          Create test users for your sandbox environment.
        </p>
        <Button>Generate Mock User</Button>
      </CardContent>
    </Card>
  );
}

export default function SandboxPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">API Sandbox</h1>
        <p className="text-muted-foreground">
          Test your integration with our API using these sandbox credentials.
        </p>
      </div>

      <Tabs defaultValue="credentials" className="space-y-4">
        <TabsList>
          <TabsTrigger value="credentials">Credentials</TabsTrigger>
          <TabsTrigger value="resources">FHIR Resources</TabsTrigger>
          <TabsTrigger value="users">Mock Users</TabsTrigger>
        </TabsList>

        <TabsContent value="credentials">
          <SandboxCredentials />
        </TabsContent>

        <TabsContent value="resources">
          <FHIRResources />
        </TabsContent>

        <TabsContent value="users">
          <MockUsers />
        </TabsContent>
      </Tabs>
    </div>
  );
}
