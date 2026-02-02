'use client';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { MessageCircle, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-slate mb-4">
            Get In Touch
          </h2>
          <p className="text-neutral-600">
            We'd love to hear from you. Choose your preferred way to connect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-8 text-center hover:shadow-md transition-all flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-500/10 text-blue-600 rounded-full flex items-center justify-center mb-4">
              <MessageCircle size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Messenger</h3>
            <p className="text-sm text-neutral-500 mb-6">Chat with us on Facebook</p>
            <Button variant="outline" className="w-full text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white" onClick={() => alert("Opening Messenger...")}>
              Chat Now
            </Button>
          </Card>

          <Card className="p-8 text-center hover:shadow-md transition-all flex flex-col items-center">
            <div className="w-16 h-16 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mb-4">
              <Phone size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
            <p className="text-sm text-neutral-500 mb-6">Fast & direct messaging</p>
            <Button variant="outline" className="w-full text-green-600 border-green-600 hover:bg-green-600 hover:text-white" onClick={() => alert("Opening WhatsApp...")}>
              Message
            </Button>
          </Card>

          <Card className="p-8 text-center hover:shadow-md transition-all flex flex-col items-center">
            <div className="w-16 h-16 bg-red-500/10 text-red-600 rounded-full flex items-center justify-center mb-4">
              <Mail size={32} />
            </div>
            <h3 className="font-bold text-lg mb-2">Email</h3>
            <p className="text-sm text-neutral-500 mb-6">Send us your files & details</p>
            <Button variant="outline" className="w-full text-red-600 border-red-600 hover:bg-red-600 hover:text-white" onClick={() => alert("Opening Email...")}>
              Email Us
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
