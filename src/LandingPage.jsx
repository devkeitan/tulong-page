import { useState } from "react";
import {
  Download,
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
  version: "1.0.1",
  releaseStatus: "Android Beta",
  // Put your logo file in the /public folder and name it logo.png
  logo: "/logo.png",
  // Android: the direct .apk link from GitHub Release
  androidUrl:
    "https://github.com/devkeitan/tulong-page/releases/download/v1.0.1/tinambac-app.apk",
  // Web page for the release on GitHub (backup / mirror)
  releasePageUrl:
    "https://github.com/devkeitan/tulong-page/releases/tag/v1.0.1",
  androidReqs: "Android 7.0+",
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
              v{APP.version} • {APP.releaseStatus}
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
          {/* Subtle background ambient tint */}
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

            {/* Direct Heading */}
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-foreground text-balance max-w-3xl leading-[1.12]">
              {APP.tagline}
            </h1>

            {/* Subtitle */}
            <p className="mt-5 max-w-2xl text-base sm:text-xl text-muted-foreground leading-relaxed text-pretty">
              {APP.description}
            </p>

            {/* Android Exclusive Notice Badge */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
              <Smartphone className="h-3.5 w-3.5" />
              <span>Available for Android devices • iOS version in development</span>
            </div>

            {/* DOWNLOAD HUB */}
            <div
              id="download"
              className="mt-8 w-full max-w-xl rounded-2xl border border-border/80 bg-card p-4 sm:p-6 shadow-sm ring-1 ring-foreground/5 text-left"
            >
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div>
                  <h2 className="text-base font-semibold text-foreground">
                    Download {APP.name}
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Official Android release for residents of Tinambac, Camarines Sur
                  </p>
                </div>
                <span className="rounded-md bg-muted px-2 py-1 text-xs font-mono font-medium text-muted-foreground">
                  v{APP.version}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 space-y-3">
                {/* Android Primary Button */}
                <a
                  href={APP.androidUrl}
                  download="tinambac-app.apk"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-between rounded-xl bg-blue-600 px-4 py-3.5 text-white shadow-sm hover:bg-blue-700 active:scale-[0.99] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15 text-white">
                      <Download className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-sm font-semibold leading-tight truncate">
                        Download for Android
                      </span>
                      <span className="text-xs text-blue-100 font-medium leading-tight mt-0.5">
                        Direct .APK • {APP.androidReqs}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-white/70 group-hover:translate-x-0.5 transition-transform shrink-0" />
                </a>

                {/* Mirror / GitHub Release Backup Link */}
                <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-muted-foreground">
                  <span>Having difficulty with direct download?</span>
                  <a
                    href={APP.releasePageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <span>Download via GitHub Release page</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>

              {/* Share & Copy Link Strip */}
              <div className="mt-5 pt-3.5 border-t border-border/60 flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
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

        {/* FEATURES SECTION */}
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

        {/* STEP-BY-STEP INSTALLATION GUIDE (Android Focused) */}
        <section id="install-guide" className="py-16 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Android installation instructions
              </h2>
              <p className="mt-2 text-sm sm:text-base text-muted-foreground">
                Follow these 4 simple steps to install the Tulong-Tinambac APK on your Android smartphone.
              </p>
            </div>

            {/* Android Instructions Card */}
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
                      Compatible with Samsung, Xiaomi, Realme, Oppo, Vivo, Infinix, and other Android devices
                    </p>
                  </div>
                </div>
                <a
                  href={APP.androidUrl}
                  download="tinambac-app.apk"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
                >
                  <span>Download file</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>

              {/* Social / Messenger in-app browser notice */}
              <div className="mt-6 flex items-start gap-3 rounded-xl bg-amber-500/10 border border-amber-500/20 p-3.5 text-xs text-amber-800 dark:text-amber-300">
                <Info className="h-4 w-4 shrink-0 mt-0.5 text-amber-600 dark:text-amber-400" />
                <div className="space-y-1">
                  <p className="font-semibold">
                    Opening from Facebook or Messenger?
                  </p>
                  <p className="leading-relaxed text-amber-700 dark:text-amber-400">
                    Facebook and Messenger block direct file downloads. Tap the three dots (<strong>⋮</strong> or <strong>⋯</strong>) at the top right of your screen and select <strong>"Open in Chrome"</strong> or <strong>"Open in Browser"</strong> to download smoothly.
                  </p>
                </div>
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
                      Tap the <strong>Download for Android</strong> button to save the official installer file (<code className="font-mono text-xs bg-muted px-1.5 py-0.5 rounded">tinambac-app.apk</code>) to your device.
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
                      Once downloaded, tap the notification in your status bar or open your device’s <strong>Files</strong> or <strong>Downloads</strong> app and tap the file.
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
                      If Android shows an "Install unknown apps" or "Security" prompt, tap <strong>Settings</strong> and toggle <strong>Allow from this source</strong> for your browser or file manager.
                    </p>
                    <div className="mt-3 flex items-start gap-2 rounded-xl bg-muted/60 p-3 text-xs text-muted-foreground border border-border/50">
                      <Info className="h-4 w-4 shrink-0 text-blue-600 mt-0.5" />
                      <span>
                        <strong>Why this appears:</strong> This is a standard Android security prompt for all direct APK downloads outside the Google Play Store.
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
                      Tap <strong>Install</strong> to complete setup. When you first launch the app, grant Location and Notification permissions so municipal responders can pinpoint your location during an emergency.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EMERGENCY HOTLINE NOTICE */}
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
