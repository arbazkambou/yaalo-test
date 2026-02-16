export type ContentType =
  | { type: "text" | "bold" | "bolder"; text: string }
  | { type: "link"; linkText: string; linkTo: string; text: string };

export interface TermsType {
  title: string;
  content: ContentType[];
  subTitles?: { title: string; content: ContentType[] }[];
}
export const termsData = (whatsappNumber: string): TermsType[] => {
  return [
    {
      title: "1. Validity of General Terms and Conditions",
      content: [
        {
          type: "text",
          text: "These Terms and Conditions are applicable to all services provided by our company in relation to the reselling of prepaid eSIMs. These terms are binding and enforceable upon the use of our services. We may accept variations to these terms only if explicitly agreed upon in writing.",
        },
      ],
      subTitles: [
        {
          title: "1.2. Description of Services",
          content: [
            {
              type: "text",
              text: "Our Unlimited plans include a daily high-speed data allowance (1GB, 2–3GB, or 5GB depending on the plan) with unlimited data at reduced speeds thereafter. The high-speed data resets every 24 hours from the first use.",
            },
            {
              type: "bold",
              text: "Please note: Data caps and speed policies may vary by country. In some locations, there are no speed restrictions. Before purchasing, we strongly recommend reviewing the full plan details to understand what’s included.",
            },
          ],
        },

        {
          title: "1.2.1. eSIM Reselling",
          content: [
            {
              type: "text",
              text: "We offer prepaid eSIMs for purchase, which can be used in various regions and countries. These eSIMs are designed to provide customers with a convenient and flexible way to access mobile data services.",
            },
          ],
        },

        {
          title: "1.2.2. Registration for Using Our Services",
          content: [
            {
              type: "text",
              text: "To use our services, customers must register and provide necessary personal information such as name, address, and email. This registration process is essential for activating and managing the eSIM services.",
            },
          ],
        },

        {
          title: "1.2.3. Our Engagements",
          content: [
            {
              type: "text",
              text: "We strive to provide high-quality service to our customers. However, we do not guarantee uninterrupted or error-free service. Our commitment is to use reasonable efforts to ensure the reliability and performance of our services.",
            },
          ],
        },

        {
          title: "1.2.4. Customer Engagements",
          content: [
            {
              type: "text",
              text: "Customers are expected to use our services responsibly. Actions that are abusive, illegal, or fraudulent or that impair the network are strictly prohibited. Violating these terms may result in suspension of services, during which the customer remains responsible for any charges incurred.",
            },
          ],
        },

        {
          title: "1.2.5. Device Compatibility",
          content: [
            {
              type: "text",
              text: "Customers are responsible for ensuring their devices are compatible with eSIM technology. Compatibility may vary based on the device's carrier and country of origin. The customer is responsible for verifying their device's compatibility from the provided list at the time of purchase.",
            },
          ],
        },
      ],
    },

    {
      title: "2. Registration and Activation",
      content: [],
      subTitles: [
        {
          title: "2.1. Registration Requirements",
          content: [
            {
              type: "text",
              text: "Customers must complete a registration process to access and use our eSIM services. This process is straightforward and designed to ensure a smooth and secure experience. The following are the critical requirements for registration:",
            },
            {
              type: "bold",
              text: "Personal Information: Customers must provide accurate and current personal information, including their first name, last name, billing address, and a valid email address. This information is crucial for account creation and communication purposes.",
            },

            {
              type: "bold",
              text: "Account Creation: Customers will create an account on our platform upon providing the necessary information. This account will manage purchases, track eSIM usage, and access support.",
            },

            {
              type: "bold",
              text: "Acceptance of Terms: Customers must review and accept our General Terms and Conditions during registration. This acceptance is a binding agreement that the customer agrees to adhere to our policies and procedures.",
            },

            {
              type: "bold",
              text: "Device Compatibility Check: Customers are responsible for ensuring their device is compatible with eSIM technology. A list of compatible devices is available on our website. Proceeding with the registration, the customer acknowledges that their device is compatible.",
            },
          ],
        },

        {
          title: "2.2. Purchase and Activation Process",
          content: [
            {
              type: "text",
              text: "After successful registration, customers can proceed to purchase and activate their eSIM:",
            },

            {
              type: "bold",
              text: "Selection of eSIM: Customers can browse various eSIM options on our platform, each tailored to different needs and destinations.",
            },

            {
              type: "bold",
              text: "Payment Process: Customers can proceed to payment once the eSIM is selected. We accept various payment methods, including Credit/Debit Card,, Google Pay, Apple Pay, and Alipay. All transactions are securely processed; the payment currency is in US Dollars ($).",
            },

            {
              type: "bold",
              text: "eSIM Delivery: After the purchase, the eSIM will be delivered electronically. Customers will receive an email with detailed instructions on installing and activating the eSIM. The eSIM can also be accessed under the 'My eSIMs' tab on the customer's account.",
            },

            {
              type: "bold",
              text: "Activation: Activation of the eSIM is the customer's responsibility. The process typically involves scanning a QR code and following simple steps. Once activated, the eSIM will be ready to use according to the chosen plan.",
            },

            {
              type: "bold",
              text: "Support and Assistance: In case of any difficulties during the registration or activation process, customers can contact our support team for assistance. Our team is available to ensure a hassle-free experience.",
            },
          ],
        },
      ],
    },

    {
      title: "3. Payment and Financial Terms",
      content: [],
      subTitles: [
        {
          title: "3.1. Charges and Payment",
          content: [
            {
              type: "bold",
              text: "Payment Conditions: Services can be purchased using various payment methods, including Credit/Debit Cards, PayPal, Google Pay, Apple Pay, and Alipay.",
            },

            {
              type: "bold",
              text: "Currency: All transactions are processed in US Dollars (USD).",
            },

            {
              type: "bold",
              text: "Security: Transactions are secured and processed through established payment providers like Stripe.",
            },

            {
              type: "bold",
              text: "Inclusivity of Charges: Prices include all applicable taxes and fees unless specified otherwise.",
            },
          ],
        },

        {
          title: "3.2. Refunds and Cancellations",
          content: [
            {
              type: "bold",
              text: "General Policy: eSIMs are one-time purchases and are non-refundable. Customers are not entitled to a refund if their devices are not unlocked or if they are not eSIM-compatible.",
            },

            {
              type: "bold",
              text: "Unlimited Bundles: Unlimited bundles are throttled and they drop down the speeds after using a specific amount of data at maximum speeds.",
            },

            {
              type: "bold",
              text: "Monthly Subscriptions: eSIMs come with renewable subscriptions that must be renewed before the expiry date to continue using the number and avoid service interruption.",
            },

            {
              type: "bold",
              text: "Fraudulent Usage: Yaalo holds the right to cancel the purchase if it suspects any fraud or spam usage.",
            },

            {
              type: "bold",
              text: "Virtual Numbers: Virtual Numbers will not work on WhatsApp and other similar services, and the customer is not entitled to a refund if they do not get the OTP codes for such services.",
            },
            {
              type: "bold",
              text: "Note: eSIM purchases are not eligible for a refund after 60 days from the purchase date, regardless of whether the eSIM has been installed or not.",
            },
          ],
        },
      ],
    },

    {
      title: "4. Legal and Compliance",
      content: [],
      subTitles: [
        {
          title: "4.1. Governing Law and Legal Compliance",
          content: [
            {
              type: "bold",
              text: "Jurisdiction: The services provided are governed by and construed in accordance with the laws of the jurisdiction where the service provider is based. Any legal actions or proceedings related to or arising out of these terms and conditions shall be exclusively subject to the jurisdiction of the courts in this region.",
            },
          ],
        },

        {
          title: "4.2. Liability and Warranty",
          content: [
            {
              type: "bold",
              text: "Service Availability: While the service provider endeavors to ensure the service is available and uninterrupted, there is no guarantee of uninterrupted service. The provider is not liable for any interruptions or lack of availability.",
            },

            {
              type: "bold",
              text: "Warranty Disclaimer: The services are provided 'as is' without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.",
            },

            {
              type: "bold",
              text: "Monthly Subscriptions: eSIMs come with renewable subscriptions that must be renewed before the expiry date to continue using the number and avoid service interruption.",
            },

            {
              type: "bold",
              text: "Limitation of Liability: The service provider shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangibles.",
            },
          ],
        },
      ],
    },

    {
      title: "5. Contact Information",
      content: [
        {
          type: "text",
          text: "For more information or assistance with our services, you may contact us through the following channels:",
        },

        {
          type: "bold",
          text: "Email Support: support@yaalo.com",
        },

        {
          type: "bold",
          text: "Live Chat Assistance: Available on our website's bottom right corner.",
        },
        {
          type: "bold",
          text: `WhatsApp Support:  ${whatsappNumber}, available 24/7`,
        },

        {
          type: "bold",
          text: "Business Inquiries: sales@yaalo.com",
        },

        {
          type: "bold",
          text: "Postal Correspondence: Yaalo, 250 S Ronald Reagan Blvd, Str 106, Orlando, FL",
        },
      ],

      subTitles: [
        {
          title: "5.2. Liability and Warranty",
          content: [
            {
              type: "bold",
              text: "Service Availability: While the service provider endeavors to ensure the service is available and uninterrupted, there is no guarantee of uninterrupted service. The provider is not liable for any interruptions or lack of availability.",
            },

            {
              type: "bold",
              text: "Warranty Disclaimer: The services are provided 'as is' without any warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.",
            },
            {
              type: "bold",
              text: "Limitation of Liability: The service provider shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangibles",
            },
          ],
        },

        {
          title: "5.3. Intellectual Property Rights",
          content: [
            {
              type: "bold",
              text: "Ownership: All intellectual property rights in the services, including any software, documentation, and content provided, are the property of the service provider or its licensors.",
            },

            {
              type: "bold",
              text: "Use of Service: Users are granted a limited, non-exclusive, non-transferable license to access and use the services for personal, non-commercial purposes as outlined in these terms.",
            },
          ],
        },

        {
          title: "5.4. Privacy Policy",
          content: [
            {
              type: "bold",
              text: "Data Protection: The service provider is committed to protecting the privacy and security of its users' data. Personal information collected is used in accordance with the company's Privacy Policy.",
            },

            {
              type: "bold",
              text: "Consent to Use Data: By using the service, users consent to the collection, use, and sharing of their data as outlined in the Privacy Policy.",
            },
          ],
        },

        {
          title: "5.5. Assignment",
          content: [
            {
              type: "bold",
              text: "Non-Transferable: Users cannot transfer or assign their rights or obligations under these terms without prior written consent from the service provider.",
            },

            {
              type: "bold",
              text: "Service Provider's Rights: The service provider may assign its rights and obligations to any affiliate or in connection with a merger, acquisition, corporate reorganization, or sale of all or substantially all of its assets.",
            },
          ],
        },
      ],
    },

    {
      title: "6. Additional Provisions",
      content: [],

      subTitles: [
        {
          title: "6.1. Delivery of Services",
          content: [
            {
              type: "bold",
              text: "Service Activation: Upon successful purchase, the service (e.g., eSIM) will be activated immediately or at a scheduled time as per the customer's choice. Customers will receive detailed instructions via email for installing and activating their service.",
            },

            {
              type: "bold",
              text: "Accessibility: The service will be accessible through the customer's account on our website or through our mobile application. Customers can view and manage their service details under the designated section (e.g., 'My eSIMs' tab).",
            },

            {
              type: "bold",
              text: "Compatibility: Customers are responsible for ensuring their device is compatible with the eSIM technology. A list of compatible devices is available on our website. By proceeding with the purchase, customers acknowledge and accept responsibility for compatibility checks.",
            },

            {
              type: "bold",
              text: "Service Limitations: While we strive to offer uninterrupted service, we cannot guarantee that the service will always be available, timely, secure, or error-free. The quality of the service may be affected by various factors including but not limited to the customer's location, device, and network congestion.",
            },
          ],
        },

        {
          title: "6.2. Miscellaneous Provisions",
          content: [
            {
              type: "bold",
              text: "Modifications to Terms: We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on our website. Continued use of our services after such changes will constitute acceptance of the new terms.",
            },

            {
              type: "bold",
              text: "Governing Law: These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is registered, without giving effect to Dispute Resolution: Any disputes arising out of or related to these terms will be resolved through arbitration, in accordance with the rules of the jurisdiction's arbitration association.",
            },
            {
              type: "bold",
              text: "Intellectual Property: All intellectual property rights related to the service, including trademarks, service marks, patents, copyrights, and trade secrets, are owned by us or our licensors. Use of our service does not grant customers any rights to our intellectual property.",
            },
            {
              type: "bold",
              text: "User Contributions: Any content or data uploaded by users while using our service remains the user's property. However, by uploading content, users grant us a worldwide, royalty-free license to use, reproduce, modify, and display this content in connection with the service.",
            },
            {
              type: "bold",
              text: "Privacy: We are committed to protecting the privacy of our users. Our Privacy Policy, available on our website, outlines our practices regarding collecting, using, and disclosing personal information.",
            },
            {
              type: "bold",
              text: "Assignment: Customers may not assign their rights or obligations under these terms without our prior written consent.",
            },
            {
              type: "bold",
              text: "Entire Agreement: These terms constitute the entire agreement between the customer and us concerning the service and supersede all prior or contemporaneous communications and proposals, whether electronic, oral, or written, between the customer and us.",
            },
            {
              type: "bold",
              text: "Severability: If any part of these terms is found to be invalid or unenforceable, that part will be modified to reflect the parties' intention or eliminated to the minimum extent necessary so that the remainder of these terms will continue in full force and effect.",
            },

            {
              type: "bold",
              text: "No Waiver: Our failure to enforce any right or provision of these terms will not be deemed a waiver of such right or provision.",
            },
          ],
        },
      ],
    },

    {
      title: "For more information about the terms of Service",
      content: [
        {
          type: "bold",
          text: "Email Support: For any inquiries or support needs, email us at support@yaalo.com. Our team is committed to providing prompt and helpful responses.",
        },

        {
          type: "bold",
          text: "Live Chat Assistance: If you prefer real-time assistance, click on the chat icon in our website's bottom right corner. Our chat support is readily available to address your queries instantly.",
        },

        {
          type: "bold",
          text: "Business Inquiries: For all business-related questions or proposals, please direct your emails to sales@yaalo.com. We look forward to exploring potential collaborations and business opportunities.",
        },
        {
          type: "bold",
          text: `Telephone Support: For those who wish to speak directly with our customer service representatives, call us at ${whatsappNumber}. Please note that our phone lines are operational from 9.00 to 17.00 Central European Time.`,
        },

        {
          type: "bold",
          text: "Postal Correspondence: If you need to send us any physical documents or correspond via mail, our postal address is:",
        },

        {
          type: "bolder",
          text: "``` Yaalo 250 S Ronald Reagan Blvd Str 106 Orlando, FL ```",
        },

        {
          type: "link",
          text: "Our team at Yaalo is dedicated to ensuring that your experience with our services is seamless and satisfactory. Whether it's a simple query or a detailed request, we're here to provide the support you need.",
          linkText: "Yaalo",
          linkTo: "/",
        },
      ],
    },
  ];
};

