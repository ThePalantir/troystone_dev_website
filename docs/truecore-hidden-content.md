# TrueCore hidden-content inventory

This inventory records the TrueCore presentation on `main` immediately before it was hidden. Exactly **4 public presentation elements** were found. Supporting `.truecore-*` CSS selectors and `public/truecore-logo.png` are preserved but are not counted as separate presentation elements because they do not render independently.

The centralized setting is `featureFlags.showTrueCore` in `data/siteConfig.ts`. It is currently `false`. Set it to `true` to restore all four elements in their original locations and visual treatments.

## 1. Desktop header call to action

- **File:** `components/Header.tsx`
- **Section/location:** Fixed site header, desktop header actions, after the theme toggle.
- **Exact visible text:** `Connect with Troy and Jesse` on the first line; `at TrueCore` on the second line, with the TrueCore logo before `TrueCore` and an external-link arrow after it.
- **Destination URL:** `https://truecore.services/`
- **Presentation:** External anchor with class `nav-cta`, opened in a new tab. Its content is a centered, two-line `truecore-desktop-cta`; the name/logo group uses `truecore-name` and `truecore-logo`.
- **Restoration context:** It is the rightmost desktop header action beside the `Change theme` control. The primary navigation immediately before it contains `Experience`, `Point of view`, `Systems`, and `Glossary`.

## 2. Mobile navigation call to action

- **File:** `components/Header.tsx`
- **Section/location:** Last item in the expandable mobile navigation.
- **Exact visible text:** `Connect with Troy and Jesse at TrueCore`, with the TrueCore logo before `TrueCore` and an external-link arrow after the label.
- **Destination URL:** `https://truecore.services/`
- **Presentation:** External anchor opened in a new tab. It closes the mobile menu when selected. The label uses `truecore-cta-copy`; the name/logo group uses `truecore-name` and `truecore-logo`.
- **Restoration context:** It follows the same four navigation links: `Experience`, `Point of view`, `Systems`, and `Glossary`.

## 3. Contact-section call to action

- **File:** `app/page.tsx`
- **Section/location:** Homepage contact section (`#contact`), after the introductory paragraph.
- **Exact visible text:** `Connect with Troy and Jesse at TrueCore`, with the TrueCore logo before `TrueCore` and an external-link arrow after the label.
- **Destination URL:** `https://truecore.services/`
- **Presentation:** Primary button-style external anchor with classes `button button-primary contact-button`, opened in a new tab. The label uses `truecore-cta-copy`; the name/logo group uses `truecore-name` and `truecore-logo`.
- **Restoration context:** Eyebrow: `Complex systems. Meaningful outcomes.` Heading: `Let's turn complexity into clarity.` Supporting copy: `If you're modernizing a critical system, connecting AI to operations, or working through a consequential technology decision, I'd welcome the conversation.`

## 4. Footer builder attribution

- **File:** `components/SiteFooter.tsx`
- **Section/location:** Footer links group, immediately before the LinkedIn icon link.
- **Exact visible text:** `Built by truecore.services`, with the TrueCore logo before `truecore.services`.
- **Destination URL:** `https://truecore.services/` (the `truecore.services` portion is linked; `Built by` is not).
- **Presentation:** Inline `built-by` attribution. The external anchor uses `truecore-link`, opens in a new tab, and retains the amber styling and logo treatment.
- **Restoration context:** The center footer copy is `Enterprise architecture · Technology leadership · Accountable AI`. The attribution is followed by the circular LinkedIn icon link.

## Hidden-state substitutions

With `showTrueCore: false`, the desktop header, mobile navigation, and contact section retain their CTA positions but show `Connect with Troy on LinkedIn` and point to the existing site destination `https://www.linkedin.com/in/troystone`. The footer TrueCore builder attribution is hidden with no replacement because presenting LinkedIn as a builder credit would be misleading; the pre-existing LinkedIn footer icon remains visible.
