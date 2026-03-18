
import { useEffect, useMemo, useRef } from "react";

export const LiveDemo = () => {
  const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? "";
  const demoTenantId = (import.meta.env.VITE_DEMO_TENANT_ID as string | undefined) ?? "";

  const apiBaseUrlNoSlash = useMemo(() => apiBaseUrl.replace(/\/$/, ""), [apiBaseUrl]);
  const scriptTagId = "rozpravai-demo-embed-script";
  const embedRootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!apiBaseUrlNoSlash || !demoTenantId) {
      return;
    }

    // Some versions of embed.js assume Node's `process` global.
    // The widget runs in the browser, so we polyfill it to avoid: "process is not defined".
    if (typeof window !== "undefined") {
      const w = window as unknown as { process?: { env?: Record<string, string> } };
      if (!w.process) {
        w.process = { env: { NODE_ENV: "production" } };
      } else if (!w.process.env) {
        w.process.env = { NODE_ENV: "production" };
      }
    }

    const expectedSrc = `${apiBaseUrlNoSlash}/static/embed.js`;
    const existing = document.getElementById(scriptTagId) as HTMLScriptElement | null;

    // Only keep the existing script tag if it matches current env.
    if (existing) {
      const existingSrc = existing.getAttribute("src") ?? "";
      const existingTenant = existing.getAttribute("data-tenant-id") ?? "";
      if (existingSrc === expectedSrc && existingTenant === demoTenantId) {
        return; // prevents duplicate injections on rerenders
      }
      existing.remove();
    }

    const script = document.createElement("script");
    script.id = scriptTagId;
    script.src = expectedSrc;
    script.async = true;
    script.setAttribute("data-tenant-id", demoTenantId);
    script.setAttribute("data-title", "Demo");

    // Append next to our container when possible (some embed scripts mount relative to the script's parent).
    if (embedRootRef.current) {
      embedRootRef.current.appendChild(script);
    } else {
      document.body.appendChild(script);
    }
  }, [apiBaseUrlNoSlash, demoTenantId]);

  useEffect(() => {
    const openWidget = () => {
      const focusInput = () => {
        const input =
          (document.querySelector<HTMLInputElement>(".rozpravaj-input") ||
            document.querySelector<HTMLInputElement>('input[placeholder], input[type="text"], textarea')) ??
          null;
        (input as HTMLInputElement | HTMLTextAreaElement | null)?.focus?.();
      };

      const tryOpen = (attempt: number) => {
        // If panel already mounted, just focus input.
        if (document.querySelector(".rozpravaj-panel")) {
          focusInput();
          return;
        }

        const btn = document.querySelector<HTMLButtonElement>("button.rozpravaj-btn");
        if (btn) {
          btn.click(); // widget toggles panel on/off
          window.setTimeout(() => focusInput(), 50);
          return;
        }

        if (attempt < 25) {
          window.setTimeout(() => tryOpen(attempt + 1), 250);
        }
      };

      tryOpen(0);
    };

    // Expose for Hero.
    (window as unknown as { rozpravaiOpenDemoWidget?: () => void }).rozpravaiOpenDemoWidget = openWidget;

    const onOpenRequest = () => {
      openWidget();
    };

    window.addEventListener("rozpravai-open-demo-widget", onOpenRequest);

    const w = window as unknown as { rozpravaiOpenDemoRequested?: boolean };
    if (w.rozpravaiOpenDemoRequested) {
      w.rozpravaiOpenDemoRequested = false;
      openWidget();
    }

    return () => {
      window.removeEventListener("rozpravai-open-demo-widget", onOpenRequest);
    };
  }, []);

  return (
    <section id="demo" className="py-6 px-4">
      {/* Widget script is injected into this container by the effect above. */}
      <div ref={embedRootRef} className="min-h-[1px]" />
    </section>
  );
};
