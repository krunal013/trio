"use client";

import { useState } from "react";

export default function ApplyJobForm({ job }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fileError, setFileError] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const SANITY_PROJECT_ID = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const SANITY_DATASET = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const SANITY_TOKEN = process.env.NEXT_PUBLIC_SANITY_WRITE_TOKEN;

  // FILE VALIDATION
  const handleFileSelect = (file) => {
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

  async function handleSubmit(e) {
    e.preventDefault();

    if (!pdfFile) {
      setFileError("Please upload a PDF file first.");
      return;
    }

    setLoading(true);

    try {
      // -------------------------------------------------------
      // 1️⃣  Upload PDF to Sanity
      // -------------------------------------------------------
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

      // -------------------------------------------------------
      // 2️⃣  Create jobApplication document in Sanity
      // -------------------------------------------------------
      const mutation = {
        mutations: [
          {
            create: {
              _type: "jobApplication",
              fullName: e.target.fullName.value,
              email: e.target.email.value,
              phone: e.target.phone.value,
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
      e.target.reset();
    } catch (err) {
      console.error("Job Apply Error:", err);
    }

    setLoading(false);
  }

  return (
    <>
      {success && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-[9999]">
          <div className="bg-white p-8 rounded-2xl  w-80 text-center">
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
        {/* Inputs */}
        <div>
          <label className="text-sm font-medium">Full Name</label>
          <input
            className="w-full border p-3 rounded-xl text-lg outline-none mt-1"
            type="text"
            name="fullName"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">Email</label>
          <input
            className="w-full border p-3 rounded-xl text-lg outline-none mt-1"
            type="email"
            name="email"
            required
          />
        </div>

        <div>
          <label className="text-sm font-medium">Phone Number</label>
          <input
            className="w-full border p-3 rounded-xl text-lg outline-none mt-1"
            type="text"
            name="phone"
            required
          />
        </div>

        {/* PDF Upload */}
        <div>
          <label className="text-sm font-medium block mb-1">
            Upload Resume (PDF, max 5 MB)
          </label>

          <div
            className={`border-2 border-dashed p-6 rounded-xl text-center cursor-pointer ${
              isDragging ? "border-black bg-zinc-100" : "border-zinc-300"
            }`}
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              handleFileSelect(e.dataTransfer.files[0]);
            }}
            onClick={() => document.getElementById("resumeInput").click()}
          >
            {pdfFile ? (
              <p className="font-medium text-black">
                📄 {pdfFile.name}
              </p>
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
          className={`w-full py-4 rounded-xl text-lg text-white ${
            loading ? "bg-zinc-700" : "bg-black"
          }`}
        >
          {loading ? "Submitting..." : "Apply For Job →"}
        </button>
      </form>
    </>
  );
}
