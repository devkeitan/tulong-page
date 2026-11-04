import { useState } from "react";
import {
  Download,
  Apple,
  Siren,
  ClipboardList,
  MapPin,
  ShieldCheck,
  PhoneCall,
  Check,
  Copy,
  ExternalLink,
  Info,
  Smartphone,
  ChevronRight,
  AlertTriangle,
  Radio,
} from "lucide-react";

// 1. EDIT THIS OBJECT ONLY: everything on the page reads from here.
const APP = {
  name: "Tulong-Tinambac",
  tagline: "Help is one tap away.",
  description:
    "Send an SOS and report incidents in your community quickly, so responders can act fast when it matters most.",
  version: "1.0.0",
  releaseStatus: "Beta",
  // Put your logo file in the /public folder and name it logo.png
  logo: "/logo.png",
  // Android: the direct .apk link from your EAS build (or a GitHub Release)
  androidUrl: "https://github.com/devkeitan/tulong-page/releases/download/v1.0.1/tinambac-app.apk",
  androidReqs: "Android 7.0+",
  // iOS: your TestFlight public link (delete or leave empty if you have none)
  iosUrl: "https://testflight.apple.com/join/XXXXXXXX",
  iosReqs: "iOS 15.0+",
  features: [
    {
      icon: Siren,
      tag: "Critical Priority",
      title: "Send an SOS",
      text: "Alert responders right away with your live GPS location when you or someone near you is in immediate danger.",
      accent: "text-red-600 bg-red-500/10 border-red-500/20",
    },
    {
      icon: ClipboardList,
      tag: "Quick Dispatch",
      title: "Report incidents",
      text: "Report road accidents, flooding, fires, or medical situations with photos and details so local units deploy prepared.",
      accent: "text-blue-600 bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: MapPin,
      tag: "Municipal Scope",
      title: "Made for Tinambac",
      text: "Directly connected to Tinambac MDRRMO, local police, and barangay emergency responders without middle-layer delays.",
      accent: "text-emerald-600 bg-emerald-500/10 border-emerald-500/20",
    },
  ],
  emergencyNotice: {
    title: "Need immediate emergency dispatch?",
    text: "If you or someone near you is facing an immediate life-threatening danger, call hotlines directly while launching the app.",
    hotlines: [
      { name: "Tinambac MDRRMO Rescue", number: "0961-000-0000" },
      { name: "PNP Tinambac Station", number: "0998-000-0000" },
      { name: "BFP Tinambac Fire", number: "0920-000-0000" },
    ],
  },
};

