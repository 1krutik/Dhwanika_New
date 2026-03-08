const TermsConditions = () => {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-lg p-6 md:p-10">

        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
          Terms & Conditions
        </h1>

        <p className="text-gray-700">
          Welcome to <strong>Dhwanika Overseas</strong>. By accessing or using our
          website and services, you agree to comply with and be bound by the
          following Terms and Conditions. Please read them carefully before using
          our services.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p className="text-gray-700">
          By using this website, you acknowledge that you have read, understood,
          and agreed to these Terms & Conditions. If you do not agree with any
          part of these terms, please do not use our website or services.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-xl font-semibold mb-2">2. Services</h2>
        <p className="text-gray-700">
          Dhwanika Overseas provides visa assistance, travel consultation, and
          related services. While we assist in the application process, visa
          approval is solely at the discretion of the respective embassy or
          immigration authorities.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-xl font-semibold mb-2">3. User Responsibilities</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Provide accurate and complete information during inquiries or applications.</li>
          <li>Ensure all submitted documents are valid and genuine.</li>
          <li>Follow the guidelines and requirements provided by embassies and authorities.</li>
        </ul>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-xl font-semibold mb-2">4. Payments</h2>
        <p className="text-gray-700">
          Any service fees charged by Dhwanika Overseas are for consultation,
          processing assistance, or related services. Government or embassy fees
          may be separate and are subject to change.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
        <p className="text-gray-700">
          Dhwanika Overseas is not responsible for delays, rejections, or
          decisions made by embassies, immigration departments, or government
          authorities.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-xl font-semibold mb-2">6. Website Usage</h2>
        <p className="text-gray-700">
          Users must not misuse the website by attempting unauthorized access,
          distributing harmful content, or engaging in activities that may harm
          the website or its users.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-xl font-semibold mb-2">7. Changes to Terms</h2>
        <p className="text-gray-700">
          Dhwanika Overseas reserves the right to update or modify these Terms &
          Conditions at any time without prior notice. Continued use of the
          website constitutes acceptance of the updated terms.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-xl font-semibold mb-2">8. Contact Information</h2>

        <p className="text-gray-700 mt-2">
          <strong>Dhwanika Overseas</strong><br />
          Email:{" "}
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

export default TermsConditions;