import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'kushalvairal12@gmail.com',
      href: 'mailto:kushalvairal12@gmail.com',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '+91 9391296962',
      href: 'tel:+919391296962',
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      value: 'KushalVairal',
      href: 'https://github.com/KushalVairal',
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      value: 'Vairal Kushal',
      href: 'https://linkedin.com/in/vairal-kushal-a669aa267',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Get in Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {contact.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {contact.label}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {contact.value}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;