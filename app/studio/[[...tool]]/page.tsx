'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '../../../sanity.config';

// Inject Fowcon-branded styles into the embedded Sanity Studio.
// Targets the Publish button (data-tone="positive") and the primary action
// button (data-tone="primary") to match the site's CTA button style.
const studioStyles = `
  /* ── Publish button ── */
  [data-ui="Button"][data-tone="positive"] {
    background-color: #193F75 !important;
    border-color: #193F75 !important;
    border-radius: 6px !important;
    min-height: 48px !important;
    padding-left: 28px !important;
    padding-right: 28px !important;
    transition: background-color 0.2s ease !important;
    box-shadow: 0 2px 8px rgba(25, 63, 117, 0.35) !important;
  }
  [data-ui="Button"][data-tone="positive"]:hover {
    background-color: #0f2850 !important;
    border-color: #0f2850 !important;
  }
  [data-ui="Button"][data-tone="positive"] [data-ui="Text"] {
    color: #ffffff !important;
    font-weight: 700 !important;
    font-size: 15px !important;
    letter-spacing: 0.01em !important;
  }

  /* ── Primary action buttons (e.g. Save, Create) ── */
  [data-ui="Button"][data-tone="primary"] {
    background-color: #193F75 !important;
    border-color: #193F75 !important;
    border-radius: 6px !important;
  }
  [data-ui="Button"][data-tone="primary"]:hover {
    background-color: #0f2850 !important;
    border-color: #0f2850 !important;
  }
  [data-ui="Button"][data-tone="primary"] [data-ui="Text"] {
    color: #ffffff !important;
    font-weight: 600 !important;
  }
`;

export default function StudioPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: studioStyles }} />
      <NextStudio config={config} />
    </>
  );
}
