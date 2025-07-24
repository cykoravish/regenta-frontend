import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ArrowLeft, FileText, Shield, CreditCard, Users, AlertTriangle, Phone, Mail, MapPin } from 'lucide-react';

const Terms = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const goBack = () => {
    window.history.back();
  };

  const PolicySection = ({ id, title, icon: Icon, children, defaultExpanded = false }) => {
    const isExpanded = expandedSections[id] !== undefined ? expandedSections[id] : defaultExpanded;
    
    return (
      <div className="bg-white rounded-lg shadow-md border border-gray-200 mb-6 overflow-hidden">
        <button
          onClick={() => toggleSection(id)}
          className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200"
        >
          <div className="flex items-center space-x-3">
            <Icon className="h-6 w-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          </div>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </button>
        
        {isExpanded && (
          <div className="px-6 pb-6 border-t border-gray-100">
            <div className="pt-4 text-gray-700 leading-relaxed">
              {children}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={goBack}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Go Back</span>
            </button>
            
            <div className="text-center flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
              <p className="text-xl text-gray-600">Regenta International</p>
            </div>
            
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
          
          <div className="mt-6 text-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-sm text-blue-800">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8 border border-gray-200">
          <div className="text-center mb-6">
            <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Regenta International</h2>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            These Terms and Conditions ("Terms", "Agreement") govern your use of our website regentainternational.in (the "Website") 
            and the services we offer, including IT solutions, software development, and related services ("Services").
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            <strong>By accessing or using the Website and purchasing our Services, you agree to be bound by these Terms.</strong>
          </p>
        </div>

        {/* Company Information */}
        <PolicySection id="company" title="Company Information" icon={MapPin} defaultExpanded={true}>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Company Details</h4>
                <p className="text-gray-700 mb-2"><strong>Company Name:</strong> Regenta International</p>
                <p className="text-gray-700 mb-2"><strong>Location:</strong> Delhi, India</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Contact Information</h4>
                <div className="flex items-center space-x-2 mb-2">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">info@regentainternational.in</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span className="text-gray-700">+91-9311689277</span>
                </div>
              </div>
            </div>
          </div>
        </PolicySection>

        {/* Services Offered */}
        <PolicySection id="services" title="Services Offered" icon={Users}>
          <p className="text-gray-700 mb-4">We provide IT and software-related services including, but not limited to:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h5 className="font-medium text-blue-800">Website Development</h5>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h5 className="font-medium text-green-800">Mobile App Development</h5>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h5 className="font-medium text-purple-800">UI/UX Design</h5>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h5 className="font-medium text-orange-800">Software Solutions</h5>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h5 className="font-medium text-indigo-800">Cloud Services</h5>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg">
              <h5 className="font-medium text-pink-800">Digital Marketing</h5>
            </div>
            <div className="bg-teal-50 p-4 rounded-lg col-span-full md:col-span-1">
              <h5 className="font-medium text-teal-800">Maintenance & Support Services</h5>
            </div>
          </div>
          <p className="text-gray-700">
            You can purchase our services directly through the Website. Details of each service, pricing, timelines, 
            and deliverables are provided on the respective service page.
          </p>
        </PolicySection>

        {/* Eligibility */}
        <PolicySection id="eligibility" title="Eligibility" icon={Shield}>
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-3">By using our Website and Services, you confirm that:</h4>
            <ul className="list-disc list-inside space-y-2 text-yellow-700">
              <li>You are at least 18 years old</li>
              <li>You have the legal authority to enter into a binding agreement</li>
            </ul>
          </div>
        </PolicySection>

        {/* Payments */}
        <PolicySection id="payments" title="Payments" icon={CreditCard}>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-green-800">
                <strong>Payment Terms:</strong> All payments must be made in full at the time of purchase, unless otherwise agreed upon.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800">
                <strong>Security:</strong> We use secure third-party payment gateways for processing transactions.
              </p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-orange-800">
                <strong>Pricing:</strong> We reserve the right to change our prices at any time.
              </p>
            </div>
          </div>
        </PolicySection>

        {/* Terms and Policies */}
        <PolicySection id="terms" title="Additional Terms" icon={FileText}>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Order Confirmation</h4>
              <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">
                Once you place an order, you will receive an email confirmation. This does not signify our acceptance of your order. 
                We reserve the right to accept or decline any order for any reason.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Refunds and Cancellations</h4>
              <p className="text-gray-700 bg-red-50 p-4 rounded-lg">
                Please refer to our Refund & Cancellation Policy for detailed information. Refunds may be issued in accordance 
                with the terms defined in that policy, based on service progress and delivery status.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Intellectual Property</h4>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-purple-800 mb-2">
                  All content, designs, source code, graphics, and materials provided by Regenta International remain our intellectual property 
                  unless otherwise agreed in writing.
                </p>
                <p className="text-purple-800">
                  You agree not to copy, reproduce, or distribute our proprietary content without our permission.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Client Responsibilities</h4>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 mb-2"><strong>You are responsible for:</strong></p>
                <ul className="list-disc list-inside space-y-1 text-blue-700 text-sm">
                  <li>Providing accurate and timely information required to complete the services</li>
                  <li>Approving drafts, content, or design within agreed timelines</li>
                  <li>Ensuring all content provided does not infringe on any third-party rights</li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Confidentiality</h4>
              <p className="text-gray-700 bg-indigo-50 p-4 rounded-lg">
                Both parties agree to maintain confidentiality over shared sensitive business or personal data, 
                unless required by law or with prior written consent.
              </p>
            </div>
          </div>
        </PolicySection>

        {/* Legal Terms */}
        <PolicySection id="legal" title="Legal Terms" icon={AlertTriangle}>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Limitation of Liability</h4>
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <p className="text-red-800">
                  Regenta International will not be held liable for any indirect, incidental, or consequential damages arising from the use of our services. 
                  Our maximum liability shall not exceed the total amount paid by you for the services.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Termination</h4>
              <p className="text-gray-700 bg-yellow-50 p-4 rounded-lg">
                We reserve the right to terminate access to our Website or Services if we believe that you have violated these Terms.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Governing Law</h4>
              <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">
                These Terms shall be governed by the laws of India. Any disputes arising shall be subject to the jurisdiction of the courts located in Delhi, India.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Modifications</h4>
              <p className="text-gray-700 bg-green-50 p-4 rounded-lg">
                We reserve the right to modify or replace these Terms at any time. Continued use of the Website after any changes constitutes acceptance of those changes.
              </p>
            </div>
          </div>
        </PolicySection>

        {/* Refund Policy */}
        <PolicySection id="refund" title="Return and Refund Policy" icon={CreditCard}>
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-semibold text-red-800 mb-3">No Refund Policy</h4>
              <p className="text-red-700 mb-4">
                Due to the nature of our services — which are tailored, time-bound, and labor-intensive — we do not offer refunds for any services once the payment has been made.
              </p>
              <p className="text-red-700 font-medium">This includes, but is not limited to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-red-600 text-sm">
                <li>Website Development</li>
                <li>Mobile App Development</li>
                <li>Software Solutions</li>
                <li>UI/UX Design</li>
                <li>Maintenance, Hosting, or Cloud Services</li>
                <li>Digital Marketing Services</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Service Agreement</h4>
              <p className="text-gray-700 bg-gray-50 p-4 rounded-lg">
                Before initiating any service, we discuss the full scope, timeline, deliverables, and cost with the client. 
                Once the work begins, the service is considered in progress and non-refundable under all circumstances.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Revisions & Support</h4>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 mb-2">We are committed to client satisfaction. While we do not offer refunds, we do provide:</p>
                <ul className="list-disc list-inside space-y-1 text-green-700 text-sm">
                  <li>Limited revisions based on the service package you select</li>
                  <li>Ongoing technical support or minor adjustments, where applicable</li>
                </ul>
                <p className="text-green-700 text-sm mt-2">
                  Please ensure your expectations, goals, and requirements are clearly communicated before we start the project.
                </p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Exceptions</h4>
              <p className="text-gray-700 bg-yellow-50 p-4 rounded-lg">
                There are no exceptions to the no-refund policy unless required by law. If a duplicate payment or technical error occurs, 
                please notify us within 3 business days, and we will review and resolve the issue appropriately.
              </p>
            </div>
          </div>
        </PolicySection>

        {/* Contact Information */}
        <div className="bg-gray-800 text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
          <p className="text-gray-300 mb-6">
            If you have any questions about these Terms and Conditions, please contact us at:
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <Mail className="h-6 w-6 text-blue-400" />
              <span className="text-white">info@regentainternational.in</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Phone className="h-6 w-6 text-green-400" />
              <span className="text-white">+91-9311689277</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © 2024 Regenta International. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;