export const privacyPolicyData: TermsType[] = [
  {
    title: "1. Introduction and General Terms",
    content: [
      {
        type: "text",
        text: "Welcome to Yaalo.com. We understand the importance of your privacy and are committed to protecting your personal information. This Privacy Policy serves as our promise to handle your data with care, transparency, and respect.",
      },
      {
        type: "text",
        text: "At Yaalo.com, we provide innovative digital SIM card solutions to keep you connected globally without the hassle of physical SIM cards. Our commitment extends beyond offering exceptional services; we are equally dedicated to safeguarding your personal information.",
      },
      {
        type: "text",
        text: "This Privacy Policy outlines how we collect, use, store, and protect the personal information you share while using our website and services. It applies to all data collected through your interactions with our website, customer service, and our products and services.",
      },
      {
        type: "text",
        text: "We encourage you to read this policy carefully to understand our practices regarding your data. By accessing or using our services, you acknowledge that you have read, understood, and agreed to the terms of this Privacy Policy. If you do not agree with our practices, please do not use our website or services.",
      },
      {
        type: "text",
        text: "Please note that this policy may be updated occasionally to reflect changes in our practices or legal requirements. We will notify you of any significant changes and always have the most current version of the Privacy Policy on our website.",
      },
      {
        type: "text",
        text: "Your trust is important to us, and we are committed to ensuring the privacy and security of your personal information. If you have any questions or concerns about our Privacy Policy or practices, please contact us anytime.",
      },
    ],
  },
  {
    title: "2. What Information Do We Collect?",
    content: [
      {
        type: "text",
        text: "At Yaalo.com, we maintain our visitors' and customers' trust and confidence. In this section, we want to be transparent about the types of information we collect when you interact with our website and services. We aim to collect only the information that helps us provide you with a high-quality experience while respecting your privacy.",
      },
    ],
    subTitles: [
      {
        title: "Personally Identifiable Information (PII):",
        content: [
          {
            type: "bold",
            text: "Account Information: When you create an account on Yaalo.com, we collect basic information such as your name, email address, and contact number. This information is essential for setting up your account and for us to communicate with you.",
          },
          {
            type: "bold",
            text: "Purchase Details: If you purchase an eSIM or any other service from us, we collect transaction-related information, which includes your payment details, billing address, and the services you have purchased.",
          },
          {
            type: "bold",
            text: "Communication Records: If you contact our customer support, we may record that communication, including any additional personal information you provide during the conversation, to help resolve any issues or queries.",
          },
        ],
      },
      {
        title: "Sensitive Personal Data:",
        content: [
          {
            type: "text",
            text: "We understand the importance of extra sensitivity when it comes to personal data. We do not intentionally collect sensitive personal data such as your racial or ethnic origin, political opinions, religious beliefs, health information, or sexual orientation. If such information is required for any reason, it will be with your explicit consent and used only for the purpose stated at the time of collection.",
          },
        ],
      },
      {
        title: "Non-Personally-Identifiable Information:",
        content: [
          {
            type: "bold",
            text: "Usage Data: This includes information on how you use our website, such as the pages visited, time spent on pages, and the links clicked. This data helps us understand user behavior and improve our website's functionality and content.",
          },
          {
            type: "bold",
            text: "Technical Information: We collect technical information like your IP address, browser type, and operating system. This information helps us ensure our website's compatibility with your devices and provides a better user experience.",
          },
        ],
      },

      {
        title: "Cookies, Pixels, and Local Storage:",
        content: [
          {
            type: "bold",
            text: "Cookies: Small data files placed on your device. Cookies help us remember your preferences, understand how you interact with our website, and improve your user experience.",
          },
          {
            type: "bold",
            text: "Pixels: These are tiny graphics used to track the effectiveness of our advertising campaigns and understand user interactions with our website.",
          },
          {
            type: "bold",
            text: "Local Storage: We may use local storage technologies to store information locally on your device for better performance and user experience.",
          },

          {
            type: "text",
            text: "We are committed to using this information responsibly and ensuring its security. We collect and use this data to provide, maintain, and improve our services, process transactions, communicate with you, and enhance your overall experience with Yaalo.com. Your privacy is important to us, and we take all necessary steps to protect the information you share with us.",
          },
        ],
      },
    ],
  },
  {
    title: "3. Cookies We Use",
    content: [
      {
        type: "text",
        text: "At Yaalo.com, we use cookies to enhance your experience on our website. Cookies are small text files stored on your device when you visit a website. They help us understand how you use our site, remember your preferences, and provide a personalized experience. Here’s a simple breakdown of the types of cookies we use:",
      },
      {
        type: "bold",
        text: "Essential Cookies: These are necessary for the website to function correctly. They allow you to navigate our site and use our features, like accessing secure areas. Services you’ve asked for, like shopping baskets or e-billing, cannot be provided without these cookies.",
      },
      {
        type: "bold",
        text: "Performance Cookies: These cookies collect information about how you use our website, like which pages you visit most often and if you get error messages from web pages. These cookies don’t collect information that identifies you. All information these cookies collect is aggregated and, therefore, anonymous. It is only used to improve how our website works.",
      },
      {
        type: "bold",
        text: "Functionality Cookies: These recognize you when you return to our website. They enable us to personalize our content for you, greet you by name, and remember your preferences (for example, your choice of language or region).",
      },
      {
        type: "bold",
        text: "Advertising Cookies: These cookies record your visit to our website, the pages you have visited, and the links you have followed. We will use this information to make our website and its advertising more relevant to your interests. We may also share this information with third parties for this purpose.",
      },
      {
        type: "bold",
        text: "Analytics Cookies: These cookies collect information about visitors using our site. We use the information to compile reports and to help us improve the site. The cookies collect information in an anonymous form, including the number of visitors to the site, where visitors have come to the site from, and the pages they visited.",
      },
      {
        type: "bold",
        text: "How to Manage Cookies: You have the option to accept or decline cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies. However, this may prevent you from taking full advantage of the website.",
      },
      {
        type: "bold",
        text: "Remember: Cookies are meant to improve your user experience. They are not used to access personal information on your device or compromise privacy. At Yaalo.com, we are committed to using cookies responsibly and transparently.",
      },
    ],
  },
  {
    title: "4. What Do We Do With The Information That We Collect?",
    content: [
      {
        type: "text",
        text: "At Yaalo.com, we take your privacy seriously and use your personal information responsibly. Here’s a straightforward explanation of what we do with the information we collect from you to Improve Our Services. We use your information to improve our services. This includes fixing problems, updating our website, and improving user experience.",
      },

      {
        type: "bold",
        text: "Account Management: We need your details to manage your account. This means we use your information to communicate about your account and help you when you need it. Promotions and Customer Service: If you join any promotions or contests, we use your information to manage these activities. We also use your information to answer your questions and help when you contact us.",
      },
      {
        type: "bold",
        text: "Updates and Alerts: We’ll send you important updates about our services, like technical notices, security alerts, and support messages. These are essential to keep you informed and ensure our services run smoothly. Marketing (Only With Your Permission): With your consent, we might send you emails about new products, special offers, or other information you might find interesting. Remember, you can always choose not to receive these emails.",
      },
      {
        type: "bold",
        text: "Processing Payments: When you make a purchase, we use your information to process the payment securely. Legal and Safety Reasons: Sometimes, we might need to use your information to comply with laws, respond to legal requests, or protect your rights, our rights, and the safety of others.",
      },
      {
        type: "bold",
        text: "Sharing With Trusted Partners: We might share your information with companies that help us provide our services. These partners are carefully chosen and are only allowed to use your information for the services they provide to us.",
      },
      {
        type: "bold",
        text: "No Selling of Your Data: We do not sell your personal information to anyone.",
      },
      {
        type: "bold",
        text: "Retention of Information: We keep your information only as long as necessary for the purposes we collected it for, including for legal, accounting, or reporting requirements.",
      },
      {
        type: "bold",
        text: "Your Choices and Rights: You can access, correct, or delete your personal information. You can also opt out of marketing messages and ask us not to process your personal information for specific purposes.",
      },
    ],
  },
  {
    title: "5. Disclosure",
    content: [
      {
        type: "text",
        text: "At Yaalo.com, we believe in being transparent about using your information. Here's what you need to know:",
      },
      {
        type: "bold",
        text: "Sharing with Service Providers: We work with other companies who help us run our business. For example, we might share your information with payment processors or customer service providers. We only share what they need to do their job, and they're not allowed to use it for anything else.",
      },
      {
        type: "bold",
        text: "Legal Requirements: Sometimes, we might have to share your information if the law says we must or if we need to protect our rights or someone's safety.",
      },
      {
        type: "bold",
        text: "Business Transfers: If our business is sold or merged with another company, your information might be transferred to the new owners. We'll let you know if this happens.",
      },
    ],
  },
  {
    title: "6. Children’s Policy",
    content: [
      {
        type: "text",
        text: "Our website and services are not for kids under 13. Here's our approach:",
      },
      {
        type: "bold",
        text: "Not Collecting Kids' Data: We don't knowingly gather information from children under 13. If we find out we have, we'll delete it.",
      },
      {
        type: "bold",
        text: "Parental Control: If you're a parent and believe we might have information from your child, please contact us. We'll work with you to address the issue.",
      },
    ],
  },
  {
    title: "7. International Usage",
    content: [
      {
        type: "text",
        text: "Our services are available worldwide, and here's what that means for your information:",
      },
      {
        type: "bold",
        text: "Global Operations: We might process and store your information in different countries, not just where you live. We do this to make our service better and faster.",
      },
      {
        type: "bold",
        text: "Safety Measures: No matter where your information goes, we use the same protections everywhere. But remember, not all countries have the same data protection laws.",
      },
      {
        type: "bold",
        text: "Your Consent: By using our services, you're okay with us moving your information across borders in this way.",
      },
    ],
  },
  {
    title: "8. How Does A User Change Or Update Information?",
    content: [
      {
        type: "text",
        text: "At Yaalo.com, we understand that your personal information may change over time, and we are committed to helping you keep it up-to-date. Here’s a straightforward guide on how you can change or update your information:",
      },
      {
        type: "bold",
        text: "Accessing Your Account: To review or modify your personal information, simply log in to your account on our website. Once logged in, you will have access to your profile where you can update details such as your name, email address, phone number, and other relevant information.",
      },
      {
        type: "bold",
        text: "Contacting Customer Support: If you encounter any issues while updating your information or if you prefer assistance, our customer support team is here to help. You can reach out to us via email at support@yaalo.com, and we will guide you through the process. Please include your name and the specific changes you wish to make in your request.",
      },
      {
        type: "bold",
        text: "Security Verification: For your security, we may need to verify your identity before making certain changes. This step ensures that your information is protected and only modified by you or someone authorized by you.",
      },
      {
        type: "bold",
        text: "Deleting Your Information: If at any point you decide to stop using our services and wish to delete your account, you can do so through your account settings. Alternatively, you can contact our customer support for assistance. Please note that some information might be retained for legal or record-keeping purposes.",
      },
      {
        type: "bold",
        text: "Updates to Personal Preferences: You can also change your preferences for how we contact you or manage your consent for marketing communications through your account settings.",
      },
      {
        type: "bold",
        text: "Notification of Changes: If there are any changes to our privacy practices or if we need to use your personal information in a manner different from that stated at the time of collection, we will notify you via email and provide you with the opportunity to opt out of these new uses. We are committed to ensuring that your experience with Yaalo.com is enjoyable but also secure and respectful of your privacy. If you have any questions or concerns about how to change or update your information, please do not hesitate to contact us.",
      },
    ],
  },
  {
    title: "9. Security and Encryption",
    content: [
      {
        type: "text",
        text: "At Yaalo.com, we understand the importance of safeguarding your personal information and are committed to protecting it with robust security measures. Our approach to security and encryption is designed to ensure that your data remains private and secure from unauthorized access.",
      },
    ],
    subTitles: [
      {
        title: "Data Protection Measures:",
        content: [
          {
            type: "bold",
            text: "Secure Data Transmission: All data transmitted to and from our website is encrypted using Secure Socket Layer (SSL) technology. This means that any information you send us is protected by a secure, encrypted connection, safeguarding it against interception.",
          },
          {
            type: "bold",
            text: "Regular Security Updates: We regularly update our security practices and infrastructure to address evolving threats and vulnerabilities. This includes implementing patches and updates to our systems and software.",
          },
          {
            type: "bold",
            text: "Secure Storage: Your personal data is stored on secure servers that are protected by advanced firewalls and other cutting-edge security technologies. We take steps to ensure that our servers are secure and that they are located in facilities with strict access controls.",
          },
        ],
      },
      {
        title: "User Responsibility:",
        content: [
          {
            type: "bold",
            text: "Password Protection: We encourage you to use strong, unique passwords for your account and to keep your login credentials confidential. The security of your account also depends on you maintaining the confidentiality of your password.",
          },
          {
            type: "bold",
            text: "Phishing Awareness: Be aware of phishing attempts. We will never ask for your sensitive information via email. If you receive any suspicious emails claiming to be from Yaalo.com, please report them to us immediately.",
          },
          {
            type: "bold",
            text: "Data Encryption: Encryption at Rest and Transit: We use encryption for data at rest (data stored on our servers) and data in transit (data sent over the internet). This means your personal information is always encrypted whether it's being stored or sent. Secure Payment Processing: For financial transactions, we use encrypted payment processing systems to ensure that your credit card and payment details are always secure.",
          },
        ],
      },

      {
        title: "Incident Response",
        content: [
          {
            type: "bold",
            text: "Monitoring and Detection: We continuously monitor our systems for unusual activity and have procedures in place to detect and respond to potential security incidents.",
          },
          {
            type: "bold",
            text: "Rapid Response: In the unlikely event of a data breach, we have an incident response plan to address and mitigate any potential impact on your data and privacy quickly.",
          },
        ],
      },

      {
        title: "Continuous Improvement:",
        content: [
          {
            type: "bold",
            text: "Regular Reviews and Audits: Our security policies and procedures are regularly reviewed and audited to ensure they meet high standards of data protection.",
          },
          {
            type: "bold",
            text: "Feedback and Updates: We welcome feedback on our security practices and are committed to continuously improving our approach to data security. Your trust is important to us, and we are dedicated to ensuring the security and confidentiality of your personal information. If you have any questions about our security practices, please feel free to contact us at  ",
          },
        ],
      },
    ],
  },
  {
    title: "10. Changes to This Policy",
    content: [
      {
        type: "text",
        text: "At Yaalo.com, we understand that privacy is an ongoing responsibility. Therefore, we will occasionally update this Privacy Policy to reflect company and customer feedback, service changes, and current privacy and security best practices. Please periodically review this page for the latest information on our privacy practices. When we make significant changes to this policy, we will notify you through various channels this may include sending a notification via email (if you have provided us with your email address) or posting a notice prominently on our website. Please note that continued use of our service after any change means that you agree with and consent to be bound by the new Privacy Policy. If you do not agree to the new changes in our Privacy Policy, you should stop using our services and contact us to inquire about your options. We will also keep prior versions of this Privacy Policy in an archive for your review upon request. If you have any questions or concerns about our Privacy Policy or its implementation, you may Contact us",
      },
    ],
  },
];

