import Breadcrumb from "@/components/Breadcrumb";
import React from "react";
import { FaInstagram, FaWhatsapp, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { FiMail } from "react-icons/fi";
import Link from "next/link";
import FAQ from "@/components/DigitalSolutions/Common/Faq";
import { ContactUs } from "@/Data/FaqData";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/contact/ContactForm";




const Page = () => {
  return (
    <>
      {/* Hero */}
      <Breadcrumb
        paths={[
          { name: "Home", href: "/" },
          { name: "Contact Us", href: "/contact" },
        ]}
        title="Build Your Next Breakthrough Solution"
        description="Collaborate with a team that turns innovative ideas into real business ROI."
        buttonText="Discover Our Work"
        buttonLink="/casestudies"
      />

      {/* CONTACT CONTENT */}
      <section>
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-6 lg:gap-12">

            {/* LEFT COLUMN */}
            <div className="flex flex-col justify-between space-y-10 pt-10 md:pt-5">

              {/* Intro */}
              <div>
                <h2 className="mb-5 text-3xl md:text-5xl font-semibold">
                  Contact Us
                </h2>

                <div className="flex flex-col gap-10 md:flex-row md:gap-10 lg:flex-col">

                  {/* Desktop message */}
                  <div className="hidden lg:block">
                    <h4 className="text-xl font-semibold mb-2">
                      Let’s Talk About What You’re Building
                    </h4>
                    <p className="text-zinc-600 leading-relaxed">
                      Every conversation starts with understanding your goals.

                    </p>
                  </div>

                  {/* Email */}
                  <InfoRow
                    icon={<IoIosMail />}
                    title="Chat with us"
                    subtitle="Our friendly team is here to help."
                    value="info@triospheretech.com"
                  />

                  {/* Address */}
                  <InfoRow
                    icon={<FaLocationDot />}
                    title="Visit us"
                    subtitle="Come say hello at our office."
                    value={
                      <>
                        1205, Phoenix, Vijay Cross Road to<br />
                        Commerce Six Road,<br />
                        Ahmedabad, Gujarat – 380009
                      </>
                    }
                  />

                  {/* Phone */}
                  <InfoRow
                    icon={<MdCall />}
                    title="Call us"
                    subtitle="Mon – Fri from 10 AM to 7 PM."
                    value="+91 83203 - 33166"
                  />
                </div>
              </div>

              {/* Social */}
              <div className="flex justify-center gap-5 bg-zinc-100 rounded-xl p-3">
                <SocialLink href="https://www.instagram.com/triospheretech/" icon={<FaInstagram />} />
                <SocialLink href="https://www.linkedin.com/company/triospheretech/" icon={<FaLinkedinIn />} />
                <SocialLink href="https://wa.me/918320333166" icon={<FaWhatsapp />} />
                <SocialLink href="mailto:info@triospheretech.com" icon={<FiMail />} />
              </div>
            </div>

            {/* RIGHT COLUMN – FORM */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl bg-[#f5f5f5] p-6 sm:p-8 lg:p-10">

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight">
                  Got ideas? <br /> We’ve got the skills.
                </h3>

                <p className="mt-4 text-zinc-600">
                  Tell us more about yourself and what you're looking to build.
                </p>

               <ContactForm />
              </div>
            </div>
          </div>
        </Container>

          {/* FAQ */}
          <div className="mt-10">
            <FAQ title="Frequently Asked Questions" faqs={ContactUs} />
          </div>
      </section>
    </>
  );
};

export default Page;
const InfoRow = ({ icon, title, subtitle, value }) => (
  <div className="flex items-start gap-4">
    <div className="w-14 h-14 bg-zinc-100 rounded-full border flex items-center justify-center">
      {React.cloneElement(icon, { className: "text-3xl text-zinc-700" })}
    </div>
    <div>
      <h3 className="text-2xl font-semibold mb-1">{title}</h3>
      <p className="text-sm text-zinc-500">{subtitle}</p>
      <p className="mt-1 text-sm text-zinc-800">{value}</p>
    </div>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <Link href={href} target="_blank" className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
    {React.cloneElement(icon, { className: "text-2xl text-zinc-700" })}
  </Link>
);

const Input = ({ label, placeholder }) => (
  <div>
    <label className="block text-md font-semibold text-zinc-700 mb-1">{label}</label>
    <input
      className="w-full bg-transparent border-b border-zinc-400 py-2 focus:outline-none"
      placeholder={placeholder}
    />
  </div>
);

const Textarea = ({ label }) => (
  <div>
    <label className="block text-md font-semibold text-zinc-700 mb-1">{label}</label>
    <textarea
      rows={3}
      className="w-full bg-transparent border-b border-zinc-400 py-2 resize-none focus:outline-none"
    />
  </div>
);
