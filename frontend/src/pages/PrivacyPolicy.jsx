const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-10">

        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Privacy Policy
        </h1>

        <h2 className="text-xl font-semibold mt-6 mb-2">Introduction</h2>
        <p className="text-gray-700 leading-relaxed">
          This Privacy Policy applies to the securing and processing of personal data by
          <strong> Dhwanika Overseas </strong> in connection with personal data provided by any person
          (“User”) who has purchased or intends to purchase or inquires about any services
          through our website or other digital platforms.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-xl font-semibold mb-2">Purpose of This Policy</h2>
        <p className="text-gray-700 leading-relaxed">
          Dhwanika Overseas respects your privacy and ensures transparency about how your
          information is collected, used, stored and protected.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-xl font-semibold mb-2">
          Type of Personal Data We Collect
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Billing or contact address</li>
          <li>Travel preferences and destinations</li>
          <li>Payment information</li>
          <li>IP address and browser information</li>
        </ul>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-xl font-semibold mb-2">
          How We Collect Your Personal Data
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>When you submit inquiry forms</li>
          <li>When you book travel services</li>
          <li>When you contact us via email or phone</li>
          <li>When you interact with marketing campaigns</li>
        </ul>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-xl font-semibold mb-2">
          How We Use Your Personal Data
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>To process travel bookings</li>
          <li>To communicate regarding travel services</li>
          <li>To send promotional offers</li>
          <li>To improve website experience</li>
        </ul>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-xl font-semibold mb-2">Data Security</h2>
        <p className="text-gray-700">
          Dhwanika Overseas implements security measures to protect personal data from
          unauthorized access or misuse.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-xl font-semibold mb-2">Cookies</h2>
        <p className="text-gray-700">
          Our website may use cookies to improve user experience and analyze website traffic.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>

        <p className="text-gray-700">
          If you have any questions regarding this Privacy Policy, contact us:
        </p>

      <p className="text-gray-700 mt-2">
  <strong>Dhwanika Overseas</strong><br />
  Email: 
  <a 
    href="mailto:info@dhwanikaoverseas.in" 
    className="text-gray-600 font-semibold ml-1"
  >
    info@dhwanikaoverseas.in
  </a>
</p>
        <hr className="my-6 border-gray-300" />

        <p className="text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Dhwanika Overseas. All Rights Reserved.
        </p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;