const JobForm = {
  name: "jobApplication",
  title: "Job Application",
  type: "document",
  fields: [
    {
      name: "fullName",
      title: "Full Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email Address",
      type: "string",
      validation: (Rule) =>
        Rule.required().regex(
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          "Enter a valid email address"
        ),
    },
    {
      name: "phone",
      title: "Phone Number",
      type: "string",
      validation: (Rule) =>
        Rule.required().min(10).max(15).warning("Check phone number length"),
    },
    {
      name: "applyingFor",
      title: "Applying For (Job Title)",
      type: "string",
      description: "Automatically filled from job page",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "resume",
      title: "Resume (PDF Upload)",
      type: "file",
      options: {
        accept: "application/pdf",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    },
  ],
};

export default JobForm;
