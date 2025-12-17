"use client";

import { useState } from "react";

export default function ApplyJobForm({ job }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fileError, setFileError] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [errors, setErrors] = useState({});

  const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const SANITY_TOKEN = process.env.NEXT_PUBLIC_SANITY_WRITE_TOKEN;

  /* -------------------------
     VALIDATION HELPERS
  ------------------------- */
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = (phone) =>
    /^(\+91)?[6-9]\d{9}$/.test(phone.replace(/\s/g, ""));

  /* -------------------------
     FILE VALIDATION
  ------------------------- */
  const handleFileSelect = (file) => {
    if (loading) return;

    setFileError("");

    if (!file) return;

    if (file.type !== "application/pdf") {
      setFileError("Only PDF files are allowed.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setFileError("File size must be less than 5 MB.");
      return;
    }

    setPdfFile(file);
  };

  /* -------------------------
     SUBMIT HANDLER
  ------------------------- */
  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;

    const form = e.target;
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();

    const newErrors = {};

    if (!validateEmail(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!validatePhone(phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (!pdfFile) {
      setFileError("Please upload a PDF file first.");
    }

    if (Object.keys(newErrors).length || !pdfFile) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    try {
      /* 1️⃣ Upload PDF */
      const uploadRes = await fetch(
        `https://${SANITY_PROJECT_ID}.api.sanity.io/v2023-05-01/assets/files/${SANITY_DATASET}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${SANITY_TOKEN}`,
          },
          body: pdfFile,
        }
      );

      const uploadJson = await uploadRes.json();
      const assetId = uploadJson.document._id;

      /* 2️⃣ Create Sanity document */
      const mutation = {
        mutations: [
          {
            create: {
              _type: "jobApplication",
              fullName: form.fullName.value,
              email,
              phone,
              applyingFor: job.jobHeading,
              resume: {
                _type: "file",
                asset: {
                  _type: "reference",
                  _ref: assetId,
                },
              },
              submittedAt: new Date().toISOString(),
            },
          },
        ],
      };

      await fetch(
        `https://${SANITY_PROJECT_ID}.api.sanity.io/v2023-05-01/data/mutate/${SANITY_DATASET}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${SANITY_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mutation),
        }
      );

      setSuccess(true);
      setPdfFile(null);
      form.reset();
    } catch (err) {
      console.error("Job Apply Error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {success && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-[9999]">
          <div className="bg-white p-8 rounded-2xl w-80 text-center">
            <h3 className="text-xl font-bold mb-2">Application Sent</h3>
            <p className="text-zinc-600 mb-4">
              We have received your application.
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="bg-black text-white px-6 py-2 rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-7">
        {/* Full Name */}
        <div>
          <label className="text-sm font-medium">Full Name</label>
          <input
            disabled={loading}
            className="w-full border p-3 rounded-xl text-lg outline-none mt-1 disabled:bg-zinc-100"
            type="text"
            name="fullName"
            required
          />
        </div>

        {/* Email */}
        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            disabled={loading}
            className="w-full border p-3 rounded-xl text-lg outline-none mt-1 disabled:bg-zinc-100"
            type="email"
            name="email"
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm font-medium">Phone Number</label>
          <input
            disabled={loading}
            className="w-full border p-3 rounded-xl text-lg outline-none mt-1 disabled:bg-zinc-100"
            type="number"
            name="phone"
        
            required
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>

        {/* PDF Upload */}
        <div>
          <label className="text-sm font-medium block mb-1">
            Upload Resume (PDF, max 5 MB)
          </label>

          <div
            className={`border-2 border-dashed p-6 rounded-xl text-center ${
              loading ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
            } ${isDragging ? "border-black bg-zinc-100" : "border-zinc-300"}`}
            onDragOver={(e) => {
              if (loading) return;
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              if (loading) return;
              e.preventDefault();
              setIsDragging(false);
              handleFileSelect(e.dataTransfer.files[0]);
            }}
            onClick={() =>
              !loading && document.getElementById("resumeInput").click()
            }
          >
            {pdfFile ? (
              <p className="font-medium">📄 {pdfFile.name}</p>
            ) : (
              <p className="text-zinc-500">
                Drag & drop your PDF here or{" "}
                <span className="text-black underline">browse</span>
              </p>
            )}
          </div>

          <input
            id="resumeInput"
            type="file"
            accept="application/pdf"
            disabled={loading}
            className="hidden"
            onChange={(e) => handleFileSelect(e.target.files[0])}
          />

          {fileError && (
            <p className="text-red-500 text-sm mt-2">{fileError}</p>
          )}
        </div>

        {/* Submit */}
        <button
          disabled={loading}
          className={`w-full py-4 rounded-xl text-lg text-white transition-all active:scale-95 cursor-pointer ${
            loading ? "bg-zinc-700 cursor-not-allowed" : "bg-black"
          }`}
        >
          {loading ? "Submitting..." : "Apply For Job →"}
        </button>
      </form>
    </>
  );
}