export const RefundPolicyData: TermsType[] = [
  {
    title: "Refund Eligibility and Conditions",
    content: [
      {
        type: "bold",
        text: "Coverage Issues: If the eSIM cannot be installed due to coverage problems, you may request a refund or change.",
      },
      {
        type: "bold",
        text: "Technical Issues: In cases where technical problems originate from Yaalo and cannot be resolved promptly, refunds are possible only if no data has been consumed.",
      },
      {
        type: "bold",
        text: "Data Package Validity:  No refunds are available for any remaining data after the validity period of a data package expires.",
      },
      {
        type: "bold",
        text: "Accidental Purchases: No refunds are offered once the eSIM is installed and used.",
      },
      {
        type: "bold",
        text: "Incorrect Charges: Disputes on charges must be notified within 12 days of receipt, containing details of why the amount is incorrect.",
      },
      {
        type: "bold",
        text: "Fraudulent Activities: Yaalo reserves the right to refuse refunds in cases of suspected abuse, term violation, or fraudulent activities.",
      },
      {
        type: "bold",
        text: "Phone Compatibility: It's crucial to ensure your phone is eSIM compatible before purchase. No refunds are issued for incompatibility issues.",
      },
      {
        type: "bold",
        text: "One-time Purchase: eSIM is a one-time purchase and non-refundable",
      },
      {
        type: "bold",
        text: "Virtual Numbers: Virtual Numbers will not work on WhatsApp and other social media services, and the customer is not entitled to a refund if he does not get the OTP codes for such services.",
      },
    ],
  },
  {
    title: "Process for Requesting a Refund",
    content: [
      {
        type: "bold",
        text: "Time Frame: Refund requests must be made within 30 days of purchase.",
      },
      {
        type: "bold",
        text: "Cooperation: Prompt/timely cooperation in troubleshooting is necessary for a refund consideration.",
      },
      {
        type: "bold",
        text: "Notification: Email support@yaalo.com with your refund request, providing relevant details and reasons.",
      },
    ],
  },
  {
    title: "Exceptions and Specific Scenarios",
    content: [
      {
        type: "bold",
        text: "Unauthorized Purchases: Subject to investigation and approval.",
      },
      {
        type: "bold",
        text: "Modification: No modifications or customizations are allowed post-purchase.",
      },
      {
        type: "bold",
        text: "Ultimate Mobile Services: Service suspension may occur without notice and is not subject to refunds.",
      },
      {
        type: "bold",
        text: "Note: eSIM purchases are not eligible for a refund after 60 days from the purchase date, regardless of whether the eSIM has been installed or not.",
      },
    ],
  },
  {
    title: "Additional Terms",
    content: [
      {
        type: "bold",
        text: "Fair Usage Policy: This applies to all bundles/plans.",
      },
      {
        type: "bold",
        text: "Liability: Yaalo is not liable for service unavailability or network issues.",
      },
      {
        type: "bold",
        text: "Warranty: No guarantees on constant network availability.",
      },
    ],
  },
  {
    title: "Contact and Support",
    content: [
      {
        type: "text",
        text: "For any queries or assistance, please contact our support team at support@yaalo.com. We're here to help you for a smooth and hassle-free experience.",
      },
    ],
  },
];
