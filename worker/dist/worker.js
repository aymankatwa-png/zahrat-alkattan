var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/email.js
var EMAIL_SUBJECT = "\u0634\u0643\u0631\u0627\u064B \u0644\u0645\u0634\u0627\u0631\u0643\u062A\u0643 \u{1F338}";
var EMAIL_HTML = '<!doctype html>\n<html lang="ar" dir="rtl">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<meta name="color-scheme" content="light">\n<title>\u0634\u0643\u0631\u0627\u064B \u0644\u0645\u0634\u0627\u0631\u0643\u062A\u0643</title>\n</head>\n<body dir="rtl" style="margin:0;padding:0;background:#F3ECF8;direction:rtl;">\n<div style="display:none;max-height:0;overflow:hidden;opacity:0;">\u0632\u0647\u0631\u062A\u0643 \u0631\u0642\u0645 {{FLOWER_NO}} \u062A\u0641\u062A\u0651\u062D\u062A \u0641\u064A \u062D\u062F\u064A\u0642\u0629 \u0645\u0645\u0643\u0646. \u0634\u0643\u0631\u0627\u064B \u0644\u0623\u0646\u0643 \u062E\u0635\u0635\u062A\u064A \u0648\u0642\u062A \u0644\u0635\u062D\u062A\u0643.</div>\n<table dir="rtl" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#F3ECF8;">\n<tr><td align="center" style="padding:24px 12px;">\n  <table dir="rtl" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background:#FFFFFF;border-radius:20px;overflow:hidden;">\n    <tr><td style="background:#EDE6FB;padding:28px 28px 0;text-align:center;">\n      <img src="{{SITE_URL}}/assets/email-logo.png" width="120" alt="\u0645\u0646\u0638\u0645\u0629 \u0645\u0645\u0643\u0646" style="display:block;margin:0 auto 18px;border:0;">\n      <p style="margin:0;font:600 14px/1.6 Tahoma,Arial,sans-serif;color:#E2669A;">\u0623\u0643\u062A\u0648\u0628\u0631 \xB7 \u0634\u0647\u0631 \u0627\u0644\u062A\u0648\u0639\u064A\u0629 \u0628\u0633\u0631\u0637\u0627\u0646 \u0627\u0644\u062B\u062F\u064A</p>\n      <h1 style="margin:6px 0 4px;font:700 34px/1.3 Tahoma,Arial,sans-serif;color:#2A2160;">\u0634\u0643\u0631\u0627\u064B \u064A\u0627 {{NAME}}</h1>\n      <p style="margin:0 0 14px;font:400 15px/1.7 Tahoma,Arial,sans-serif;color:#635A8C;">\u0632\u0647\u0631\u062A\u0643 \u0631\u0642\u0645 <b style="color:#5B4BE0;">{{FLOWER_NO}}</b> \u062A\u0641\u062A\u0651\u062D\u062A \u0641\u064A \u062D\u062F\u064A\u0642\u0629 \u0645\u0645\u0643\u0646</p>\n      <img src="{{SITE_URL}}/assets/email-flax.png" width="200" alt="" style="display:block;margin:0 auto;border:0;max-width:60%;height:auto;">\n    </td></tr>\n    <tr><td style="padding:28px 30px 8px;font:400 16px/2 Tahoma,Arial,sans-serif;color:#2A2160;text-align:right;">\n      <p style="margin:0 0 14px;">\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064A\u0643\u0645\u060C</p>\n      <p style="margin:0 0 14px;">\u0623\u0647\u0644\u0627\u064B \u0628\u0643\u0650.. \u0641\u064A \u0643\u0644 \u0639\u0627\u0645\u060C \u064A\u0623\u062A\u064A \u0634\u0647\u0631 \u0623\u0643\u062A\u0648\u0628\u0631 \u0644\u064A\u062D\u0645\u0644 \u0644\u0646\u0627 \u062A\u0630\u0643\u064A\u0631\u0627\u064B \u062F\u0627\u0641\u0626\u0627\u064B \u0628\u0623\u0646 \u0627\u0644\u0627\u0647\u062A\u0645\u0627\u0645 \u0628\u0635\u062D\u062A\u0643\u0650 \u0644\u064A\u0633 \u0645\u062C\u0631\u062F \u062E\u064A\u0627\u0631 \u062B\u0627\u0646\u0648\u064A \u0623\u0648 \u0645\u0648\u0639\u062F \u064A\u064F\u0624\u062C\u0644 \u0644\u0640 "\u0628\u0639\u062F\u064A\u0646"\u060C \u0628\u0644 \u0647\u0648 \u0623\u0635\u062F\u0642 \u0648\u0623\u0631\u0642\u0649 \u062E\u0637\u0648\u0629 \u062D\u0628 \u0648\u0623\u0645\u0627\u0646 \u062A\u0642\u062F\u0645\u064A\u0646\u0647\u0627 \u0644\u0646\u0641\u0633\u0643\u0650 \u0648\u0644\u0643\u0644 \u0645\u0646 \u064A\u062D\u0628 \u0648\u062C\u0648\u062F\u0643\u0650 \u0628\u064A\u0646\u0647\u0645. \u0627\u0644\u0648\u0639\u064A \u0627\u0644\u062D\u0642\u064A\u0642\u064A \u064A\u0628\u062F\u0623 \u062F\u0627\u0626\u0645\u0627\u064B \u0645\u0646 \u0627\u0644\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0635\u062D\u064A\u062D\u0629\u060C \u0648\u0627\u0644\u0627\u0637\u0645\u0626\u0646\u0627\u0646 \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u060C \u0648\u0627\u0644\u062E\u0637\u0648\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0648\u0627\u0639\u064A\u0629.</p>\n      <p style="margin:0 0 14px;">\u0648\u062F\u0627\u0626\u0645\u0627\u064B \u0645\u0627 \u062A\u0628\u062F\u0623 \u0631\u062D\u0644\u0629 \u0627\u0644\u0627\u0637\u0645\u0626\u0646\u0627\u0646 \u0628\u0641\u0647\u0645 \u0645\u0627 \u064A\u062F\u0648\u0631 \u0641\u064A \u0623\u062C\u0633\u0627\u062F\u0646\u0627\u061B \u0641\u0627\u0644\u0643\u062A\u0644 \u0641\u064A \u0628\u062F\u0627\u064A\u0627\u062A\u0647\u0627 \u0646\u0627\u062F\u0631\u0627\u064B \u0645\u0627 \u062A\u0633\u0628\u0628 \u0623\u064A \u0623\u0644\u0645\u060C \u0648\u063A\u064A\u0627\u0628 \u0627\u0644\u0648\u062C\u0639 \u0644\u0627 \u064A\u0639\u0646\u064A \u0623\u0628\u062F\u0627\u064B \u063A\u064A\u0627\u0628 \u0627\u0644\u062D\u0627\u062C\u0629 \u0644\u0644\u0641\u062D\u0635\u060C \u062A\u0645\u0627\u0645\u0627\u064B \u0643\u0645\u0627 \u0623\u0646 \u0623\u063A\u0644\u0628 \u0627\u0644\u062D\u0627\u0644\u0627\u062A \u062A\u0628\u062F\u0623 \u062F\u0648\u0646 \u0623\u0639\u0631\u0627\u0636 \u0648\u0627\u0636\u062D\u0629\u060C \u0648\u0647\u0630\u0627 \u062A\u062D\u062F\u064A\u062F\u0627\u064B \u0645\u0627 \u064A\u062C\u0639\u0644 \u0627\u0646\u062A\u0628\u0627\u0647\u0643\u0650 \u0627\u0644\u062F\u0627\u0626\u0645 \u0648\u0645\u062A\u0627\u0628\u0639\u062A\u0643\u0650 \u0627\u0644\u0645\u0633\u062A\u0645\u0631\u0629 \u062E\u0637 \u062F\u0641\u0627\u0639\u0643\u0650 \u0648\u062D\u0645\u0627\u064A\u062A\u0643\u0650 \u0627\u0644\u0623\u0648\u0644\u0649.</p>\n      <p style="margin:0 0 14px;">\u0648\u062A\u0630\u0643\u0631\u064A \u062F\u0627\u0626\u0645\u0627\u064B \u0623\u0646 \u0645\u0644\u0627\u062D\u0638\u0629 \u0623\u064A \u0643\u062A\u0644\u0629 \u0623\u0648 \u062A\u063A\u064A\u0631 \u062C\u062F\u064A\u062F \u0644\u0627 \u062A\u0639\u0646\u064A \u0623\u0628\u062F\u0627\u064B \u0625\u0635\u0627\u0628\u0629 \u0628\u0645\u0631\u0636 \u062E\u0628\u064A\u062B\u061B \u0641\u0623\u0643\u062B\u0631 \u0627\u0644\u062A\u063A\u064A\u0631\u0627\u062A \u062A\u0643\u0648\u0646 \u062D\u0645\u064A\u062F\u0629 \u0648\u0637\u0628\u064A\u0639\u064A\u0629\u060C \u0648\u0627\u0644\u0637\u0628\u064A\u0628\u0629 \u0627\u0644\u0645\u062E\u062A\u0635\u0629 \u0648\u062D\u062F\u0647\u0627 \u0647\u064A \u0627\u0644\u0642\u0627\u062F\u0631\u0629 \u0639\u0644\u0649 \u0627\u0644\u062A\u0623\u0643\u064A\u062F \u0648\u0645\u0646\u062D\u0643\u0650 \u0631\u0627\u062D\u0629 \u0627\u0644\u0628\u0627\u0644.</p>\n      <p style="margin:0 0 14px;">\u0648\u0639\u0644\u0649 \u0627\u0644\u0631\u063A\u0645 \u0645\u0646 \u0623\u0646 \u0641\u062D\u0635\u0643\u0650 \u0627\u0644\u0630\u0627\u062A\u064A \u0648\u0627\u0646\u062A\u0628\u0627\u0647\u0643\u0650 \u0644\u062C\u0633\u062F\u0643\u0650 \u062E\u0637\u0648\u0629 \u0645\u0645\u062A\u0627\u0632\u0629 \u062A\u0633\u0627\u0639\u062F\u0643\u0650 \u0639\u0644\u0649 \u0627\u0643\u062A\u0634\u0627\u0641 \u0623\u064A \u062A\u063A\u064A\u0631 \u0645\u0628\u0643\u0631\u0627\u064B\u060C \u0625\u0644\u0627 \u0623\u0646\u0647 \u064A\u0628\u0642\u0649 \u062E\u0637\u0648\u0629 \u0645\u0643\u0645\u0644\u0629 \u0644\u0627 \u062A\u063A\u0646\u064A \u0639\u0646 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0637\u0628\u064A \u0627\u0644\u0645\u062A\u062E\u0635\u0635. \u0643\u0645\u0627 \u0623\u0646 \u063A\u064A\u0627\u0628 \u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0639\u0627\u0626\u0644\u064A \u0644\u0627 \u064A\u0639\u0646\u064A \u062A\u062C\u0627\u0647\u0644 \u0627\u0644\u0641\u062D\u0635\u060C \u0625\u0630 \u0625\u0646 \u0623\u063A\u0644\u0628 \u0627\u0644\u0645\u0635\u0627\u0628\u0627\u062A \u0644\u0627 \u064A\u0648\u062C\u062F \u0641\u064A \u0639\u0627\u0626\u0644\u0627\u062A\u0647\u0646 \u062A\u0627\u0631\u064A\u062E \u0633\u0627\u0628\u0642 \u0644\u0644\u0645\u0631\u0636. \u0648\u062A\u0630\u0643\u0631\u064A \u0623\u0646 \u0627\u0644\u0625\u0631\u0634\u0627\u062F\u0627\u062A \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u062A\u0648\u0635\u064A \u0628\u0628\u062F\u0621 \u0627\u0644\u0641\u062D\u0635 \u0628\u064A\u0646 \u0633\u0646 \u0627\u0644\u0623\u0631\u0628\u0639\u064A\u0646 \u0648\u0627\u0644\u062E\u0627\u0645\u0633\u0629 \u0648\u0627\u0644\u0623\u0631\u0628\u0639\u064A\u0646\u060C \u0645\u0639 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0628\u062F\u0621 \u0623\u0628\u0643\u0631 \u0628\u062D\u0633\u0628 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0637\u0628\u064A\u0628\u062A\u0643\u0650\u060C \u0645\u0639 \u0627\u0644\u0639\u0644\u0645 \u0623\u0646 \u0647\u0630\u0627 \u0627\u0644\u0648\u0639\u064A \u0645\u0633\u0624\u0648\u0644\u064A\u0629 \u0645\u062C\u062A\u0645\u0639\u064A\u0629 \u0646\u062A\u0634\u0627\u0631\u0643\u0647\u0627 \u062C\u0645\u064A\u0639\u0627\u064B \u0644\u062D\u0645\u0627\u064A\u0629 \u0643\u0644 \u0633\u064A\u062F\u0629\u060C \u0648\u062D\u062A\u0649 \u0627\u0644\u0631\u062C\u0627\u0644 \u0627\u0644\u0630\u064A\u0646 \u0642\u062F \u062A\u0635\u064A\u0628\u0647\u0645 \u0647\u0630\u0647 \u0627\u0644\u062D\u0627\u0644\u0627\u062A \u0628\u0646\u0633\u0628 \u0646\u0627\u062F\u0631\u0629 \u062C\u062F\u0627\u064B.</p>\n      <p style="margin:0 0 14px;">\u0623\u0645\u0627 \u0639\u0646 \u0645\u0634\u0627\u0639\u0631 \u0627\u0644\u062A\u0631\u062F\u062F \u0648\u0627\u0644\u0642\u0644\u0642 \u0627\u0644\u062A\u064A \u0642\u062F \u062A\u0631\u0627\u0648\u062F\u0643\u0650\u060C \u0641\u0627\u0639\u0644\u0645\u064A \u0623\u0646 \u0627\u0644\u062E\u0648\u0641 \u0634\u0639\u0648\u0631 \u0637\u0628\u064A\u0639\u064A \u064A\u0645\u0631 \u0628\u0627\u0644\u062C\u0645\u064A\u0639\u060C \u0644\u0643\u0646\u0647 \u0644\u064A\u0633 \u0627\u0644\u062D\u0644\u061B \u0641\u0627\u0644\u0643\u0634\u0641 \u0627\u0644\u0645\u0628\u0643\u0631 \u0644\u0627 \u064A\u062C\u0644\u0628 \u0627\u0644\u0645\u0631\u0636\u060C \u0628\u0644 \u064A\u0645\u0646\u062D\u0643\u0650 \u0627\u0644\u0623\u0645\u0627\u0646 \u0648\u0631\u0627\u062D\u0629 \u0627\u0644\u0628\u0627\u0644 \u0648\u0641\u0631\u0635 \u0639\u0644\u0627\u062C \u0648\u062A\u0639\u0627\u0641\u064D \u0623\u0643\u0628\u0631 \u0628\u0643\u062B\u064A\u0631. \u062A\u062D\u0648\u064A\u0644 \u0647\u0630\u0627 \u0627\u0644\u0627\u0647\u062A\u0645\u0627\u0645 \u0625\u0644\u0649 \u0631\u0648\u062A\u064A\u0646 \u062F\u0648\u0631\u064A \u064A\u0631\u0641\u0639 \u0639\u0646 \u0643\u0627\u0647\u0644\u0643\u0650 \u0639\u0628\u0621 \u0627\u0644\u0642\u0644\u0642 \u0645\u0646 \u0627\u0644\u0645\u062C\u0647\u0648\u0644\u060C \u0648\u0643\u0633\u0631 \u062D\u0627\u062C\u0632 \u0627\u0644\u0635\u0645\u062A \u0648\u0627\u0644\u062D\u062F\u064A\u062B \u0628\u0625\u064A\u062C\u0627\u0628\u064A\u0629 \u0645\u0639 \u0648\u0627\u0644\u062F\u062A\u0643\u0650\u060C \u0623\u062E\u062A\u0643\u0650\u060C \u0648\u0635\u062F\u064A\u0642\u0627\u062A\u0643\u0650 \u064A\u0635\u0646\u0639 \u062D\u0648\u0644\u0643\u0650 \u062F\u0627\u0626\u0631\u0629 \u062F\u0639\u0645 \u062D\u0642\u064A\u0642\u064A\u0629 \u062A\u0634\u062C\u0639 \u0627\u0644\u062C\u0645\u064A\u0639 \u0639\u0644\u0649 \u0627\u0644\u0645\u0628\u0627\u062F\u0631\u0629.</p>\n    </td></tr>\n    <tr><td style="padding:0 30px 8px;">\n      <table dir="rtl" role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:#FFF6DC;border-radius:16px;">\n        <tr><td style="padding:18px 20px;font:700 17px/1.9 Tahoma,Arial,sans-serif;color:#2A2160;text-align:right;">\u062A\u0630\u0643\u0631\u064A \u062F\u0627\u0626\u0645\u0627\u064B: \u0623\u064A \u062A\u063A\u064A\u0631 \u062C\u062F\u064A\u062F \u062A\u0644\u0627\u062D\u0638\u064A\u0646\u0647 \u064A\u0633\u062A\u062D\u0642 \u0623\u0646 \u062A\u0633\u0623\u0644\u064A \u0639\u0646\u0647 \u0637\u0628\u064A\u0628\u062A\u0643\u0650 \u0648\u062A\u0637\u0645\u0626\u0646\u064A.. \u062E\u0637\u0648\u062A\u0643\u0650 \u0627\u0644\u064A\u0648\u0645 \u0628\u0627\u0644\u0641\u062D\u0635 \u0648\u0627\u0644\u0627\u0647\u062A\u0645\u0627\u0645 \u0647\u064A \u0623\u0645\u0627\u0646\u0643\u0650 \u0648\u0631\u0627\u062D\u0629 \u0628\u0627\u0644\u0643\u0650 \u0644\u0633\u0646\u0648\u0627\u062A \u0642\u0627\u062F\u0645\u0629. \u{1F338}</td></tr>\n      </table>\n    </td></tr>\n    <tr><td align="center" style="padding:22px 30px 6px;">\n      <a href="{{SITE_URL}}/" style="display:inline-block;background:#5B4BE0;color:#FFFFFF;text-decoration:none;font:700 16px/1 Tahoma,Arial,sans-serif;padding:16px 28px;border-radius:999px;">\u0634\u0627\u0631\u0643\u064A \u0627\u0644\u0631\u062D\u0644\u0629 \u0645\u0639 \u0648\u062D\u062F\u0629 \u062A\u062D\u0628\u064A\u0647\u0627</a>\n    </td></tr>\n    <tr><td style="padding:22px 30px 30px;font:400 15px/1.9 Tahoma,Arial,sans-serif;color:#635A8C;text-align:right;">\n      \u062F\u0645\u062A\u0650 \u0628\u0643\u0627\u0645\u0644 \u0627\u0644\u0635\u062D\u0629 \u0648\u0627\u0644\u0639\u0627\u0641\u064A\u0629\u060C<br><b style="color:#2A2160;">\u0641\u0631\u064A\u0642 \u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0625\u0639\u0644\u0627\u0645\u064A</b><br>\u0645\u0646\u0638\u0645\u0629 \u0645\u0645\u0643\u0646 \u0644\u0644\u062A\u0648\u0639\u064A\u0629 \u0648\u0627\u0644\u0625\u0639\u0644\u0627\u0645\n    </td></tr>\n    <tr><td style="background:#F7F2FB;padding:16px 30px;font:400 12px/1.8 Tahoma,Arial,sans-serif;color:#8A82A8;text-align:center;">\n      \u0648\u0635\u0644\u062A\u0643 \u0647\u0630\u0647 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0644\u0623\u0646\u0643 \u0634\u0627\u0631\u0643\u062A\u064A \u0641\u064A \u0627\u0633\u062A\u0628\u064A\u0627\u0646 \xAB\u0632\u0647\u0631\u0629 \u0627\u0644\u0643\u062A\u0627\u0646\xBB. \u0625\u062C\u0627\u0628\u0627\u062A\u0643 \u0645\u062C\u0647\u0648\u0644\u0629\u060C \u0648\u0625\u064A\u0645\u064A\u0644\u0643 \u0645\u0627 \u064A\u062A\u062E\u0632\u0646\u0634 \u0645\u0639 \u0625\u062C\u0627\u0628\u0627\u062A\u0643.<br>\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u062A\u0648\u0639\u0648\u064A\u0629 \u0639\u0627\u0645\u0629\u060C \u0645\u0634 \u0628\u062F\u064A\u0644 \u0639\u0646 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0627\u0644\u0637\u0628\u064A\u0628.\n    </td></tr>\n  </table>\n</td></tr>\n</table>\n</body>\n</html>\n';
var EMAIL_TEXT = '\u0634\u0643\u0631\u0627\u064B \u064A\u0627 {{NAME}} \u{1F338}\n\u0632\u0647\u0631\u062A\u0643 \u0631\u0642\u0645 {{FLOWER_NO}} \u062A\u0641\u062A\u0651\u062D\u062A \u0641\u064A \u062D\u062F\u064A\u0642\u0629 \u0645\u0645\u0643\u0646.\n\n\u0627\u0644\u0633\u0644\u0627\u0645 \u0639\u0644\u064A\u0643\u0645\u060C\n\n\u0623\u0647\u0644\u0627\u064B \u0628\u0643\u0650.. \u0641\u064A \u0643\u0644 \u0639\u0627\u0645\u060C \u064A\u0623\u062A\u064A \u0634\u0647\u0631 \u0623\u0643\u062A\u0648\u0628\u0631 \u0644\u064A\u062D\u0645\u0644 \u0644\u0646\u0627 \u062A\u0630\u0643\u064A\u0631\u0627\u064B \u062F\u0627\u0641\u0626\u0627\u064B \u0628\u0623\u0646 \u0627\u0644\u0627\u0647\u062A\u0645\u0627\u0645 \u0628\u0635\u062D\u062A\u0643\u0650 \u0644\u064A\u0633 \u0645\u062C\u0631\u062F \u062E\u064A\u0627\u0631 \u062B\u0627\u0646\u0648\u064A \u0623\u0648 \u0645\u0648\u0639\u062F \u064A\u064F\u0624\u062C\u0644 \u0644\u0640 "\u0628\u0639\u062F\u064A\u0646"\u060C \u0628\u0644 \u0647\u0648 \u0623\u0635\u062F\u0642 \u0648\u0623\u0631\u0642\u0649 \u062E\u0637\u0648\u0629 \u062D\u0628 \u0648\u0623\u0645\u0627\u0646 \u062A\u0642\u062F\u0645\u064A\u0646\u0647\u0627 \u0644\u0646\u0641\u0633\u0643\u0650 \u0648\u0644\u0643\u0644 \u0645\u0646 \u064A\u062D\u0628 \u0648\u062C\u0648\u062F\u0643\u0650 \u0628\u064A\u0646\u0647\u0645. \u0627\u0644\u0648\u0639\u064A \u0627\u0644\u062D\u0642\u064A\u0642\u064A \u064A\u0628\u062F\u0623 \u062F\u0627\u0626\u0645\u0627\u064B \u0645\u0646 \u0627\u0644\u0645\u0639\u0631\u0641\u0629 \u0627\u0644\u0635\u062D\u064A\u062D\u0629\u060C \u0648\u0627\u0644\u0627\u0637\u0645\u0626\u0646\u0627\u0646 \u0627\u0644\u062F\u0627\u062E\u0644\u064A\u060C \u0648\u0627\u0644\u062E\u0637\u0648\u0629 \u0627\u0644\u0639\u0645\u0644\u064A\u0629 \u0627\u0644\u0648\u0627\u0639\u064A\u0629.\n\n\u0648\u062F\u0627\u0626\u0645\u0627\u064B \u0645\u0627 \u062A\u0628\u062F\u0623 \u0631\u062D\u0644\u0629 \u0627\u0644\u0627\u0637\u0645\u0626\u0646\u0627\u0646 \u0628\u0641\u0647\u0645 \u0645\u0627 \u064A\u062F\u0648\u0631 \u0641\u064A \u0623\u062C\u0633\u0627\u062F\u0646\u0627\u061B \u0641\u0627\u0644\u0643\u062A\u0644 \u0641\u064A \u0628\u062F\u0627\u064A\u0627\u062A\u0647\u0627 \u0646\u0627\u062F\u0631\u0627\u064B \u0645\u0627 \u062A\u0633\u0628\u0628 \u0623\u064A \u0623\u0644\u0645\u060C \u0648\u063A\u064A\u0627\u0628 \u0627\u0644\u0648\u062C\u0639 \u0644\u0627 \u064A\u0639\u0646\u064A \u0623\u0628\u062F\u0627\u064B \u063A\u064A\u0627\u0628 \u0627\u0644\u062D\u0627\u062C\u0629 \u0644\u0644\u0641\u062D\u0635\u060C \u062A\u0645\u0627\u0645\u0627\u064B \u0643\u0645\u0627 \u0623\u0646 \u0623\u063A\u0644\u0628 \u0627\u0644\u062D\u0627\u0644\u0627\u062A \u062A\u0628\u062F\u0623 \u062F\u0648\u0646 \u0623\u0639\u0631\u0627\u0636 \u0648\u0627\u0636\u062D\u0629\u060C \u0648\u0647\u0630\u0627 \u062A\u062D\u062F\u064A\u062F\u0627\u064B \u0645\u0627 \u064A\u062C\u0639\u0644 \u0627\u0646\u062A\u0628\u0627\u0647\u0643\u0650 \u0627\u0644\u062F\u0627\u0626\u0645 \u0648\u0645\u062A\u0627\u0628\u0639\u062A\u0643\u0650 \u0627\u0644\u0645\u0633\u062A\u0645\u0631\u0629 \u062E\u0637 \u062F\u0641\u0627\u0639\u0643\u0650 \u0648\u062D\u0645\u0627\u064A\u062A\u0643\u0650 \u0627\u0644\u0623\u0648\u0644\u0649.\n\n\u0648\u062A\u0630\u0643\u0631\u064A \u062F\u0627\u0626\u0645\u0627\u064B \u0623\u0646 \u0645\u0644\u0627\u062D\u0638\u0629 \u0623\u064A \u0643\u062A\u0644\u0629 \u0623\u0648 \u062A\u063A\u064A\u0631 \u062C\u062F\u064A\u062F \u0644\u0627 \u062A\u0639\u0646\u064A \u0623\u0628\u062F\u0627\u064B \u0625\u0635\u0627\u0628\u0629 \u0628\u0645\u0631\u0636 \u062E\u0628\u064A\u062B\u061B \u0641\u0623\u0643\u062B\u0631 \u0627\u0644\u062A\u063A\u064A\u0631\u0627\u062A \u062A\u0643\u0648\u0646 \u062D\u0645\u064A\u062F\u0629 \u0648\u0637\u0628\u064A\u0639\u064A\u0629\u060C \u0648\u0627\u0644\u0637\u0628\u064A\u0628\u0629 \u0627\u0644\u0645\u062E\u062A\u0635\u0629 \u0648\u062D\u062F\u0647\u0627 \u0647\u064A \u0627\u0644\u0642\u0627\u062F\u0631\u0629 \u0639\u0644\u0649 \u0627\u0644\u062A\u0623\u0643\u064A\u062F \u0648\u0645\u0646\u062D\u0643\u0650 \u0631\u0627\u062D\u0629 \u0627\u0644\u0628\u0627\u0644.\n\n\u0648\u0639\u0644\u0649 \u0627\u0644\u0631\u063A\u0645 \u0645\u0646 \u0623\u0646 \u0641\u062D\u0635\u0643\u0650 \u0627\u0644\u0630\u0627\u062A\u064A \u0648\u0627\u0646\u062A\u0628\u0627\u0647\u0643\u0650 \u0644\u062C\u0633\u062F\u0643\u0650 \u062E\u0637\u0648\u0629 \u0645\u0645\u062A\u0627\u0632\u0629 \u062A\u0633\u0627\u0639\u062F\u0643\u0650 \u0639\u0644\u0649 \u0627\u0643\u062A\u0634\u0627\u0641 \u0623\u064A \u062A\u063A\u064A\u0631 \u0645\u0628\u0643\u0631\u0627\u064B\u060C \u0625\u0644\u0627 \u0623\u0646\u0647 \u064A\u0628\u0642\u0649 \u062E\u0637\u0648\u0629 \u0645\u0643\u0645\u0644\u0629 \u0644\u0627 \u062A\u063A\u0646\u064A \u0639\u0646 \u0627\u0644\u0641\u062D\u0635 \u0627\u0644\u0637\u0628\u064A \u0627\u0644\u0645\u062A\u062E\u0635\u0635. \u0643\u0645\u0627 \u0623\u0646 \u063A\u064A\u0627\u0628 \u0627\u0644\u062A\u0627\u0631\u064A\u062E \u0627\u0644\u0639\u0627\u0626\u0644\u064A \u0644\u0627 \u064A\u0639\u0646\u064A \u062A\u062C\u0627\u0647\u0644 \u0627\u0644\u0641\u062D\u0635\u060C \u0625\u0630 \u0625\u0646 \u0623\u063A\u0644\u0628 \u0627\u0644\u0645\u0635\u0627\u0628\u0627\u062A \u0644\u0627 \u064A\u0648\u062C\u062F \u0641\u064A \u0639\u0627\u0626\u0644\u0627\u062A\u0647\u0646 \u062A\u0627\u0631\u064A\u062E \u0633\u0627\u0628\u0642 \u0644\u0644\u0645\u0631\u0636. \u0648\u062A\u0630\u0643\u0631\u064A \u0623\u0646 \u0627\u0644\u0625\u0631\u0634\u0627\u062F\u0627\u062A \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u062A\u0648\u0635\u064A \u0628\u0628\u062F\u0621 \u0627\u0644\u0641\u062D\u0635 \u0628\u064A\u0646 \u0633\u0646 \u0627\u0644\u0623\u0631\u0628\u0639\u064A\u0646 \u0648\u0627\u0644\u062E\u0627\u0645\u0633\u0629 \u0648\u0627\u0644\u0623\u0631\u0628\u0639\u064A\u0646\u060C \u0645\u0639 \u0625\u0645\u0643\u0627\u0646\u064A\u0629 \u0627\u0644\u0628\u062F\u0621 \u0623\u0628\u0643\u0631 \u0628\u062D\u0633\u0628 \u0627\u0633\u062A\u0634\u0627\u0631\u0629 \u0637\u0628\u064A\u0628\u062A\u0643\u0650\u060C \u0645\u0639 \u0627\u0644\u0639\u0644\u0645 \u0623\u0646 \u0647\u0630\u0627 \u0627\u0644\u0648\u0639\u064A \u0645\u0633\u0624\u0648\u0644\u064A\u0629 \u0645\u062C\u062A\u0645\u0639\u064A\u0629 \u0646\u062A\u0634\u0627\u0631\u0643\u0647\u0627 \u062C\u0645\u064A\u0639\u0627\u064B \u0644\u062D\u0645\u0627\u064A\u0629 \u0643\u0644 \u0633\u064A\u062F\u0629\u060C \u0648\u062D\u062A\u0649 \u0627\u0644\u0631\u062C\u0627\u0644 \u0627\u0644\u0630\u064A\u0646 \u0642\u062F \u062A\u0635\u064A\u0628\u0647\u0645 \u0647\u0630\u0647 \u0627\u0644\u062D\u0627\u0644\u0627\u062A \u0628\u0646\u0633\u0628 \u0646\u0627\u062F\u0631\u0629 \u062C\u062F\u0627\u064B.\n\n\u0623\u0645\u0627 \u0639\u0646 \u0645\u0634\u0627\u0639\u0631 \u0627\u0644\u062A\u0631\u062F\u062F \u0648\u0627\u0644\u0642\u0644\u0642 \u0627\u0644\u062A\u064A \u0642\u062F \u062A\u0631\u0627\u0648\u062F\u0643\u0650\u060C \u0641\u0627\u0639\u0644\u0645\u064A \u0623\u0646 \u0627\u0644\u062E\u0648\u0641 \u0634\u0639\u0648\u0631 \u0637\u0628\u064A\u0639\u064A \u064A\u0645\u0631 \u0628\u0627\u0644\u062C\u0645\u064A\u0639\u060C \u0644\u0643\u0646\u0647 \u0644\u064A\u0633 \u0627\u0644\u062D\u0644\u061B \u0641\u0627\u0644\u0643\u0634\u0641 \u0627\u0644\u0645\u0628\u0643\u0631 \u0644\u0627 \u064A\u062C\u0644\u0628 \u0627\u0644\u0645\u0631\u0636\u060C \u0628\u0644 \u064A\u0645\u0646\u062D\u0643\u0650 \u0627\u0644\u0623\u0645\u0627\u0646 \u0648\u0631\u0627\u062D\u0629 \u0627\u0644\u0628\u0627\u0644 \u0648\u0641\u0631\u0635 \u0639\u0644\u0627\u062C \u0648\u062A\u0639\u0627\u0641\u064D \u0623\u0643\u0628\u0631 \u0628\u0643\u062B\u064A\u0631. \u062A\u062D\u0648\u064A\u0644 \u0647\u0630\u0627 \u0627\u0644\u0627\u0647\u062A\u0645\u0627\u0645 \u0625\u0644\u0649 \u0631\u0648\u062A\u064A\u0646 \u062F\u0648\u0631\u064A \u064A\u0631\u0641\u0639 \u0639\u0646 \u0643\u0627\u0647\u0644\u0643\u0650 \u0639\u0628\u0621 \u0627\u0644\u0642\u0644\u0642 \u0645\u0646 \u0627\u0644\u0645\u062C\u0647\u0648\u0644\u060C \u0648\u0643\u0633\u0631 \u062D\u0627\u062C\u0632 \u0627\u0644\u0635\u0645\u062A \u0648\u0627\u0644\u062D\u062F\u064A\u062B \u0628\u0625\u064A\u062C\u0627\u0628\u064A\u0629 \u0645\u0639 \u0648\u0627\u0644\u062F\u062A\u0643\u0650\u060C \u0623\u062E\u062A\u0643\u0650\u060C \u0648\u0635\u062F\u064A\u0642\u0627\u062A\u0643\u0650 \u064A\u0635\u0646\u0639 \u062D\u0648\u0644\u0643\u0650 \u062F\u0627\u0626\u0631\u0629 \u062F\u0639\u0645 \u062D\u0642\u064A\u0642\u064A\u0629 \u062A\u0634\u062C\u0639 \u0627\u0644\u062C\u0645\u064A\u0639 \u0639\u0644\u0649 \u0627\u0644\u0645\u0628\u0627\u062F\u0631\u0629.\n\n\u062A\u0630\u0643\u0631\u064A \u062F\u0627\u0626\u0645\u0627\u064B: \u0623\u064A \u062A\u063A\u064A\u0631 \u062C\u062F\u064A\u062F \u062A\u0644\u0627\u062D\u0638\u064A\u0646\u0647 \u064A\u0633\u062A\u062D\u0642 \u0623\u0646 \u062A\u0633\u0623\u0644\u064A \u0639\u0646\u0647 \u0637\u0628\u064A\u0628\u062A\u0643\u0650 \u0648\u062A\u0637\u0645\u0626\u0646\u064A.. \u062E\u0637\u0648\u062A\u0643\u0650 \u0627\u0644\u064A\u0648\u0645 \u0628\u0627\u0644\u0641\u062D\u0635 \u0648\u0627\u0644\u0627\u0647\u062A\u0645\u0627\u0645 \u0647\u064A \u0623\u0645\u0627\u0646\u0643\u0650 \u0648\u0631\u0627\u062D\u0629 \u0628\u0627\u0644\u0643\u0650 \u0644\u0633\u0646\u0648\u0627\u062A \u0642\u0627\u062F\u0645\u0629. \u{1F338}\n\n\u062F\u0645\u062A\u0650 \u0628\u0643\u0627\u0645\u0644 \u0627\u0644\u0635\u062D\u0629 \u0648\u0627\u0644\u0639\u0627\u0641\u064A\u0629\u060C\n\u0641\u0631\u064A\u0642 \u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0625\u0639\u0644\u0627\u0645\u064A\n\u0645\u0645\u0643\u0646\n\n\u0634\u0627\u0631\u0643\u064A \u0627\u0644\u0631\u062D\u0644\u0629: {{SITE_URL}}/\n\n\u0648\u0635\u0644\u062A\u0643 \u0647\u0630\u0647 \u0627\u0644\u0631\u0633\u0627\u0644\u0629 \u0644\u0623\u0646\u0643 \u0634\u0627\u0631\u0643\u062A\u064A \u0641\u064A \u0627\u0633\u062A\u0628\u064A\u0627\u0646 \xAB\u0632\u0647\u0631\u0629 \u0627\u0644\u0643\u062A\u0627\u0646\xBB. \u0625\u062C\u0627\u0628\u0627\u062A\u0643 \u0645\u062C\u0647\u0648\u0644\u0629\u060C \u0648\u0625\u064A\u0645\u064A\u0644\u0643 \u0645\u0627 \u064A\u062A\u062E\u0632\u0646\u0634 \u0645\u0639 \u0625\u062C\u0627\u0628\u0627\u062A\u0643.';

