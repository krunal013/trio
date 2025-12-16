const jobs = {
  name: "jobPost",
  title: "Job Post",
  type: "document",
  fields: [
    // Slug for dynamic page
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "jobHeading",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    },

    // Job List Page Fields
    {
      name: "jobHeading",
      title: "Job Heading",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "jobCategory",
      title: "Job Category",
      type: "string",
      options: {
        list: [
          { title: "Development", value: "Development" },
          { title: "Design", value: "Design" },
          { title: "Marketing", value: "Marketing" },
          { title: "Customer Service", value: "Customer-service" },
          { title: "Operations", value: "Operations" },
          { title: "Finance", value: "Finance" },
          { title: "Management", value: "Management" },
          { title: "Other", value: "Other" }
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "jobDescription",
      title: "Job Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      name: "jobPositions",
      title: "No. of Positions",
      type: "string",
      validation: (Rule) => Rule.required(),
    },

    // NEW FIELDS
    {
      name: "experience",
      title: "Experience Required",
      type: "string",
      description: "Example: 2–4 years",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "location",
      title: "Location",
      type: "string",
      options: {
        list: [
          { title: "Onsite", value: "Onsite" },
          { title: "Hybrid", value: "Hybrid" },
          { title: "Work From Home", value: "WFH" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    },

    {
      name: "jobFeatures",
      title: "Job Features",
      type: "array",
      of: [{ type: "string" }],
    },

    {
      name: "isActive",
      title: "Active Job?",
      type: "boolean",
      initialValue: true,
    },

    // -------------------------------
    // Job Detail Page Extra Sections
    // -------------------------------

    {
      name: "mainDescription",
      title: "Main Description",
      type: "text",
      rows: 5,
    },

    // ⭐ New — Unlimited list items (specification)
    {
      name: "specification",
      title: "Job Specification",
      type: "array",
      of: [{ type: "text" }],
      description: "Add as many bullet points as you want",
    },

    // ⭐ New — Unlimited list items (responsibilities)
    {
      name: "responsibilities",
      title: "Responsibilities",
      type: "array",
      of: [{ type: "text" }],
      description: "Add responsibility bullet points",
    },

    {
      name: "qualifications",
      title: "Qualifications & Skills",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default jobs;
