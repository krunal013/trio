import React from "react";
import { MdShoppingCart } from "react-icons/md";
import { FaStore, FaCreditCard } from "react-icons/fa";
import { RiShieldCheckLine } from "react-icons/ri";
import { AiOutlineLineChart } from "react-icons/ai";
import Container from "@/components/ui/Container";

const EcommerceDev = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

          {/* LEFT CONTENT */}
          <div className="flex-1 text-left lg:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
              Complete E-commerce Development Solutions To Improve Your Business
            </h3>

            <div className="mt-4 space-y-5 text-zinc-900 text-left text-base md:text-lg leading-relaxed">
              <p>
                We build powerful online stores on platforms like Shopify,
                Magento, and WooCommerce—customized to match your brand and
                optimized for conversions. From catalog setup to inventory
                management, we create stores that scale.
              </p>

              <p>
                Our headless and PWA storefront solutions deliver fast, app-like
                shopping experiences across devices using modern frameworks and
                CDN-driven architectures.
              </p>

              <p>
                We integrate secure payment gateways and PCI-compliant checkout
                flows with subscriptions and multi-currency support to ensure
                frictionless global transactions.
              </p>

              <p>
                Back-end integrations with ERPs, CRMs, shipping providers, and
                custom APIs keep your operations synchronized and automated.
              </p>

              <p>
                Our e-commerce solutions emphasize performance, security, and
                SEO through optimization, hardening, caching strategies, and
                structured data.
              </p>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="lg:w-[360px] flex flex-col gap-6 mt-4 lg:mt-0">
            <div>
              <div className="rounded-t-xl w-fit bg-blue-600 px-5 py-2 text-md font-bold text-white">
                Our E-commerce Dev Features
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-bl-xl rounded-br-xl rounded-tr-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="rounded-full bg-blue-100 p-2.5">
                    <MdShoppingCart className="text-xl text-blue-600" />
                  </div>
                  <span className="font-semibold text-zinc-800">
                    Storefront & Catalog Management
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="rounded-full bg-blue-100 p-2.5">
                    <FaStore className="text-xl text-blue-800" />
                  </div>
                  <span className="font-semibold text-zinc-800">
                    Headless & PWA Storefronts
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="rounded-full bg-blue-100 p-2.5">
                    <FaCreditCard className="text-xl text-blue-800" />
                  </div>
                  <span className="font-semibold text-zinc-800">
                    Secure Payment & Checkout Integrations
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="rounded-full bg-blue-100 p-2.5">
                    <RiShieldCheckLine className="text-xl text-blue-800" />
                  </div>
                  <span className="font-semibold text-zinc-800">
                    Security & Compliance (PCI, GDPR)
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="rounded-full bg-blue-100 p-2.5">
                    <AiOutlineLineChart className="text-xl text-blue-800" />
                  </div>
                  <span className="font-semibold text-zinc-800">
                    Analytics & Conversion Optimization
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default EcommerceDev;