// src/index.js
var KEY = [1, 0, 0, 3, 1, 1, 1, 1];
var SINGLE = {
  age: 3,
  city: 9,
  k0: 2,
  k1: 2,
  k2: 2,
  k3: 4,
  k4: 2,
  k5: 2,
  k6: 2,
  k7: 2,
  p1: 3,
  p1b: 2,
  p2: 3,
  p2b: 2,
  p3: 2,
  p4: 3,
  s1: 2,
  s3: 3
};
var MULTI = { s1b: 5, s2: 9 };
var REQUIRED = ["age", "city", "k0", "k1", "k2", "k3", "k4", "k5", "k6", "k7"];
var RATE_LIMIT = 5;
var MIN_N = 10;
var index_default = {
  async fetch(req, env, ctx) {
    const url = new URL(req.url);
    const cors = corsHeaders(req, env);
    if (req.method === "OPTIONS") return new Response(null, { status: cors ? 204 : 403, headers: cors || {} });
    try {
      if (url.pathname === "/health") return json({ ok: true }, 200, cors);
      if (url.pathname === "/submit" && req.method === "POST") {
        if (!cors) return json({ error: "origin not allowed" }, 403);
        return await submit(req, env, ctx, cors);
      }
      if (url.pathname === "/garden" && req.method === "GET") return await garden(env, cors);
      if (url.pathname === "/stats" && req.method === "GET") {
        if (!cors) return json({ error: "origin not allowed" }, 403);
        return await stats(req, env, cors);
      }
      return json({ error: "not found" }, 404, cors);
    } catch (e) {
      console.error("internal error", e && e.message);
      return json({ error: "internal error" }, 500, cors);
    }
  }
};
function json(obj, status = 200, headers = {}) {
  return new Response(JSON.stringify(obj), { status, headers: { "Content-Type": "application/json; charset=utf-8", ...headers || {} } });
}
__name(json, "json");
function corsHeaders(req, env) {
  const origin = req.headers.get("Origin");
  const allowed = (env.ALLOWED_ORIGINS || "").split(",").map((s) => s.trim()).filter(Boolean);
  if (!origin || !allowed.includes(origin)) return null;
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-Admin-Key",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
}
__name(corsHeaders, "corsHeaders");
var libyaDay = /* @__PURE__ */ __name((d = /* @__PURE__ */ new Date()) => d.toLocaleDateString("en-CA", { timeZone: "Africa/Tripoli" }), "libyaDay");
async function sha256(s) {
  const b = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, "0")).join("");
}
__name(sha256, "sha256");
function safeEqual(a, b) {
  a = String(a || "");
  b = String(b || "");
  let diff = a.length ^ b.length;
  for (let i = 0; i < Math.max(a.length, b.length); i++) diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  return diff === 0 && a.length > 0;
}
__name(safeEqual, "safeEqual");
var esc = /* @__PURE__ */ __name((t) => String(t).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]), "esc");
var isInt = /* @__PURE__ */ __name((v) => Number.isInteger(v), "isInt");
function validate(body) {
  if (!body || typeof body !== "object" || Array.isArray(body)) return "bad body";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  if (name.length < 2 || name.length > 80 || /[<>\u0000-\u001f]/.test(name)) return "bad name";
  if (email.length > 120 || !/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email)) return "bad email";
  const a = body.answers;
  if (!a || typeof a !== "object" || Array.isArray(a)) return "bad answers";
  for (const k of Object.keys(a)) if (!(k in SINGLE) && !(k in MULTI)) return "unknown field " + k;
  for (const [k, max] of Object.entries(SINGLE)) {
    if (a[k] === void 0 || a[k] === null) continue;
    if (!isInt(a[k]) || a[k] < 0 || a[k] > max) return "bad " + k;
  }
  for (const [k, max] of Object.entries(MULTI)) {
    if (a[k] === void 0 || a[k] === null) continue;
    const v = a[k];
    if (!Array.isArray(v) || v.length > 2 || new Set(v).size !== v.length || v.some((x) => !isInt(x) || x < 0 || x > max)) return "bad " + k;
  }
  for (const k of REQUIRED) if (a[k] === void 0 || a[k] === null) return "missing " + k;
  return null;
}
__name(validate, "validate");
async function submit(req, env, ctx, cors) {
  const raw = await req.text();
  if (raw.length > 8e3) return json({ error: "too large" }, 413, cors);
  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return json({ error: "bad json" }, 400, cors);
  }
  const count = /* @__PURE__ */ __name(async () => (await env.DB.prepare("SELECT COUNT(*) AS n FROM responses").first()).n, "count");
  if (typeof body.website === "string" && body.website.trim() !== "") return json({ emailSent: true, flowerNo: await count() + 1 }, 200, cors);
  const err = validate(body);
  if (err) return json({ error: "invalid", detail: err }, 400, cors);
  const ip = req.headers.get("CF-Connecting-IP") || "0";
  const win = Math.floor(Date.now() / 6e5);
  const rk = (await sha256((env.IP_SALT || env.ADMIN_KEY || "zk") + ip)).slice(0, 32) + ":" + win;
  const row = await env.DB.prepare("INSERT INTO rate(key,hits,window) VALUES(?,1,?) ON CONFLICT(key) DO UPDATE SET hits=hits+1 RETURNING hits").bind(rk, win).first();
  if (row && row.hits > RATE_LIMIT) return json({ error: "too many requests" }, 429, cors);
  ctx.waitUntil(env.DB.prepare("DELETE FROM rate WHERE window < ?").bind(win - 144).run());
  const a = body.answers;
  const score = KEY.reduce((s, k, i) => s + (a["k" + i] === k ? 1 : 0), 0);
  const v = /* @__PURE__ */ __name((k) => a[k] === void 0 ? null : a[k], "v");
  const now = /* @__PURE__ */ new Date();
  const ins = await env.DB.prepare(
    `INSERT INTO responses(created_at,day,score,age,city,k0,k1,k2,k3,k4,k5,k6,k7,p1,p1b,p2,p2b,p3,p4,s1,s1b,s2,s3)
     VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?) RETURNING id`
  ).bind(
    now.toISOString(),
    libyaDay(now),
    score,
    v("age"),
    v("city"),
    v("k0"),
    v("k1"),
    v("k2"),
    v("k3"),
    v("k4"),
    v("k5"),
    v("k6"),
    v("k7"),
    v("p1"),
    v("p1b"),
    v("p2"),
    v("p2b"),
    v("p3"),
    v("p4"),
    v("s1"),
    JSON.stringify(a.s1b || []),
    JSON.stringify(a.s2 || []),
    v("s3")
  ).first();
  const flowerNo = await count();
  void ins;
  let emailSent = false;
  try {
    emailSent = await sendEmail(env, body.name.trim(), body.email.trim(), flowerNo);
  } catch (e) {
    console.error("email failed", e && e.message);
  }
  return json({ emailSent, flowerNo }, 200, cors);
}
__name(submit, "submit");
async function sendEmail(env, name, email, flowerNo) {
  if (!env.BREVO_API_KEY) return false;
  const first = name.split(/\s+/)[0];
  const no = Number(flowerNo).toLocaleString("en-US");
  const site = (env.SITE_URL || "").replace(/\/$/, "");
  const fill = /* @__PURE__ */ __name((t, html) => t.replaceAll("{{NAME}}", html ? esc(first) : first).replaceAll("{{FLOWER_NO}}", no).replaceAll("{{SITE_URL}}", site), "fill");
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 8e3);
  const r = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    signal: ctrl.signal,
    headers: { "api-key": env.BREVO_API_KEY, "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({
      sender: { email: env.MAIL_FROM || "media@moomken.org", name: env.MAIL_FROM_NAME || "\u0627\u0644\u0645\u0631\u0643\u0632 \u0627\u0644\u0625\u0639\u0644\u0627\u0645\u064A \xB7 \u0645\u0646\u0638\u0645\u0629 \u0645\u0645\u0643\u0646" },
      to: [{ email, name: first }],
      subject: EMAIL_SUBJECT,
      htmlContent: fill(EMAIL_HTML, true),
      textContent: fill(EMAIL_TEXT, false),
      tags: ["zahrat-alkattan"]
    })
  }).finally(() => clearTimeout(timer));
  return r.ok;
}
__name(sendEmail, "sendEmail");
async function garden(env, cors) {
  const n = (await env.DB.prepare("SELECT COUNT(*) AS n FROM responses").first()).n;
  return json({ count: n }, 200, { ...cors || { "Access-Control-Allow-Origin": "*" }, "Cache-Control": "public, max-age=30" });
}
__name(garden, "garden");
async function stats(req, env, cors) {
  if (!safeEqual(req.headers.get("X-Admin-Key"), env.ADMIN_KEY)) return json({ error: "unauthorized" }, 401, cors);
  const DB = env.DB;
  const n = (await DB.prepare("SELECT COUNT(*) AS n FROM responses").first()).n;
  if (n < MIN_N) return json({ n, hidden: true }, 200, { ...cors, "Cache-Control": "no-store" });
  const counts = /* @__PURE__ */ __name(async (col, size) => {
    const out = new Array(size).fill(0);
    const { results } = await DB.prepare(`SELECT ${col} AS v, COUNT(*) AS c FROM responses WHERE ${col} IS NOT NULL GROUP BY ${col}`).all();
    for (const r of results) if (r.v >= 0 && r.v < size) out[r.v] = r.c;
    return out;
  }, "counts");
  const multi = /* @__PURE__ */ __name(async (col, size) => {
    const out = new Array(size).fill(0);
    const { results } = await DB.prepare(`SELECT j.value AS v, COUNT(*) AS c FROM responses, json_each(responses.${col}) AS j GROUP BY j.value`).all();
    for (const r of results) if (r.v >= 0 && r.v < size) out[r.v] = r.c;
    return out;
  }, "multi");
  const kRow = await DB.prepare(`SELECT ${KEY.map((k, i) => `SUM(CASE WHEN k${i}=${k} THEN 1 ELSE 0 END) AS c${i}`).join(",")}, AVG(score) AS avg FROM responses`).first();
  const since = libyaDay(new Date(Date.now() - 59 * 864e5));
  const { results: days } = await DB.prepare("SELECT day AS d, COUNT(*) AS c FROM responses WHERE day >= ? GROUP BY day ORDER BY day").bind(since).all();
  const daily = [];
  const map = Object.fromEntries(days.map((r) => [r.d, r.c]));
  const first = days.length ? days[0].d : libyaDay();
  for (let t = /* @__PURE__ */ new Date(first + "T12:00:00Z"); libyaDay(t) <= libyaDay(); t = new Date(t.getTime() + 864e5)) {
    const d = libyaDay(t);
    daily.push({ d, c: map[d] || 0 });
  }
  if (daily.length === 1) daily.unshift({ d: libyaDay(new Date(Date.now() - 864e5)), c: 0 });
  return json({
    n,
    updated: (/* @__PURE__ */ new Date()).toISOString(),
    avgScore: kRow.avg || 0,
    daily,
    k: KEY.map((_, i) => (kRow["c" + i] || 0) / n),
    scoreDist: await counts("score", 9),
    age: await counts("age", 4),
    city: await counts("city", 10),
    p1: await counts("p1", 4),
    p2: await counts("p2", 4),
    p3: await counts("p3", 3),
    p4: await counts("p4", 4),
    s1: await counts("s1", 3),
    s1b: await multi("s1b", 6),
    s2: await multi("s2", 10),
    s3: await counts("s3", 4)
  }, 200, { ...cors, "Cache-Control": "no-store" });
}
__name(stats, "stats");
export {
  index_default as default
};
