import ConinueWithGoogleButton from "@/components/continue-with-google-button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Login() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <ConinueWithGoogleButton />
      </CardContent>
    </Card>
  );
}
