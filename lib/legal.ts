// Policy pages. Copy taken from the Elite Forex Hub policy documents (3 November 2026).

export type LegalBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: { term?: string; text: string }[] };

export type LegalSection = { heading: string; blocks: LegalBlock[] };

export type LegalDoc = {
  slug: string;
  title: string;
  short: string;
  description: string;
  effective: string;
  intro: string[];
  sections: LegalSection[];
};

export const legalContact = {
  company: "Junaid Rizvi Financial Education and Coaching",
  email: "eliteforexbyrizv@gmail.com",
  whatsapp: "+92 309 8601926",
  whatsappUrl: "https://wa.me/923098601926",
  website: "eliteforexhub.com",
};

const effective = "3 November 2026";

export const privacy: LegalDoc = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  short: "Privacy",
  description: "How Elite Forex Hub collects, uses and protects your information.",
  effective,
  intro: [
    'This Privacy Policy explains how we ("Elite Forex Hub", "us") collect, use and protect your information when you visit eliteforexhub.com or join our paid community.',
  ],
  sections: [
    {
      heading: "Information we collect",
      blocks: [
        {
          type: "ul",
          items: [
            {
              term: "Contact details",
              text: "your name, email address and WhatsApp number, provided when you sign up or contact us.",
            },
            {
              term: "Payment records",
              text: "the plan you bought, the amount, the date and the transaction reference. Card, bank and wallet details are entered on our payment gateway's secure page and are never seen or stored by us.",
            },
            {
              term: "Basic website data",
              text: "standard technical information such as browser type and pages visited, collected automatically to keep the website working properly.",
            },
          ],
        },
      ],
    },
    {
      heading: "How we use your information",
      blocks: [
        {
          type: "ul",
          items: [
            { text: "To give you access to the Elite Forex Hub community on Discord." },
            { text: "To process payments, send receipts and remind you about renewals." },
            { text: "To answer your questions and provide support." },
            { text: "To send important updates about your membership or changes to our policies." },
          ],
        },
        { type: "p", text: "We do not sell, rent or trade your personal information to anyone." },
      ],
    },
    {
      heading: "Sharing your information",
      blocks: [
        { type: "p", text: "We share information only where needed to run our service:" },
        {
          type: "ul",
          items: [
            { term: "Payment gateway", text: "to process your payments securely." },
            {
              term: "Discord",
              text: "your Discord username is visible to the platform and, depending on server settings, to other members of the community.",
            },
            {
              term: "Legal requirements",
              text: "where required by law or by a government authority in Pakistan.",
            },
          ],
        },
      ],
    },
    {
      heading: "Data security and retention",
      blocks: [
        {
          type: "p",
          text: "We take reasonable steps to protect your information from loss, misuse or unauthorised access. We keep your information while your membership is active and for as long afterwards as needed for accounting, tax and legal purposes.",
        },
      ],
    },
    {
      heading: "Your rights",
      blocks: [
        {
          type: "p",
          text: "You can ask us at any time to see, correct or delete the personal information we hold about you, or to stop sending you messages. Some records, such as payment records, may need to be kept for legal reasons.",
        },
      ],
    },
    {
      heading: "Cookies",
      blocks: [
        {
          type: "p",
          text: "Our website may use basic cookies to function properly and to understand how visitors use it. You can turn cookies off in your browser settings.",
        },
      ],
    },
    {
      heading: "Changes to this policy",
      blocks: [
        {
          type: "p",
          text: "We may update this Privacy Policy from time to time. The latest version will always be posted on this page with its effective date.",
        },
      ],
    },
  ],
};

