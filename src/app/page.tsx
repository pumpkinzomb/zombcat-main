"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Github,
  Mail,
  ExternalLink,
  Sparkles,
  Brain,
  Code,
  Star,
  Palette,
} from "lucide-react";
import Image from "next/image";
import zombChatImg from "@/app/assets/zombChat.png";
import wrytaImg from "@/app/assets/wryta.png";
import momeImg from "@/app/assets/mome.png";
import multichainImg from "@/app/assets/multichain-parser.png";

export default function Home() {
  useEffect(() => {
    const getHeaderHeight = (): number => {
      const header = document.querySelector("nav") as HTMLElement | null;
      return header?.offsetHeight ?? 0;
    };

    const extraOffsetById: Record<string, number> = {
      projects: 0,
    };

    const scrollWithOffset = (hash: string, smooth: boolean = true) => {
      const id = hash.replace(/^#/, "");
      const el = document.getElementById(id);
      if (!el) return;
      const headerHeight = getHeaderHeight();
      const viewportOffsetTop = (window as any).visualViewport?.offsetTop ?? 0;
      const style = getComputedStyle(el);
      const paddingTop = parseFloat(style.getPropertyValue("padding-top")) || 0;
      const targetTop = Math.round(
        el.getBoundingClientRect().top +
          window.scrollY +
          viewportOffsetTop -
          headerHeight +
          paddingTop
      );
      const extra = extraOffsetById[id] ?? 0;
      const finalTop = targetTop + extra;
      const root = document.documentElement;
      const prevBehavior = root.style.scrollBehavior;

      if (!smooth) root.style.scrollBehavior = "auto";
      window.scrollTo({ top: finalTop, behavior: smooth ? "smooth" : "auto" });
      window.setTimeout(() => {
        window.scrollTo({ top: finalTop, behavior: "auto" });
        if (!smooth) root.style.scrollBehavior = prevBehavior;
      }, 400);
    };

    const onClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href") || "";
      if (!href.startsWith("#")) return;
      e.preventDefault();
      const newUrl = `${window.location.pathname}${window.location.search}${href}`;
      history.pushState(null, "", newUrl);
      scrollWithOffset(href, true);
    };

    const anchors = Array.from(
      document.querySelectorAll('nav a[href^="#"]')
    ) as HTMLAnchorElement[];
    anchors.forEach((a) => a.addEventListener("click", onClick));

    if (location.hash) {
      requestAnimationFrame(() => {
        scrollWithOffset(location.hash, false);
      });
    }

    const onHashChange = () => {
      if (location.hash) scrollWithOffset(location.hash, true);
    };
    window.addEventListener("hashchange", onHashChange);

    return () => {
      anchors.forEach((a) => a.removeEventListener("click", onClick));
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);
  return (
    <main className="min-h-screen relative">
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-rose-100/30 via-blue-100/30 to-violet-100/30" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
        <div className="container mx-auto px-6 py-2">
          <div className="flex justify-between items-center">
            <h1 className="text-sm font-bold text-slate-900">zombcat</h1>
            <div className="flex gap-1 text-sm">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 transition-colors duration-200 cursor-pointer"
              >
                <a href="#about">About</a>
              </Button>
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-slate-600 hover:text-slate-900 hover:bg-slate-100/60 transition-colors duration-200 cursor-pointer"
              >
                <a href="#projects">Projects</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="mt-20 sm:mt-0 min-h-screen flex items-center justify-center px-6 relative scroll-mt-16"
      >
        <div className="container mx-auto max-w-5xl text-center">
          <div className="mb-16">
            <div className="bg-white/80 border border-gray/30 inline-flex items-center gap-2 mb-8 px-4 py-2 bg-slate-100 rounded-full">
              <Sparkles className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">
                AI Engineer & Product Builder
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-8 text-slate-900 leading-tight tracking-tight">
              Hey, I'm zombcat.
            </h1>

            <p className="text-lg text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              I build playful, practical{" "}
              <span className="text-slate-900 font-semibold">AI products</span>{" "}
              that make technology feel simple—and useful every day.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="group p-6 rounded-xl bg-white/80 backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all duration-300 shadow-lg">
              <div className="w-12 h-12 mx-auto mb-5 bg-slate-900/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-slate-900">
                Applied AI
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Turn cutting‑edge research into products that solve real
                problems.
              </p>
            </div>

            <div className="group p-6 rounded-xl bg-white/80 backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all duration-300 shadow-lg">
              <div className="w-12 h-12 mx-auto mb-5 bg-slate-900/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-slate-900">
                Full-Stack, End-to-End
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                From idea to launch—frontend, backend, infra, and everything
                between.
              </p>
            </div>

            <div className="group p-6 rounded-xl bg-white/80 backdrop-blur-md border border-white/30 hover:bg-white/20 transition-all duration-300 shadow-lg">
              <div className="w-12 h-12 mx-auto mb-5 bg-slate-900/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-slate-900">
                Design that feels right
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Thoughtful UX and crisp visuals that make features feel
                effortless.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen flex items-center justify-center px-6 py-20 relative scroll-mt-16"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="bg-white/80 border border-gray/30 inline-flex items-center gap-2 mb-8 px-4 py-2 bg-slate-100 rounded-full">
              <Star className="w-4 h-4 text-slate-600" />
              <span className="text-sm font-medium text-slate-700">Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
              Selected Projects
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              A few things I’ve shipped recently.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {/* zombChat */}
            <Card className="group border border-white/30 bg-white/80 backdrop-blur-md hover:bg-white/30 transition-all duration-300 shadow-lg">
              <CardHeader className="pb-3">
                <div className="aspect-[5/3] w-full overflow-hidden rounded-lg border">
                  <Image
                    src={zombChatImg}
                    alt="Screenshot of zombChat, an AI character chat app"
                    className="h-full w-full object-cover"
                    placeholder="blur"
                  />
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-slate-900 font-semibold">
                      zombChat
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-sm mt-1">
                      AI character chat—immersive conversations with
                      intelligence and emotion.
                    </CardDescription>
                  </div>
                  <Button
                    size="sm"
                    className="bg-slate-900 hover:bg-slate-800 text-white rounded-full w-8 h-8 p-0 ml-3"
                    asChild
                  >
                    <a
                      href="https://chat.zombcat.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open zombChat in a new tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardHeader>
            </Card>

            {/* wryta */}
            <Card className="group border border-white/30 bg-white/80 backdrop-blur-md hover:bg-white/30 transition-all duration-300 shadow-lg">
              <CardHeader className="pb-3">
                <div className="aspect-[5/3] w-full overflow-hidden rounded-lg border">
                  <Image
                    src={wrytaImg}
                    alt="Screenshot of wryta, an AI writing workspace"
                    className="h-full w-full object-cover"
                    placeholder="blur"
                  />
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-slate-900 font-semibold">
                      wryta
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-sm mt-1">
                      AI writing workspace—continue your story in your own voice
                      with smart guidance.
                    </CardDescription>
                  </div>
                  <Button
                    size="sm"
                    className="bg-slate-900 hover:bg-slate-800 text-white rounded-full w-8 h-8 p-0 ml-3"
                    asChild
                  >
                    <a
                      href="https://wryta.zombcat.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open wryta in a new tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardHeader>
            </Card>

            {/* mome */}
            <Card className="group border border-white/30 bg-white/80 backdrop-blur-md hover:bg-white/30 transition-all duration-300 shadow-lg">
              <CardHeader className="pb-3">
                <div className="aspect-[5/3] w-full overflow-hidden rounded-lg border">
                  <Image
                    src={momeImg}
                    alt="Screenshot of mome, multichain analytics for the Cosmos ecosystem"
                    className="h-full w-full object-cover"
                    placeholder="blur"
                  />
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-slate-900 font-semibold">
                      mome
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-sm mt-1">
                      Multichain analytics for the Cosmos ecosystem.
                    </CardDescription>
                  </div>
                  <Button
                    size="sm"
                    className="bg-slate-900 hover:bg-slate-800 text-white rounded-full w-8 h-8 p-0 ml-3"
                    asChild
                  >
                    <a
                      href="https://mome.zombcat.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open mome in a new tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardHeader>
            </Card>

            {/* multichain parser */}
            <Card className="group border border-white/30 bg-white/80 backdrop-blur-md hover:bg-white/30 transition-all duration-300 shadow-lg">
              <CardHeader className="pb-3">
                <div className="aspect-[5/3] w-full overflow-hidden rounded-lg border">
                  <Image
                    src={multichainImg}
                    alt="Screenshot of a multichain transaction parser for Solana, Aptos, and more"
                    className="h-full w-full object-cover"
                    placeholder="blur"
                  />
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex-1">
                    <CardTitle className="text-lg text-slate-900 font-semibold">
                      multichain parser
                    </CardTitle>
                    <CardDescription className="text-slate-600 text-sm mt-1">
                      Transaction analytics across Solana, Aptos, and more.
                    </CardDescription>
                  </div>
                  <Button
                    size="sm"
                    className="bg-slate-900 hover:bg-slate-800 text-white rounded-full w-8 h-8 p-0 ml-3"
                    asChild
                  >
                    <a
                      href="https://multichain-tx-parser.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open multichain parser in a new tab"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/30 py-16 px-6 bg-white/10 backdrop-blur-md">
        <div className="container mx-auto max-w-4xl">
          <div className="py-8 text-center">
            <div className="flex justify-center items-center gap-6 mb-6">
              <a
                href="https://github.com/pumpkinzomb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900/20 hover:bg-slate-900/40 transition-colors duration-200"
                aria-label="Open GitHub profile in a new tab"
              >
                <Github className="w-5 h-5 text-slate-700" />
              </a>
              <a
                href="mailto:pumpkinzomb@gmail.com"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900/20 hover:bg-slate-900/40 transition-colors duration-200"
                aria-label="Send email to pumpkinzomb@gmail.com"
              >
                <Mail className="w-5 h-5 text-slate-700" />
              </a>
            </div>
            <p className="text-sm text-slate-500">
              © 2025 zombcat. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