export default function LandingPage() {
  const [copied, setCopied] = useState(false);
  const [activePlatform, setActivePlatform] = useState("android");

  const handleCopyLink = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }
    } catch {
      // Fallback if clipboard API is unavailable
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      {/* NAVBAR */}
      <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/85 backdrop-blur-md transition-colors">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6 py-3.5">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-xl bg-white p-1 shadow-xs ring-1 ring-border/80 flex items-center justify-center shrink-0">
              <img
                src={APP.logo}
                alt={`${APP.name} logo`}
                className="h-full w-full object-contain rounded-lg"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-foreground leading-tight">
                {APP.name}
              </span>
              <span className="text-xs text-muted-foreground font-medium">
                Municipality of Tinambac
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-0.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
              v{APP.version} {APP.releaseStatus}
            </span>
            <a
              href="#install-guide"
              className="hidden sm:inline-flex text-xs font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5"
            >
              How to install
            </a>
            <a
              href="#download"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-3.5 py-2 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-blue-700 active:scale-[0.98] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            >
              Get the App
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="flex-1">
        <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24">
          {/* Subtle background ambient tint (no jarring gradient/glass) */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-24 -z-10 flex justify-center overflow-hidden opacity-30 blur-3xl"
          >
            <div className="h-[320px] w-[640px] bg-blue-400/25 rounded-full" />
          </div>

          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center flex flex-col items-center">
            {/* App Icon Presentation */}
            <div className="group relative mb-8">
              <div className="h-24 w-24 sm:h-28 sm:w-28 rounded-3xl bg-white p-3.5 shadow-xl ring-1 ring-border/80 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src={APP.logo}
                  alt={`${APP.name} app icon`}
                  className="h-full w-full object-contain rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 inline-flex items-center gap-1 rounded-full border border-border/80 bg-background/95 px-2 py-0.5 text-[11px] font-semibold text-foreground shadow-xs backdrop-blur-xs">
                <Radio className="h-3 w-3 text-emerald-500 animate-pulse" />
                <span>Live</span>
              </div>
            </div>

            {/* Direct Heading (no kicker/eyebrow above, respecting craft floor ban) */}
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground text-balance max-w-3xl leading-[1.12]">
              {APP.tagline}
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-2xl text-base sm:text-xl text-muted-foreground leading-relaxed text-pretty">
              {APP.description}
            </p>

            {/* DOWNLOAD HUB */}
            <div
              id="download"
              className="mt-10 w-full max-w-xl rounded-2xl border border-border/80 bg-card p-4 sm:p-6 shadow-sm ring-1 ring-foreground/5 text-left"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div>
                  <h2 className="text-base font-semibold text-foreground">
                    Download {APP.name}
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Official release for residents of Tinambac, Camarines Sur
                  </p>
                </div>
                <span className="rounded-md bg-muted px-2 py-1 text-xs font-mono font-medium text-muted-foreground">
                  v{APP.version}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {/* Android Button */}
                <a
                  href={APP.androidUrl}
                  className="group relative flex items-center gap-3.5 rounded-xl bg-blue-600 px-4 py-3.5 text-white shadow-sm hover:bg-blue-700 active:scale-[0.99] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white">
                    <Download className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-sm font-semibold leading-tight truncate">
                      Download Android
                    </span>
                    <span className="text-xs text-blue-100 font-medium leading-tight mt-0.5">
                      Direct .APK • {APP.androidReqs}
                    </span>
                  </div>
                </a>

                {/* iOS Button */}
                {APP.iosUrl && (
                  <a
                    href={APP.iosUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-3.5 rounded-xl border border-border bg-background px-4 py-3.5 text-foreground shadow-xs hover:bg-muted/70 active:scale-[0.99] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
                      <Apple className="h-5 w-5 transition-transform group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-semibold leading-tight truncate">
                        Get on iOS
                      </span>
                      <span className="text-xs text-muted-foreground font-medium leading-tight mt-0.5">
                        TestFlight • {APP.iosReqs}
                      </span>
                    </div>
                  </a>
                )}
              </div>

              {/* Share & Copy Link Strip */}
              <div className="mt-4 pt-3.5 border-t border-border/60 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  <span>Verified package • Free for all residents</span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="inline-flex items-center gap-1.5 font-medium text-foreground hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-600 rounded px-1.5 py-0.5"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                      <span className="text-emerald-600 font-semibold">Link copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Share download link</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES SECTION (Elevated structure with distinct visual weight) */}
        <section className="border-t border-border/60 bg-muted/30 py-16 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="max-w-2xl mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Built for rapid community response
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
                Engineered specifically for the Municipality of Tinambac to minimize dispatch delay when lives and property are on the line.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              {APP.features.map(({ icon: Icon, tag, title, text, accent }) => (
                <div
                  key={title}
                  className="relative flex flex-col justify-between rounded-2xl border border-border/80 bg-card p-6 shadow-xs hover:border-foreground/20 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border ${accent}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        {tag}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STEP-BY-STEP INSTALLATION GUIDE */}
        <section id="install-guide" className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Installation instructions
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                Quick steps to get Tulong-Tinambac running properly on your smartphone.
              </p>

              {/* Platform Switcher */}
              <div className="mt-6 inline-flex rounded-xl bg-muted p-1 border border-border/60">
                <button
                  type="button"
                  onClick={() => setActivePlatform("android")}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                    activePlatform === "android"
                      ? "bg-card text-foreground shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Smartphone className="h-4 w-4" />
                  Android Instructions
                </button>
                <button
                  type="button"
                  onClick={() => setActivePlatform("ios")}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs sm:text-sm font-semibold transition-all ${
                    activePlatform === "ios"
                      ? "bg-card text-foreground shadow-xs"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Apple className="h-4 w-4" />
                  iOS Instructions
                </button>
              </div>
            </div>

            {/* Android Instructions Card */}
            {activePlatform === "android" && (
              <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between pb-6 border-b border-border/60">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600">
                      <Smartphone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        Installing the Android APK
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Compatible with Samsung, Xiaomi, Realme, Oppo, Vivo, and other Android devices
                      </p>
                    </div>
                  </div>
                  <a
                    href={APP.androidUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
                  >
                    <span>Download file</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                <div className="mt-6 space-y-6">
                  <div className="flex gap-4 items-start">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      1
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        Download the APK file
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 leading-relaxed">
                        Tap the <strong>Download for Android</strong> button to save the official installer file to your device.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      2
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        Open the downloaded file
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 leading-relaxed">
                        Once downloaded, tap the notification in your status bar or find the file in your <strong>Downloads</strong> folder.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      3
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        Allow installation from browser (if prompted)
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 leading-relaxed">
                        If Android shows an "Install unknown apps" security prompt, tap <strong>Settings</strong> and toggle <strong>Allow from this source</strong> for your browser.
                      </p>
                      <div className="mt-3 flex items-start gap-2 rounded-xl bg-muted/60 p-3 text-xs text-muted-foreground border border-border/50">
                        <Info className="h-4 w-4 shrink-0 text-blue-600 mt-0.5" />
                        <span>
                          <strong>Why this appears:</strong> This is a standard Android safety check for apps distributed directly outside Google Play.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      4
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        Tap Install and grant location permission
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 leading-relaxed">
                        Tap <strong>Install</strong> to finish. When opening the app, allow Location access so responders can locate you in emergencies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* iOS Instructions Card */}
            {activePlatform === "ios" && (
              <div className="rounded-2xl border border-border/80 bg-card p-6 sm:p-8 shadow-xs">
                <div className="flex items-center justify-between pb-6 border-b border-border/60">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-500/10 text-foreground">
                      <Apple className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        Installing on iOS via Apple TestFlight
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        Compatible with iPhone running {APP.iosReqs}
                      </p>
                    </div>
                  </div>
                  {APP.iosUrl && (
                    <a
                      href={APP.iosUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
                    >
                      <span>Join TestFlight</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>

                <div className="mt-6 space-y-6">
                  <div className="flex gap-4 items-start">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                      1
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        Install Apple TestFlight
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 leading-relaxed">
                        Open the App Store on your iPhone and install Apple’s free official <strong>TestFlight</strong> app.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                      2
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        Accept the invitation
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 leading-relaxed">
                        Tap the <strong>Get on iOS</strong> button on this page. Your invitation to join {APP.name} will open automatically in TestFlight.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-foreground text-xs font-bold text-background">
                      3
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        Install and Launch
                      </h4>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 leading-relaxed">
                        Tap <strong>Accept</strong>, then tap <strong>Install</strong>. Allow location and notification permissions to receive emergency alerts.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* EMERGENCY HOTLINE NOTICE (Authoritative & Reassuring) */}
        <section className="border-t border-border/60 bg-muted/20 py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="rounded-2xl border border-red-500/25 bg-red-500/5 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-red-500/15">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/15 text-red-600">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">
                      {APP.emergencyNotice.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {APP.emergencyNotice.text}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1 rounded-md bg-red-500/15 px-2.5 py-1 text-xs font-semibold text-red-600">
                  <AlertTriangle className="h-3.5 w-3.5" />
                  Emergency Hotlines
                </span>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {APP.emergencyNotice.hotlines.map(({ name, number }) => (
                  <a
                    key={name}
                    href={`tel:${number}`}
                    className="flex flex-col rounded-xl border border-border/80 bg-background/80 p-3.5 transition-all hover:border-red-500/40 hover:bg-background"
                  >
                    <span className="text-xs text-muted-foreground font-medium truncate">
                      {name}
                    </span>
                    <span className="mt-1 font-mono text-sm font-bold text-foreground flex items-center justify-between">
                      {number}
                      <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-border/70 py-8 bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <img
              src={APP.logo}
              alt={APP.name}
              className="h-5 w-5 rounded object-contain"
            />
            <span>
              © {new Date().getFullYear()} {APP.name} • Municipality of Tinambac, Camarines Sur
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#download"
              className="hover:text-foreground transition-colors"
            >
              Download
            </a>
            <a
              href="#install-guide"
              className="hover:text-foreground transition-colors"
            >
              Instructions
            </a>
            <button
              type="button"
              onClick={handleCopyLink}
              className="hover:text-foreground transition-colors"
            >
              Share App
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