export const terms: LegalDoc = {
  slug: "terms-and-conditions",
  title: "Terms and Conditions",
  short: "Terms",
  description: "The terms that apply to your use of eliteforexhub.com and your Elite Forex Hub membership.",
  effective,
  intro: [
    "These Terms and Conditions apply to your use of eliteforexhub.com and your membership in Elite Forex Hub, operated by Junaid Rizvi Financial Education and Coaching, Karachi, Pakistan. By buying a membership or using our website, you agree to these terms.",
  ],
  sections: [
    {
      heading: "Our service",
      blocks: [
        {
          type: "p",
          text: "Elite Forex Hub is a paid educational community focused on forex and gold (XAUUSD) trading. Members receive access to a private Discord server with daily market analysis, key price levels, trade ideas with their reasoning, and educational discussion.",
        },
      ],
    },
    {
      heading: "Membership and payment",
      blocks: [
        {
          type: "ul",
          items: [
            { text: "Membership is billed monthly. Your access covers the period you have paid for." },
            {
              text: "Payments are processed by our third-party payment gateway. Prices are shown on the website before you pay.",
            },
            {
              text: "To continue access, you must renew before your current period ends. If payment is not received, your access will be removed.",
            },
            { text: "You can cancel your monthly subscription manually at any time before the next renewal date." },
            {
              text: "We may change membership prices in the future. Any change will apply from your next billing period, not your current one.",
            },
          ],
        },
      ],
    },
    {
      heading: "Refunds",
      blocks: [
        {
          type: "p",
          text: "Memberships are non-refundable once access has been given. Full details are in our Refund Policy.",
        },
      ],
    },
    {
      heading: "Educational purpose only",
      blocks: [
        {
          type: "p",
          text: "All content shared by Elite Forex Hub, including analysis, levels, trade ideas and messages in the community, is for educational and informational purposes only. It is not financial, investment or trading advice, and it is not a recommendation to buy or sell any financial instrument. You are fully responsible for your own trading decisions.",
        },
      ],
    },
    {
      heading: "Risk warning",
      blocks: [
        {
          type: "p",
          text: "Trading forex, gold and other leveraged products carries a high level of risk and may not be suitable for everyone. You can lose some or all of the money you trade with. Past performance does not guarantee future results. Elite Forex Hub does not guarantee any profits, returns or specific outcomes. Only trade with money you can afford to lose.",
        },
      ],
    },
    {
      heading: "Member conduct",
      blocks: [
        { type: "p", text: "To keep the community useful for everyone, members must not:" },
        {
          type: "ul",
          items: [
            {
              text: "Share, copy, resell or forward any paid content, screenshots or invite links outside the community.",
            },
            { text: "Share their access with anyone else." },
            { text: "Promote other groups, services or products without permission." },
            { text: "Harass, abuse or spam other members." },
          ],
        },
        { type: "p", text: "We may remove any member who breaks these rules, without a refund." },
      ],
    },
    {
      heading: "Intellectual property",
      blocks: [
        {
          type: "p",
          text: "All content created by Elite Forex Hub, including analysis, charts, videos, logos and written material, belongs to Junaid Rizvi Financial Education and Coaching. You may use it for your own personal learning only.",
        },
      ],
    },
    {
      heading: "Third-party platforms",
      blocks: [
        {
          type: "p",
          text: "The community runs on Discord, and payments run through a payment gateway. These are third-party services with their own terms. We are not responsible for their downtime, changes or policies.",
        },
      ],
    },
    {
      heading: "Limitation of liability",
      blocks: [
        {
          type: "p",
          text: "To the fullest extent allowed by law, Elite Forex Hub and Junaid Rizvi are not liable for any trading losses, financial losses or damages arising from your use of our content or community.",
        },
      ],
    },
    {
      heading: "Changes to these terms",
      blocks: [
        {
          type: "p",
          text: "We may update these Terms and Conditions from time to time. The latest version will always be posted on this page. Continuing your membership after a change means you accept the updated terms.",
        },
      ],
    },
    {
      heading: "Governing law",
      blocks: [{ type: "p", text: "These terms are governed by the laws of Pakistan." }],
    },
  ],
};

export const refund: LegalDoc = {
  slug: "refund-policy",
  title: "Refund Policy",
  short: "Refunds",
  description: "When Elite Forex Hub memberships can and cannot be refunded, and how to cancel.",
  effective,
  intro: [
    "Please read our refund and payment policy carefully before making a purchase. By proceeding with a payment, either online or offline, you agree to the terms outlined below.",
    "All Elite Forex Hub memberships are non-refundable once access to the community has been given. However, members can cancel their monthly subscription manually at any time before the next renewal date if they choose to do so.",
  ],
  sections: [
    {
      heading: "No refunds after access",
      blocks: [
        {
          type: "p",
          text: "Elite Forex Hub is a digital service. Once your payment is confirmed and you receive the invite link or access to the Discord community, the content is immediately available to you. For this reason, we do not offer refunds, full or partial, for any membership period after access has been given. This also applies if you stop using the community, leave the server, or are removed for breaking our Terms and Conditions.",
        },
      ],
    },
    {
      heading: "Cancelling your membership",
      blocks: [
        {
          type: "p",
          text: "You can cancel at any time by simply not renewing, or by messaging us. Your access will continue until the end of the period you have already paid for, and you will not be charged again.",
        },
      ],
    },
    {
      heading: "When we will issue a refund",
      blocks: [
        { type: "p", text: "We will refund your payment in these cases:" },
        {
          type: "ul",
          items: [
            { term: "Duplicate payment", text: "you were charged twice for the same period." },
            {
              term: "No access given",
              text: "your payment went through, but we were unable to give you access within 48 hours and could not resolve it.",
            },
            {
              term: "Billing error",
              text: "you were charged an incorrect amount due to a mistake on our side.",
            },
          ],
        },
        {
          type: "p",
          text: "To request a refund in these cases, contact us within 7 days of the payment with your name, the payment date and the transaction reference. Approved refunds are sent back to the original payment method within 7 to 14 working days, depending on your bank or payment provider.",
        },
      ],
    },
  ],
};

export const legalDocs = [privacy, terms, refund];
