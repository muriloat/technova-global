import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Briefcase, MapPin, Clock, Building2 } from "lucide-react";
import type { JobOpening } from "@shared/schema";

const applicationSchema = z.object({
  jobId: z.string(),
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  coverLetter: z.string().optional(),
});

type ApplicationFormData = z.infer<typeof applicationSchema>;

export default function Careers() {
  const { toast } = useToast();
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  const { data: jobs, isLoading } = useQuery<JobOpening[]>({
    queryKey: ["/api/jobs"],
  });

  const form = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      jobId: "",
      name: "",
      email: "",
      phone: "",
      coverLetter: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ApplicationFormData) => {
      const response = await apiRequest("POST", "/api/jobs/apply", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted",
        description: "Thank you for applying! We will review your application and get back to you soon.",
      });
      setShowApplicationForm(false);
      form.reset();
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleApply = (job: JobOpening) => {
    setSelectedJob(job);
    form.setValue("jobId", job.id);
    setShowApplicationForm(true);
  };

  const onSubmit = (data: ApplicationFormData) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-background" data-testid="page-careers">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
              data-testid="text-careers-title"
            >
              Join Our <span className="text-primary">Team</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Be part of a world-class team shaping the future of enterprise technology.
              We're always looking for talented individuals who share our passion for innovation.
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
            </div>
          ) : jobs && jobs.length > 0 ? (
            <div className="space-y-6">
              {jobs.map((job) => (
                <Card key={job.id} className="overflow-hidden" data-testid={`card-job-${job.id}`}>
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl flex items-center gap-2">
                          <Briefcase className="w-5 h-5 text-primary" />
                          {job.title}
                        </CardTitle>
                        <CardDescription className="mt-2 flex flex-wrap items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                        </CardDescription>
                      </div>
                      <Button
                        onClick={() => handleApply(job)}
                        data-testid={`button-apply-${job.id}`}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Description</h4>
                        <p className="text-muted-foreground">{job.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Requirements</h4>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                          {job.requirements.split("\n").map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="text-center py-12">
              <CardContent>
                <p className="text-muted-foreground">
                  No open positions at the moment. Please check back later!
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      </main>

      <Dialog open={showApplicationForm} onOpenChange={setShowApplicationForm}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>Apply for {selectedJob?.title}</DialogTitle>
            <DialogDescription>
              Fill out the form below to submit your application.
            </DialogDescription>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="John Doe"
                        data-testid="input-applicant-name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address *</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="john@example.com"
                        data-testid="input-applicant-email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="+1 (555) 123-4567"
                        data-testid="input-applicant-phone"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="coverLetter"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cover Letter</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us why you'd be a great fit for this role..."
                        className="min-h-[120px]"
                        data-testid="textarea-cover-letter"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end gap-2 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowApplicationForm(false)}
                  data-testid="button-cancel-application"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={mutation.isPending}
                  data-testid="button-submit-application"
                >
                  {mutation.isPending ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
