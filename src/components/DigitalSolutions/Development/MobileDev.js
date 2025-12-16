import React from "react";
import { FaAndroid, FaApple, FaReact } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import Container from "@/components/ui/Container";

const MobileDev = () => {
  return (
    <section className="mt-1">
      <Container>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">

          {/* LEFT CONTENT */}
          <div className="flex-1 text-left lg:text-left">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-zinc-900 leading-tight">
              Complete Mobile App Development Solutions To Improve Your Business
            </h3>

            <div className="mt-6 space-y-5 text-zinc-900 text-base md:text-lg leading-relaxed">
              <p>
                Our Android app developers are experts in Java and Kotlin and use
                Android Studio, Gradle, and Firebase for mobile app development
                and deployment. From robust back-end integrations to optimized
                front-end experiences we create fully featured Android apps.
              </p>

              <p>
                We specialize in Swift and Objective-C to create high-quality iOS
                apps. Using Xcode, CocoaPods, and CoreData, we deliver secure
                applications designed for the Apple ecosystem and fulfill App
                Store guidelines with top-notch user experiences.
              </p>

              <p>
                Using Flutter and Dart, our team delivers apps that run smoothly
                on both iOS and Android. We use Flutter SDK and Firebase for the
                backend to create highly responsive and visually attractive apps
                with consistent user experience across platforms.
              </p>

              <p>
                With React Native, we build advanced apps for Android and iOS
                from a single codebase. By using libraries like Redux, Axios, and
                React Navigation, we deliver apps that provide native-like
                performance and responsiveness.
              </p>

              <p>
                We use frameworks like Flutter and React Native to deliver
                best-in-class cross-platform mobile app development services so
                you get applications tailored precisely to your requirements.
              </p>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div
            className="
              flex flex-col gap-6
              md:flex-row md:justify-center
              lg:flex-col lg:justify-start
              lg:w-[360px]
            "
          >
            {/* Native Apps */}
            <div>
              <div className="rounded-t-xl w-fit bg-blue-600 px-5 py-2 text-md font-bold text-white">
                Native Apps
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-bl-xl rounded-br-xl rounded-tr-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="rounded-full bg-green-100 p-2.5">
                    <FaAndroid className="text-xl text-green-600" />
                  </div>
                  <span className="text-md font-semibold text-zinc-800">
                    Android App Development
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="rounded-full bg-zinc-100 p-2.5">
                    <FaApple className="text-xl text-zinc-800" />
                  </div>
                  <span className="text-md font-semibold text-zinc-800">
                    iOS App Development
                  </span>
                </div>
              </div>
            </div>

            {/* Cross Platform */}
            <div>
              <div className="rounded-t-xl w-fit bg-blue-600 px-5 py-2 text-md font-bold text-white">
                Cross-Platform
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-bl-xl rounded-br-xl rounded-tr-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="rounded-full bg-blue-100 p-2.5">
                    <FaReact className="text-xl text-blue-500" />
                  </div>
                  <span className="text-md font-semibold text-zinc-800">
                    React Native App Development
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white p-4 shadow-sm transition hover:shadow-md">
                  <div className="rounded-full bg-blue-100 p-2.5">
                    <SiFlutter className="text-xl text-blue-400" />
                  </div>
                  <span className="text-md font-semibold text-zinc-800">
                    Flutter App Development
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

export default MobileDev;
